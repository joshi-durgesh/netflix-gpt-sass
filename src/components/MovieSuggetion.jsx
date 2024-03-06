import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggetion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <Box color={"#fff"} py={4} pb={"8rem"} bgcolor={"#000"}>
      <Container maxWidth='md'>
        <Box>
          {movieNames.map((movie, index) => {
            return (
              <MovieList
                key={movie}
                title={movie}
                movies={movieResults[index]}
                id={movie}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default MovieSuggetion;
