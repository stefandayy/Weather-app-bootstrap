import React, { useEffect, useState } from "react";
import HeaderNavComponent from "./components/HeaderNavComponent";
import WeatherAppComponent from "./components/WeatherAppComponent";
import axios from "axios";
import { SpinningCircles } from "react-loading-icons";
import FooterComponent from "./components/FooterComponent";

/* const obj = {
  coord: { lon: -96.7836, lat: 32.7668 },
  weather: [{ id: 701, main: "Mist", description: "mist", icon: "50n" }],
  base: "stations",
  main: {
    temp: 0.51,
    feels_like: -2.97,
    temp_min: -1.35,
    temp_max: 1.83,
    pressure: 1031,
    humidity: 94,
  },
  visibility: 6437,
  wind: { speed: 3.09, deg: 340 },
  clouds: { all: 100 },
  dt: 1675417729,
  sys: {
    type: 2,
    id: 2075302,
    country: "US",
    sunrise: 1675430447,
    sunset: 1675468863,
  },
  timezone: -21600,
  id: 4684904,
  name: "Dallas",
  cod: 200,
}; */

//

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
