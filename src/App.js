import React, { useState } from "react";
import FormatteDate from "./FormatteDate";
import "./App.css";

import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handlResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      data: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      fells: response.data.main.feels_like,
      description: response.data.weather[0].description,
      iconUrl: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather">
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <FormatteDate date={weatherData.data} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
                <li>
                  <img
                    src={weatherData.iconUrl}
                    width={80}
                    alt={weatherData.description}
                  />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Feels like: {Math.round(weatherData.fells)}°C</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <h1 className="city">{weatherData.city}</h1>
            </div>
            <div className="col-4">
              <h1>
                <strong className="temperature">
                  {Math.round(weatherData.temperature)}
                </strong>
                <span className="unit">°C</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="newForm">
          <form className="formSearch">
            <input
              className="cityType"
              type="search"
              placeholder="Type a city"
              autoFocus="on"
            />
            <input className="citySearch" type="submit" value="Search" />
          </form>
        </div>
        <div className="weatherDaily">
          <div className="row">
            <div className="col-6">
              <ul>
                <li>monday</li>
                <li>monday</li>
                <li>monday</li>
                <li>monday</li>
                <li>monday</li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          This project was coded by Olesia Kononova and is {""}
          <a
            href="https://github.com/Olesia20/React-Weather-new-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced o GitHub
          </a>
        </footer>
      </div>
    );
  } else {
    let city = "Kyiv";
    const apiKey = "32326959e29561c07003e2cd9a21f791";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handlResponse);
    return "(Loading...)";
  }
}
