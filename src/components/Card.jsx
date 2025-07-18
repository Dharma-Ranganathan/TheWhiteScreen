import "../styles/Card.css";
import { FaStar } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";

const Card = ({ movie }) => {
  // console.log(movie);
  const [toggleHeart, setToggleHeart] = useState(false);

  function handleFavourite() {
    setToggleHeart(!toggleHeart);
  }

  return (
    <div className="card">
      <div className="poster">
        <img
          src={
            movie.poster_path
              ? movie.poster_path
              : "/placeholderMoviePoster.png"
          }
          alt="Movie-Poster"
        />
      </div>
      <div className="movie-title">
        <h4>{movie.original_title}</h4>
      </div>
      <div className="overview">
        <p>{movie.overview.substring(0, 70) + "..."}</p>
      </div>
      <div className="cred-container">
        <div className="creds">
          <div className="rating">
            <div className="rating-icon">
              <FaStar />
            </div>
            <p>{movie.vote_average}</p>
          </div>
          <span className="middot">&bull;</span>
          <div className="views">
            <div className="view-icon">
              <GrView />
            </div>
            <p>{movie.vote_count}</p>
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
