import React, { useContext } from "react";
import { WeatherContext } from "../ContextAPI/WeatherProvider";
import withAuthorization from "../HigherOrderComponents/withAuthorization";
import WeatherFetcher from "./WeatherFetcher";

const Weather = () => {
  const { unit, setUnit } = useContext(WeatherContext);

  return (
    <WeatherFetcher
      location="Chittoor"
      render={(weather) => {
        return (
          <div>
            {weather ? (
              <div>
                <h1>Weather in {weather.location.name}</h1>
                <p>Temperature: {weather.current.temp_c}°C</p>
                <p>Condition: {weather.current.condition.text}</p>
              </div>
            ) : (
              <p>Loading weather data...</p>
            )}
            <button onClick={() => setUnit(unit === "C" ? "F" : "C")}>
              Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
            </button>
          </div>
        );
      }}
    />
  );
};

export default withAuthorization(Weather);
