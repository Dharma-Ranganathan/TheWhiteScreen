import { useEffect, useState } from "react";
import { useFirestoreCustomFunctions } from "../hooks/useFirestoreCustomFunctions";
import PageTitle from "../components/PageTitle";
import CardContainer from "../components/CardContainer";
const Favourites = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const { getAllFavourites } = useFirestoreCustomFunctions();

  async function handleSetFavouriteMovies() {
    const moviesList = await getAllFavourites();
    setFavouriteMovies(moviesList);
  }

  useEffect(() => {
    handleSetFavouriteMovies();
  }, []);

  return (
    <div className="favourite-page">
      <PageTitle title={"Your Favourites Movies here..."} />

      <CardContainer favouriteMovies={favouriteMovies} isFavourite={true} />
    </div>
  );
};

export default Favourites;
