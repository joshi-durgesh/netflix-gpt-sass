import useAnimatedMovies from "../hooks/useAnimatedMovies";
import useHindiMovies from "../hooks/useHindiMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTvShows from "../hooks/useTvShows";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import BrowseHeader from "./BrowseHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

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
      <MainContainer />
      <SecondaryContainer />
    </section>
  );
};

export default Browse;
