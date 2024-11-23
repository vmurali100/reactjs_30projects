import React, { useState } from "react";
import { useEffect } from "react";

const WeatherFetcher = ({ location, render }) => {
  console.log("WeatherFetcher Called !!! ");

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data based on location
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=3a3f9d91bd514ec6aac102148241808&q=chittoor`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setWeather(data);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [location]);

  return render(weather);
};

export default WeatherFetcher;
