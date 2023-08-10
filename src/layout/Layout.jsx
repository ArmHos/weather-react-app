import { Link } from "react-router-dom";
import "./Layout.scss";
import { TiWeatherPartlySunny } from "react-icons/ti";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Link to="/">
          <div className="logo">
            <TiWeatherPartlySunny />
            <h3>WeatherMap</h3>
          </div>
        </Link>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
