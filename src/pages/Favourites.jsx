import { useEffect, useState } from "react";
import "../styles/Favourites.css";

import { useFirestoreCustomFunctions } from "../hooks/useFirestoreCustomFunctions";
import PageTitle from "../components/PageTitle";
import CardContainer from "../components/CardContainer";
import Loader from "../components/Loader";
import MovieModal from "../components/MovieModal";

const Favourites = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getAllFavourites } = useFirestoreCustomFunctions();

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
    handleSetFavouriteMovies();
  }, []);

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
        <CardContainer favouriteMovies={favouriteMovies} isFavourite={true} />
      )}
      <MovieModal />
    </div>
  );
};

export default Favourites;
