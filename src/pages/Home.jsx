import CardContainer from "../components/CardContainer";
import "../styles/Home.css";
import { useMoviesFromApi } from "../hooks/useMoviesFromServer";
import PageTitle from "../components/PageTitle";
import InfiniteButton from "../components/InfiniteButton";
import Loader from "../components/Loader";
import { useEffect } from "react";

const Home = () => {
  const { data, isLoading } = useMoviesFromApi();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
    document.title = "Home | The White Screen";
  }, []);

  const pages = data?.pages?.map((page, index) => {
    return <CardContainer key={index} page={page} isFavourite={false} />;
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="home-container">
      <PageTitle title={"Enjoy Unlimited Posters !"} />
      {pages}
      <InfiniteButton />
    </div>
  );
};

export default Home;
