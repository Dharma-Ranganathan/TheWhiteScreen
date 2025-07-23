import "../styles/Header.css";
import Logo from "./Logo";
import SwitchMode from "./SwitchMode";
import Favourites from "./Favourites";
import Logout from "./Logout";

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
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Header;
