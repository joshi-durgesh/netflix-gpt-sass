import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowseHeader from "./BrowseHeader";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <section>
      <BrowseHeader />
    </section>
  );
};

export default Browse;
