import { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Country';

function CountryList(){
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState("");

    const loadCountriesFromAPI = () => {
        axios.get('http://localhost:8080/api/countries')
            .then((response) => {
                if (response.status === 200) {
                    //console.log(response)
                    setCountries(response.data);
                }
            })
            .catch((error) => {
                setError(error.status + " error")
            })
    }

    useEffect(() => {
        loadCountriesFromAPI();
    }, [])

    const addCountry = (item) => {
        axios.post('http://localhost:8080/api/countries', {
            "name": item.name,
            "population": item.population
        })
            .then((response) => {
                if (response.status === 200) {
                    loadCountriesFromAPI();
                }
            })
            .catch((error) => {
                setError(error.status + " error")
            })
    }

    /*const addCitizen = (item) => {
        axios.post('http://localhost:8080/api/citizens', {
            "name": item.name,
            "country": item.country,
            "job":{
                "name":item.job.name,
                "salary":item.job.salary,
                "weeklyHours":item.job.weeklyHours
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    loadCountriesFromAPI();
                }
            })
            .catch((error) => {
                setError(error.status + " error")
            })
    }

    const setCountry = (id, country) => {
        console.log(id)
        console.log(countries)
        axios.patch(('http://localhost:8080/api/citizens' + id), {
            "country": country,
        })
            .then((response) => {
                if (response.status === 200) {
                    {func}
                }
            })
            .catch((error) => {
                setError(error.status + " error")
            })
    }*/

    const selectCountry = (item) => {
        console.log(item.id)
        console.log(countries)
        axios.put(('http://localhost:8080/api/countries/' + item.id), {
            "name": item.name,
            "population":item.population,
            "selected": !item.selected,
        })
            .then((response) => {
                if (response.status === 200) {
                    loadCountriesFromAPI()
                }
            })
            .catch((error) => {
                setError(error.status + " error")
            })
    }

    const deleteCountry = (id) => {
        axios.delete('http://' + id)
            .then((response) => {
                if (response.status === 200)
                    loadCountriesFromAPI()
            })
            .catch((error) => {
                setError(error.status + " error")
            })
    }

    const handleCountrySubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.countryName.value
        const population = event.target.elements.population.value

        /*if (name < 5) {
            setError("Item title needs to be longer than 5 characters")
            setCitizens([])
            return;
        }
        if (country < 5) {
            setError("Item description needs to be longer than 5 characters")
            setCitizens([])
            return;
        }*/
        setError("")
        
        /*addCitizen({
            "name": name,
            "country": country
        })*/
        event.target.elements.name.value = ""
        event.target.elements.country.value = ""

    }

    const handleCitizenSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value
        const country = event.target.elements.country.value

        /*if (name < 5) {
            setError("Item title needs to be longer than 5 characters")
            setCitizens([])
            return;
        }
        if (country < 5) {
            setError("Item description needs to be longer than 5 characters")
            setCitizens([])
            return;
        }*/
        setError("")
        
        /*addCitizen({
            "name": name,
            "country": country
        })*/
        event.target.elements.name.value = ""
        event.target.elements.country.value = ""

    } 
    
    return(
        <div>
            
            <div>{error}</div>
            <div>
                {countries.map((item)=>{
                    //console.log(item)
                    return <Country country={item} selectCountry={selectCountry} deleteCountry={deleteCountry}/>
                })}
            </div>
            <h1>Add or Modify Countries</h1>
            <form onSubmit={handleCountrySubmit}>
                <label>Name</label>
                <input name="countryName"></input>
                <label>Country</label>
                <input name="population"></input>
                <button type="submit">Add</button>
            </form>
            <h1>Add or Modify Citizens</h1>
            <form onSubmit={handleCitizenSubmit}>
                <label>Name</label>
                <input name="citizenName"></input>
                <label>Country</label>
                <input name="country"></input>
                <label>Salary</label>
                <input name="salary"></input>
                <label>Weekly Hours</label>
                <input name="weeklyHours"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default CountryList;