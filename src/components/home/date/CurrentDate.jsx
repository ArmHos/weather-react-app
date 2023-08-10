import { CONFIG } from "../../../config";
import { changeMilisToData } from "../../home/Home.jsx";
const CurrentDate = ({ dt, tz }) => {
  let date = new Date((dt + tz) * 1000);
  const { days, months } = CONFIG;

  return (
    <div className="date">
      <span>
        {`${days[date.getDay()]} ${months[date.getMonth()]} ${changeMilisToData(
          dt
        ).slice(8, 10)}
        ${changeMilisToData(dt, tz)}`}
      </span>
    </div>
  );
};

export default CurrentDate;
