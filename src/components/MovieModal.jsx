import "../styles/MovieModal.css";
import { FaStar, FaEye, FaRegCalendarCheck } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const MovieModal = ({ viewMovie, setShowModal, setViewMovie }) => {
  function handleCloseModal() {
    setShowModal(false);
    setViewMovie(null);
  }

  // console.log(viewMovie);
  return (
    <div className="movie-modal">
      <div className="modal-wrapper">
        <div className="left-image-modal">
          {/* image  */}

          <img
            src={
              viewMovie.poster_path == "https://image.tmdb.org/t/p/original"
                ? "/placeholderMoviePoster.png"
                : viewMovie.poster_path
            }
            alt="movie-poster"
          />
        </div>
        <div className="right-movie-modal">
          {/* overview  */}

          <div className="description">
            <p>{viewMovie.overview}</p>
          </div>

          {/* title  */}

          <div className="title">
            <h3>{viewMovie.original_title}</h3>
          </div>

          {/* credentials  */}

          <div className="creds">
            <div className="rating">
              <FaStar />
              <span>{viewMovie.vote_average}</span>
            </div>
            <div className="views">
              <FaEye />
              <span>{viewMovie.vote_count}</span>
            </div>
            <div className="release">
              <FaRegCalendarCheck />
              <span>{viewMovie.release_date}</span>
            </div>
          </div>

          {/* casts  */}

          <div className="casts">
            {viewMovie.casts.slice(0, 6).map((cast, index) => {
              return (
                <div className="cast-container" key={index}>
                  <div className="imgbox">
                    <img
                      src={cast.profile_path || "/placeholderMoviePoster.png"}
                      alt="castsImage"
                    />
                  </div>
                  <p className="cast-name">
                    {cast.name.substring(0, 10) + "..."}
                  </p>
                  <div className="popularity">
                    <FaStar />
                    <span>{cast.popularity.substring(0, 5)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <span className="closeModal" onClick={handleCloseModal}>
        <IoMdCloseCircle />
      </span>
    </div>
  );
};

export default MovieModal;
