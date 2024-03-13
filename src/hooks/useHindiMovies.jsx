import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addHindiMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useHindiMovies = () => {
  const dispatch = useDispatch();

  const hindiMovies = useSelector((store) => store.movies.hindiMovies);

  const getHindiMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=HI&page=1&region=IN&sort_by=popularity.desc&watch_region=IN&with_origin_country=IN",
      API_OPTIONS
    );
    const json = await data?.json();
    dispatch(addHindiMovies(json?.results));
  };

  useEffect(() => {
    !hindiMovies && getHindiMovies();
  }, []);
};

export default useHindiMovies;
