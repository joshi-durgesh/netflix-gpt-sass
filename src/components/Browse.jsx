import { Outlet } from "react-router-dom";
import useAnimatedMovies from "../hooks/useAnimatedMovies";
import useHindiMovies from "../hooks/useHindiMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTvShows from "../hooks/useTvShows";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import BrowseHeader from "./BrowseHeader";
import BottomNavigate from "./BottomNavigate";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvShows();
  useHindiMovies();
  useAnimatedMovies();

  return (
    <section className='browse-section'>
      <BrowseHeader />
      <BottomNavigate />
      <Outlet />
    </section>
  );
};

export default Browse;
