import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { Box } from "@mui/material";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <Box className='all-movies' mt={"-25rem"} pb={"5rem"}>
      <MovieList
        id='1'
        title={"Now Playing"}
        movies={movies?.nowPlayingMovies}
      />
    </Box>
  );
};

export default SecondaryContainer;
