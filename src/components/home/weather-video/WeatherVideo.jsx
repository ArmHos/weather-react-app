import sky from "../../../Assets/videos/sky.mp4";
import clearSky from "../../../Assets/videos/clearSky.mp4";
import thunder from "../../../Assets/videos/thunder.mp4";
import snow from "../../../Assets/videos/snow.mp4";
import drizzle from "../../../Assets/videos/drizzle.mp4";
import rain from "../../../Assets/videos/rain.mp4";
import fog from "../../../Assets/videos/fog.mp4";
import { useEffect, useState } from "react";

const WeatherVideo = ({ data }) => {
  const [vid, setVid] = useState(sky);

  useEffect(() => {
    if (data && data.weather && data.weather[0]) {
      let id = data.weather[0].id;
      if (id > 199 && id < 300) {
        console.log("thunder");
        setVid(thunder);
      } else if (id > 299 && id < 500) {
        console.log("drizzle");
        setVid(drizzle);
      } else if (id > 499 && id < 600) {
        console.log("rain");
        setVid(rain);
      } else if (id > 599 && id < 700) {
        console.log("snow");
        setVid(snow);
      } else if (id > 700 && id < 800) {
        console.log("fog");
        setVid(fog);
      } else if (id === 800) {
        console.log("clearSky");
        setVid(clearSky);
      } else if (id > 800 && id < 805) {
        console.log("sky");
        setVid(sky);
      } else {
        console.log("Unrecognized weather id:", id);
      }
    }
  }, [data]);
  return (
    <div className="video-container">
      <video autoPlay loop muted src={vid}></video>
    </div>
  );
};

export default WeatherVideo;
