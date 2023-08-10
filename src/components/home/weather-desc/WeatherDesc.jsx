import "./WeatherDesc.scss";
import WeatherTemp from "./weather-temp/WeatherTemp";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
const WeatherDesc = ({ data }) => {
  return (
    <div className="weather-desc">
      <span className="weather-desc-name">{data?.name}</span>
      <p className="weather-desc-description">
        {data?.weather && data.weather[0] && data.weather[0]?.description}
      </p>
      <div className="weather-desc-temp">
        <div className="weather-desc-temp-img">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.weather && data.weather && data.weather[0]?.icon
            }@2x.png`}
            alt="temp"
          />
        </div>
        <WeatherTemp temp={data?.main?.temp} />
        <div className="weather-desc-temp-feel">
          <div>
            <FaTemperatureHigh />
            Feels {data?.main?.feels_like} °
          </div>
          <div>
            <FaWind />
            Wind {data?.wind?.speed} km/h
          </div>
          <div>
            <WiHumidity />
            Humidity {data?.main?.humidity} %
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDesc;
