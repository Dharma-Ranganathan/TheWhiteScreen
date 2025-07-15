import "../styles/Header.css";
import Logo from "./Logo";
import SwitchMode from "./SwitchMode";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <Logo />
        <SwitchMode />
      </div>
    </div>
  );
};

export default Header;
