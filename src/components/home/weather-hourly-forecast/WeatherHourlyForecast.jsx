import { useState, useEffect } from "react";
import "./WeatherHourlyForecast.scss";
import axios from "axios";
import ForecastComp from "./forecast-comp/ForecastComp";
import { CONFIG } from "../../../config";

const WeatherHourlyForecast = ({ lat, lon, data }) => {
  const [dayData, setDaydata] = useState([]);
  const [hourData, setHourdata] = useState([]);
  const { days } = CONFIG;
  const dailyData = [];
  const hourlyData = [];
  useEffect(() => {
    async function getHourlyDailyData() {
      try {
        if (lat && lon) {
          const { data } = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode`
          );
          for (let i = 12; i < data.hourly.time.length; i += 24) {
            dailyData.push({
              time: days[new Date(data.hourly.time[i].slice(0, 10)).getDay()],
              temp: data.hourly.temperature_2m[i],
              icon: data.hourly.weathercode[i],
            });
          }
          for (let i = 12; i < 19; i++) {
            hourlyData.push({
              time: data.hourly.time[i].slice(11),
              temp: data.hourly.temperature_2m[i],
              icon: data.hourly.weathercode[i],
            });
          }

          setDaydata(dailyData);
          setHourdata(hourlyData);
        }
      } catch (err) {
        throw new Error(err);
      }
    }

    getHourlyDailyData();
  }, [lat, lon]);

  return (
    <div className="forecast">
      <div className="divider">
        <p>Daily Forecast</p>
        <hr />
      </div>
      <div className="forecast-daily">
        {dayData.map(({ time, temp }, i) => {
          return <ForecastComp time={time} temp={temp} icon={true} key={i} />;
        })}
      </div>
      <div className="divider">
        <p>Hourly Forecast</p>
        <hr />
      </div>
      <div className="forecast-hourly">
        {hourData.map(({ time, temp }, i) => {
          return (
            <ForecastComp
              time={time}
              temp={temp}
              icon={false}
              i={`https://openweathermap.org/img/wn/${
                data && data.weather && data.weather[0]?.icon
              }@2x.png`}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeatherHourlyForecast;
