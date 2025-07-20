import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useMoviesFromApi = () => {
  const INITIAL_PATH = "https://jsonfakery.com/movies/infinite-scroll";

  const getMoviesFromApi = async (params) => {
    const { data } = await axios.get(params.pageParam);
    return data;
  };

  const {
    data,
    fetchNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: getMoviesFromApi,
    initialPageParam: INITIAL_PATH,
    getNextPageParam: (lastPage) => {
      if (lastPage.next_page_url == null) {
        return undefined;
      }
      // console.log({ lastPage, allPages, lastPageParam });
      return lastPage.next_page_url;
    },
  });

  return {
    data,
    fetchNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
  };
};
