import { memo, useCallback, useEffect, useState } from "react";
import "./WeatherSearchBar.scss";
import { FaSearch } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import axios from "axios";

const WeatherSearchBar = ({ setData, data }) => {
  let [value, setValue] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", inputHandler);

    return () => {
      document.removeEventListener("keydown", inputHandler);
    };
  });

  // const getWeatherData = useCallback(async () => {
  //   try {
  //     if (value.trim()) {
  //       const { data } = await axios.get(
  //         `http://api.openweathermap.org/data/2.5/weather?q=${value
  //           .trim()
  //           .toLowerCase()}&units=metric&APPID=8d2872e587ea517f6c64fe0da9633da1`
  //       );
  //       setData(data);
  //       localStorage.setItem("id", JSON.stringify(data.weather[0].id));
  //       setValue("");
  //     }
  //   } catch (err) {
  //     // throw new Error(err);
  //     console.error(err);
  //     window.location.href = "/not-found";
  //   }
  // }, []);

  async function getWeatherData() {
    try {
      if (value.trim()) {
        const { data } = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${value
            .trim()
            .toLowerCase()}&units=metric&APPID=8d2872e587ea517f6c64fe0da9633da1`
        );
        setData(data);
        localStorage.setItem("id", JSON.stringify(data.weather[0].id));
        setValue("");
      }
    } catch (err) {
      console.error(err);
      window.location.href = "/not-found";
    }
  }

  function inputHandler(e) {
    if (e.code === "Enter") {
      getWeatherData();
    }
  }
  return (
    <div className="weather-search-bar">
      <input
        type="text"
        placeholder="Search for country or city ..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <FaSearch
        className="search-button"
        onClick={() => {
          getWeatherData();
        }}
      />
      <ImLocation2 />
    </div>
  );
};

export default memo(WeatherSearchBar);
