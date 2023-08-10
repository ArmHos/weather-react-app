import { TiWeatherCloudy } from "react-icons/ti";

const ForecastComp = ({ time, temp, icon, i }) => {
  return (
    <div className="forecast-cont" key={time}>
      <p>{time}</p>
      {icon ? (
        <TiWeatherCloudy size={25} />
      ) : (
        <div className="icon" style={{ width: "50px", height: "50px" }}>
          <img
            src={i}
            alt="icon"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}
      <p>{`${Math.floor(temp)} °C`}</p>
    </div>
  );
};

export default ForecastComp;
