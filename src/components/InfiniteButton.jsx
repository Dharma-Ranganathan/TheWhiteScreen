// import React from 'react'
import "../styles/InfiniteButton.css";

import { useMoviesFromApi } from "../hooks/useMoviesFromServer";
import Loader from "./Loader";

const InfiniteButton = () => {
  const { fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } =
    useMoviesFromApi();

  return (
    <div className="button-container">
      {isFetching && <Loader />}
      <button onClick={fetchNextPage} disabled={!hasNextPage}>
        {isFetchingNextPage
          ? "Loading Movies..."
          : hasNextPage
          ? "Load More Movies"
          : "You are all set, No More Movies"}
      </button>
    </div>
  );
};

export default InfiniteButton;
