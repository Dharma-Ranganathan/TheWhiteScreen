import "../styles/CardContainer.css";
import Card from "./Card";

const CardContainer = ({ page, isFavourite, favouriteMovies }) => {
  let movies = [];

  if (!isFavourite) {
    movies = page?.data.map((movie) => <Card movie={movie} key={movie.id} />);
  }

  if (isFavourite) {
    movies = favouriteMovies.map((movie) => (
      <Card movie={movie} key={movie.docId} isFavourite={isFavourite} />
    ));
  }

  // console.log(movies);

  return <div className="card-container">{movies}</div>;
};

export default CardContainer;
