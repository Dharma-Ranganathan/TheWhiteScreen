import { useState } from "react";

const useViewMovieDetail = () => {
  const [viewMovie, setViewMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getMovieDetail = (movie) => {
    try {
      setShowModal(true);
      // console.log(movie);
      setViewMovie(movie);
    } catch (error) {
      setShowModal(false);
      console.log(error);
    }
  };

  //   console.log(viewMovie, showModal);
  return { viewMovie, getMovieDetail, showModal, setShowModal, setViewMovie };
};

export default useViewMovieDetail;
