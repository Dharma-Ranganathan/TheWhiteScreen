import "../styles/MenuBar.css";
import Favourites from "./Favourites";
import SearchBar from "./SearchBar";

const MenuBar = () => {
  return (
    <div className="menu-container">
      <div className="menu-wrapper">
        <SearchBar />
        <Favourites />
      </div>
    </div>
  );
};

export default MenuBar;
