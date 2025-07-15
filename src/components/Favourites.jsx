import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Favourites = () => {
  return (
    <div className="favourites">
      <Link to={"/favourites"}>
        <span className="fav-icon">
          <BsFillSuitHeartFill />
        </span>
      </Link>
    </div>
  );
};

export default Favourites;
