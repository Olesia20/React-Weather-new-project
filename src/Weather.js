import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherDaily from "./WeatherDaily";
import Weatherinfo from "./Weatherinfo";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defoulCity);
  function handlResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      data: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      fells: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "32326959e29561c07003e2cd9a21f791";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handlResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <Weatherinfo data={weatherData} />
        <div className="newForm">
          <form className="formSearch" onSubmit={handleSubmit}>
            <input
              className="cityType"
              type="search"
              placeholder="Type a city"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input className="citySearch" type="submit" value="Search" />
          </form>
        </div>
        <div className="weatherDaily">
          <WeatherDaily coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "(Loading...)";
  }
}
