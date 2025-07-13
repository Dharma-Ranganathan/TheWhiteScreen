import "../styles/Header.css";
import Logo from "./Logo";
import SwitchMode from "./SwitchMode";

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <SwitchMode />
    </div>
  );
};

export default Header;
