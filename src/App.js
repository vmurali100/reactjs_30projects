import logo from "./logo.svg";
import "./App.css";
import Weather from "./Project1_WeatherApp/RenderProps/Weather";
import { WeatherProvider } from "./Project1_WeatherApp/ContextAPI/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Weather />
      </div>
    </WeatherProvider>
  );
}

export default App;
