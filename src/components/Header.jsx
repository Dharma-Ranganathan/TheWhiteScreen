import "../styles/Header.css";
import Logo from "./Logo";
import SwitchMode from "./SwitchMode";
import Favourites from "./Favourites";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <Logo />
        </div>

        <div className="icons-wrapper">
          <SearchBar />
          <Favourites />
          <SwitchMode />
        </div>
      </div>
    </div>
  );
};

export default Header;
