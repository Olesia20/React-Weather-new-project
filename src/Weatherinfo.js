import React from "react";
import FormatteDate from "./FormatteDate";
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
            <li>
              <img
                src={props.data.iconUrl}
                width={120}
                alt={props.data.description}
              />
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
          <h1>
            <strong className="temperature">
              {Math.round(props.data.temperature)}
            </strong>
            <span className="unit">°C</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
