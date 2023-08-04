import React, { useState } from "react";
import "./Weather.css"


const api = {
  key: "4cd0d6d6e449eff3901a45f85f4ce1b6",
  base: "https://api.openweathermap.org/data/2.5/"
};

const Weather = () => {
  const [query, setquery] = useState(" ");
  const[weather,setweather]=useState({})
  

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
            setweather(result)
            setquery("")

    })
}
  }
  const handlechange=(e)=>
  setquery(e.target.value)
  const datebuilder=(d)=>{
      let months=

["january","february","march","april","may","june","july","august","september","october","november","december"]
      let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
       let day =days[d.getDay()];
       let date=d.getDate()
       let month=months[d.getMonth()];
       let year=d.getFullYear()
       return `${day} ${date} ${month} ${year}`
  }
    return(
        
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp >16) ? 'appwarm' : 

'appcool'): 'appcool'}>
            <main>
                <div className="search-bar">
                    <input className="input" type="text" placeholder="search.."
                    value={query}
                     onKeyPress={search} onChange={handlechange}></input>
                </div>
                {(typeof weather.main != "undefined")?(
                <div classname="location-name">
                    <div classname="location">
                        
                        {weather.name},
                        {weather.sys.country} 
                    </div>
                
                    <div className="year">
                        {datebuilder(new Date())}
                    </div>
                    <div className="">
                        <div className="temp">
                            {Math.round(weather.main.temp)}c
                        </div>
                    </div>
                    <div className="humidity">
                        {weather.weather[0].main}
                    </div>
                </div>
                
                ):(" ") }
            </main>
        
        </div>
    )
}
export default Weather

