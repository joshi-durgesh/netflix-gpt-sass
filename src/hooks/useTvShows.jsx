import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTvShows } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTvShows = async () => {
  const dispatch = useDispatch();

  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=IN&with_origin_country=IN",
      API_OPTIONS
    );
    const json = await data?.json();
    dispatch(addTvShows(json?.results));
  };

  useEffect(() => {
    getTvShows();
  }, []);
};

export default useTvShows;
