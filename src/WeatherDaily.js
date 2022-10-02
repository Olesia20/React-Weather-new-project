import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./App.css";
export default function WeatherDaily(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherDay">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={30} />
            <div className="WeatherForecast-temp">
              <span className="temperature-max">
                {Math.round(forecast[0].temp.max)}°C
              </span>
              <br />
              <span className="temperatyre-min">
                {Math.round(forecast[0].temp.min)}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `32326959e29561c07003e2cd9a21f791`;
    let logitute = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = ` https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${logitute}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
