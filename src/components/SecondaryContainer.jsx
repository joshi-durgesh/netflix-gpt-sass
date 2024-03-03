import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { Box } from "@mui/material";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <Box
      className='all-movies'
      mt={{ xs: "-8rem", sm: "-17rem", md: "-20rem", lg: "-30rem" }}
      pb={"5rem"}
    >
      <MovieList
        id='1'
        title={"Now Playing"}
        movies={movies?.nowPlayingMovies}
      />
      <MovieList id='6' title={"Hindi Movies"} movies={movies?.hindiMovies} />
      <MovieList
        id='7'
        title={"Animated Movies"}
        movies={movies?.animatedMovies}
      />
      <MovieList id='5' title={"TV Shows"} movies={movies?.tvShows} />
      <MovieList id='3' title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MovieList id='2' title={"Pupular"} movies={movies?.popularMovies} />
      <MovieList id='4' title={"Upcoming"} movies={movies?.upcomingMovies} />
    </Box>
  );
};

export default SecondaryContainer;
