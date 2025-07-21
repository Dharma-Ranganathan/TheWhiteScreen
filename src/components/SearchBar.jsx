import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div className="search-icon" onClick={() => navigate("/search-movies")}>
      <span>
        <FaSearch />
      </span>
    </div>
  );
};

export default SearchBar;
