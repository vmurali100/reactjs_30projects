import { createContext, useState } from "react";

export const WeatherContext = createContext("");

export const WeatherProvider = ({ children }) => {
  const [unit, setUnit] = useState("C"); // 'C' for Celsius, 'F' for Fahrenheit
  return (
    <WeatherContext.Provider value={{ unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};
