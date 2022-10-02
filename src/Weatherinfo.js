import React from "react";
import FormatteDate from "./FormatteDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function Weatherinfo(props) {
  return (
    <div className="weather">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <FormatteDate date={props.data.data} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li className="icon">
              <WeatherIcon code={props.data.icon} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.fells)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <h1 className="city">{props.data.city}</h1>
        </div>
        <div className="col-4">
          <WeatherTemperature celciuse={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
