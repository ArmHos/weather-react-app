import { useEffect, useState } from "react";
import "./Home.scss";
import WeatherSearchBar from "./weather-search-bar/WeatherSearchBar";
import axios from "axios";
import WeatherDesc from "./weather-desc/WeatherDesc";
import CurrentDate from "./date/CurrentDate";
import WeatherRiseAndSet from "./weather-rise-and-set/WeatherRiseAndSet";
import WeatherHourlyForecast from "./weather-hourly-forecast/WeatherHourlyForecast";
import WeatherVideo from "./weather-video/WeatherVideo";

export function changeMilisToData(mil, tz) {
  if (!tz) {
    let date = new Date();
    return date.toString();
  } else {
    let date = new Date((mil + tz) * 1000);
    return date.toISOString().slice(11, 19);
  }
}

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getCurrentWetaherData() {
      try {
        const { data } = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=8d2872e587ea517f6c64fe0da9633da1`
        );
        setData(data);
        // localStorage.setItem("id", JSON.stringify(data.weather[0].id));
        console.log(data);
      } catch (err) {
        throw new Error(err);
      }
    }
    getCurrentWetaherData();
  }, []);

  console.log(data);
  return (
    <div className="weather-app">
      <WeatherSearchBar setData={setData} data={data} />
      <CurrentDate dt={data?.dt} tz={data?.timezone} />
      <WeatherDesc data={data} />
      <WeatherRiseAndSet
        sunrise={data?.sys?.sunrise}
        sunset={data?.sys?.sunset}
        tz={data?.timezone}
        max={data?.main?.temp_max}
        min={data?.main?.temp_min}
      />
      <WeatherHourlyForecast
        lat={data?.coord?.lat}
        lon={data?.coord?.lon}
        data={data}
      />
      <WeatherVideo data={data} />
    </div>
  );
};

export default Home;
