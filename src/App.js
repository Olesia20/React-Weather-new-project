import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="weather">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Friday: 22:20</li>
              <li>Sunny</li>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
                  width={80}
                  alt="Clouds"
                />
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: 30°C</li>
              <li>Humidity:30%</li>
              <li>Wind: 3 km/h</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <h1>Kyiv</h1>
          </div>

          <div className="col-6">
            <h1>30°C</h1>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default App;
