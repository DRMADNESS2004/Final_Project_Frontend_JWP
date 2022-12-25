import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";
import WorldList from "./WorldList";

function Map() {
    const [name,setName]=useState("");
    
    const handleClick = geo => () => {
        console.log(geo);
        setName(geo.name)
    }
    
    return (
      <div>
        /*<ComposableMap width={1000}>
            <Geographies geography={"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"}>
                {({ geographies }) =>
                    geographies.map((geo) => {
                    return <Geography key={geo.rsmKey} geography={geo} 
                    stroke="#000000"
                    tabIndex={-1}
                    style={{
                        default: { outline: "none" },
                        hover: { fill: "#255B52", transition: "0.3s" },
                        pressed: { outline: "none" },
                    }}
                    onClick={handleClick(geo.properties)}/>
                    })
                }
            </Geographies>
        </ComposableMap>
        <WorldList cName={name}/>*/
      </div>
    );
  }
  
  export default Map;