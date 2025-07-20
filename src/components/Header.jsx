import "../styles/Header.css";
import Logo from "./Logo";
import SwitchMode from "./SwitchMode";
import Favourites from "./Favourites";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <Logo />
        </div>

        <div className="icons-wrapper">
          <Favourites />
          <SwitchMode />
        </div>
      </div>
    </div>
  );
};

export default Header;
