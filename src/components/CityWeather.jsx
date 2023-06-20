import axios from "axios"
import { useEffect, useState } from "react"
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const CityWeather = ({lat, lon}) => {
    const [forecastList, setForecastList] = useState([])

    useEffect(() => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=8&appid=${apiKey}&units=metric`
      
          )
          .then((response) => {
            console.log(response)
            console.log(response.data.list)
            const today = new Date()
            console.log("today.getDate()", today.getDate());
            let list = response.data.list.filter(item => {
                return item.dt_txt.substr(8,2) == today.getDate()
                // console.log( item.dt_txt.substr(8,2) )
            })
            setForecastList(list)
          })
          .catch((error) => console.log("My error", error));
    }, [])

    return (
        <div>
            {forecastList && forecastList.map(weather => {
                return (
                  <div key={weather.dt}>
                    <h5>{new Date(weather.dt * 1000).toLocaleTimeString()}</h5>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                    />
                    <p>{weather.weather[0].main}</p>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Real Feel: {weather.main.feels_like} °C</p>
                    <p>Humidity: {weather.main.humidity} %</p>

                    <hr />
                  </div>
                );
            })}
        </div>
    )
}
export default CityWeather