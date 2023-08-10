import { Link } from "react-router-dom";
import { BiRefresh } from "react-icons/bi";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops something gone wrong try again.</h2>
      <Link to={"/"}>
        <BiRefresh />
      </Link>
    </div>
  );
};

export default NotFound;
