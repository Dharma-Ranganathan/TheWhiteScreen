import { useEffect, useState } from "react";
import "../styles/Favourites.css";

import { useFirestoreCustomFunctions } from "../hooks/useFirestoreCustomFunctions";
import PageTitle from "../components/PageTitle";
import CardContainer from "../components/CardContainer";
import Loader from "../components/Loader";
import MovieModal from "../components/MovieModal";
import useViewMovieDetail from "../hooks/useViewMovieDetail";

const Favourites = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { getAllFavourites } = useFirestoreCustomFunctions();
  const { viewMovie, showModal, getMovieDetail, setShowModal, setViewMovie } =
    useViewMovieDetail();

  async function handleSetFavouriteMovies() {
    try {
      setIsLoading(true);
      const moviesList = await getAllFavourites();
      setFavouriteMovies(moviesList);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    document.title = "Favourites | The White Screen";

    handleSetFavouriteMovies();
  }, []);

  // console.log(viewMovie, showModal);

  return (
    <div className="favourite-page">
      <PageTitle
        title={
          favouriteMovies.length
            ? "Your Favourites Movies here..."
            : "No Movies added in favourites... You can add one"
        }
      />
      {isLoading ? (
        <Loader />
      ) : (
        <CardContainer
          favouriteMovies={favouriteMovies}
          isFavourite={true}
          getMovieDetail={getMovieDetail}
        />
      )}
      {showModal && (
        <MovieModal
          viewMovie={viewMovie ? viewMovie : {}}
          setShowModal={setShowModal}
          setViewMovie={setViewMovie}
        />
      )}
    </div>
  );
};

export default Favourites;
