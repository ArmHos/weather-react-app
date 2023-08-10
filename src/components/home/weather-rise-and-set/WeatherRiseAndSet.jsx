import "./WeatherRiseAndSet.scss";
import { BsFillSunsetFill } from "react-icons/bs";
import { BsFillSunriseFill } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { changeMilisToData } from "../Home";

const WeatherRiseAndSet = ({ sunrise, sunset, tz, max, min }) => {
  return (
    <div className="rise-and-set">
      <div className="rise-and-set-rise">
        <BsFillSunriseFill color="#fff" size={30} />
        <span>Rise {changeMilisToData(sunrise, tz)}</span>
      </div>
      <div className="rise-and-set-set">
        <BsFillSunsetFill color="#fff" size={30} />
        <span>Set {changeMilisToData(sunset, tz)}</span>
      </div>
      <div className="rise-and-set-high">
        <AiOutlineArrowUp />
        <span>{`High: ${Math.floor(max)}  °C`}</span>
      </div>
      <div className="rise-and-set-low">
        <AiOutlineArrowDown />
        <span>{`Low: ${Math.floor(min)}  °C`}</span>
      </div>
    </div>
  );
};

export default WeatherRiseAndSet;
