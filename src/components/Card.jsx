import "../styles/Card.css";
import { FaStar } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";

const Card = () => {
  const [toggleHeart, setToggleHeart] = useState(false);

  function handleFavourite() {
    setToggleHeart(!toggleHeart);
  }

  return (
    <div className="card">
      <div className="poster">
        <img
          src="https://image.tmdb.org/t/p/original/1uy2PNFwtkqH3mhGd6irk5aeIrF.jpg"
          alt=""
        />
      </div>
      <div className="movie-title">
        <h4>Looks Can Kill</h4>
      </div>
      <div className="overview">
        <p>
          A group of models is killed off, one by one, and everyone is a suspect
        </p>
      </div>
      <div className="cred-container">
        <div className="creds">
          <div className="rating">
            <div className="rating-icon">
              <FaStar />
            </div>
            <p>4.5</p>
          </div>
          <span className="middot">&bull;</span>
          <div className="views">
            <div className="view-icon">
              <GrView />
            </div>
            <p>1500</p>
          </div>
        </div>
        <div className="favourite-icon" onClick={handleFavourite}>
          {!toggleHeart ? <FaRegHeart /> : <FaHeart />}
        </div>
      </div>
    </div>
  );
};

export default Card;
