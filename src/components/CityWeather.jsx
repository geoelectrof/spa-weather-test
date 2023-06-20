import axios from "axios"
import { useEffect, useState } from "react"
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const CityWeather = ({lat, lon}) => {
    const [forecastList, setForecastList] = useState([])

    useEffect(() => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=8&appid=${apiKey}`
            // `https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&cnt=3&appid=${apiKey}`
          )
          .then((response) => {
            console.log(response)
            setForecastList(response.data.list)
          })
          .catch((error) => console.log("My error", error));
    }, [])

    return (
        <div>
            {forecastList.map(weather => {
                return (
                    <div>{weather.weather[0].main}</div>
                )
            })}
        </div>
    )
}
export default CityWeather