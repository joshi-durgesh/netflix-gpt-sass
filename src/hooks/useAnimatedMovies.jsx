import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addAnimatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAnimatedMovies = () => {
  const dispatch = useDispatch();

  const animatedMovies = useSelector((store) => store.movies.animatedMovies);

  const getAnimatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_genres=16",
      API_OPTIONS
    );
    const json = await data?.json();
    dispatch(addAnimatedMovies(json?.results));
  };

  useEffect(() => {
    !animatedMovies && getAnimatedMovies();
  }, []);
};

export default useAnimatedMovies;
