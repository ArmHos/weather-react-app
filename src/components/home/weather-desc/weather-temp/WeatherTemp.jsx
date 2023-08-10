import { useState } from "react";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";

const WeatherTemp = ({ temp }) => {
  const [cels, setCels] = useState(true);
  function changetTemp() {
    setCels((prev) => !prev);
  }
  function changeTempToCel() {
    if (temp) {
      if (cels) {
        return Math.floor(temp);
      } else {
        let far = temp * 1.8 + 32;
        return Math.floor(far);
      }
    }
  }
  return (
    <div className="weather-desc-tempriture">
      <h2>{changeTempToCel(temp)}</h2>
      <TbTemperatureCelsius
        size={25}
        color={cels ? "black" : "#fff"}
        onClick={changetTemp}
      />
      <span>/</span>
      <TbTemperatureFahrenheit
        size={25}
        color={cels ? "#fff" : "black"}
        onClick={changetTemp}
      />
    </div>
  );
};

export default WeatherTemp;
