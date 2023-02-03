import React, { useEffect, useState } from "react";
import HeaderNavComponent from "./components/HeaderNavComponent";
import WeatherAppComponent from "./components/WeatherAppComponent";
import axios from "axios";
import { SpinningCircles } from "react-loading-icons";
import FooterComponent from "./components/FooterComponent";

function App() {
  const [city, setCity] = useState("Firenze");
  const [weather, setWeather] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=886705b4c1182eb1c69f28eb8c520e20&units=metric`
      );
      const data = res.data;
      setWeather({
        location: data.name,
        icon: data.weather[0].icon,
        temperature: data.main.temp,
        feels_like: data.main.feels_like,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
      });
    }
    if (isSubmitted) {
      fetchData();
    }
  }, [city, isSubmitted]);

  return (
    <>
      <HeaderNavComponent
        city={city}
        onCityChange={setCity}
        onCitySubmit={(value) => {
          setCity(value);
          setIsSubmitted(true);
        }}
      />
      {weather.location ? (
        <WeatherAppComponent
          location={weather.location}
          icon={weather.icon}
          temperature={weather.temperature}
          feels_like={weather.feels_like}
          windSpeed={weather.windSpeed}
          humidity={weather.humidity}
        />
      ) : (
        <div className="d-flex justify-content-center align-items-center m-5">
          <SpinningCircles
            fill="gray"
          />
        </div>
      )}

      <FooterComponent />
    </>
  );
}

export default App;
