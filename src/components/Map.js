import { ComposableMap, Geographies, Geography } from "react-simple-maps";

function Map() {
    return (
      <div>
        <ComposableMap width={1000}>
            <Geographies geography={"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"}>
                {({ geographies, borders, outline }) =>
                    geographies.map((geo) => {
                    return <Geography key={geo.rsmKey} geography={geo} 
                    stroke="#000000"
                    tabIndex={-1}
                    style={{
                        default: { outline: "none" },
                        hover: { fill: "#255B52", transition: "0.3s" },
                        pressed: { outline: "none" },
                    }}/>
                    })
                }
            </Geographies>
            
        </ComposableMap>
      </div>
    );
  }
  
  export default Map;