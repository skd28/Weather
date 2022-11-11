import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const apikey = "dd5d970db10565d03f23fa4460b2e111"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})

  const getWeatherDeatails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey
    axios.get(apiURL).then((res) => {
      console.log("respone", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInout = (e) => {
   console.log("value",e.target.value)
    setInputCity(e.target.value)
  }
  const handleSearch = () => {
    getWeatherDeatails(inputCity)
  }

  return (
    <>
      <div className="col-md-12">
        <div className="weather">
          <h1 className="heading">Weather App</h1>
          <div className="d-grid gap-3  col-4 mt-4">
            <input type="text" className="form-control"
            value={inputCity} onChange={handleChangeInout} />
            <button className="btn btn-primary" type="button" onClick={handleSearch}> Search</button>
          </div>
        </div>

        {Object.keys(data).length>0 &&
          <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultsBox">
            <img className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
            <h5 className="weatherCity">{data?.name}</h5>
            <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          </div>
        </div>
        }

      </div>
    </>
  );
}

export default App;
