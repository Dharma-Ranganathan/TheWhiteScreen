import "../styles/MenuBar.css";
import SearchBar from "./SearchBar";

const MenuBar = () => {
  return (
    <div className="menu-container">
      <div className="menu-wrapper">
        <SearchBar />
      </div>
    </div>
  );
};

export default MenuBar;
