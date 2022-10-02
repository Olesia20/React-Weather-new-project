import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celciuse");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelciuse(event) {
    event.preventDefault();
    setUnit("celciuse");
  }
  function fahrenheit() {
    return (props.celciuse * 9) / 5 + 32;
  }
  if (unit === "celciuse") {
    return (
      <div>
        <h1>
          <strong className="temperature">{Math.round(props.celciuse)}</strong>
          <span className="unit">
            °C |{" "}
            <a className="celsiuse" href="/" onClick={convertToFahrenheit}>
              °F
            </a>{" "}
          </span>
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          <strong className="temperature">{Math.round(fahrenheit())}</strong>
          <span className="unit">
            <a className="fahrenheit" href="/" onClick={convertToCelciuse}>
              °C
            </a>{" "}
            | °F{" "}
          </span>
        </h1>
      </div>
    );
  }
}
