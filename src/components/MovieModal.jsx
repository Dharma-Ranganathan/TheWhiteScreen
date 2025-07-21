import "../styles/MovieModal.css";
import { FaStar, FaEye, FaRegCalendarCheck } from "react-icons/fa";

const MovieModal = () => {
  return (
    <div className="movie-modal">
      <div className="modal-wrapper">
        <div className="left-image-modal">
          {/* image  */}

          <img src="/placeholderMoviePoster.png" alt="movie-poster" />
        </div>
        <div className="right-movie-modal">
          {/* overview  */}

          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              expedita debitis vitae nihil iure perspiciatis doloremque a sunt
              quae optio harum eos eligendi facere consectetur, delectus
              temporibus enim error ullam adipisci accusamus autem voluptatum
              possimus, obcaecati quia
            </p>
          </div>

          {/* title  */}

          <div className="title">
            <h3>Lorem Ipsum The Fake</h3>
          </div>

          {/* credentials  */}

          <div className="creds">
            <div className="rating">
              <FaStar />
              <span>4.5</span>
            </div>
            <div className="views">
              <FaEye />
              <span>369</span>
            </div>
            <div className="release">
              <FaRegCalendarCheck />
              <span>Fri, 07/23/1999</span>
            </div>
          </div>

          {/* casts  */}

          <div className="casts">
            <div className="cast-container">
              <div className="imgbox">
                <img src="/placeholderMoviePoster.png" alt="castsImage" />
              </div>
              <p className="cast-name">Dharma</p>
              <div className="popularity">
                <FaStar />
                <span>9.85</span>
              </div>
            </div>
            <div className="cast-container">
              <div className="imgbox">
                <img src="/placeholderMoviePoster.png" alt="castsImage" />
              </div>
              <p className="cast-name">Dharma</p>
              <div className="popularity">
                <FaStar />
                <span>9.85</span>
              </div>
            </div>
            <div className="cast-container">
              <div className="imgbox">
                <img src="/placeholderMoviePoster.png" alt="castsImage" />
              </div>
              <p className="cast-name">Dharma</p>
              <div className="popularity">
                <FaStar />
                <span>9.85</span>
              </div>
            </div>
            <div className="cast-container">
              <div className="imgbox">
                <img src="/placeholderMoviePoster.png" alt="castsImage" />
              </div>
              <p className="cast-name">Dharma</p>
              <div className="popularity">
                <FaStar />
                <span>9.85</span>
              </div>
            </div>
            <div className="cast-container">
              <div className="imgbox">
                <img src="/placeholderMoviePoster.png" alt="castsImage" />
              </div>
              <p className="cast-name">Dharma</p>
              <div className="popularity">
                <FaStar />
                <span>9.85</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
