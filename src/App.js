import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defoulCity="Kyiv" />
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
}
