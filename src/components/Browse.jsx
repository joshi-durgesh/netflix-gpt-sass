import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowseHeader from "./BrowseHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <section>
      <BrowseHeader />
      <MainContainer />
      <SecondaryContainer />
    </section>
  );
};

export default Browse;
