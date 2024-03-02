import { Box, Button, Stack, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const MovieList = ({ title, movies, id }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <Box pl={"3rem"}>
      <Typography variant='h4' fontWeight={"bold"} mb={2} color={"#fff"}>
        {title}
      </Typography>
      <Stack direction={"row"} className='carousel'>
        <Button
          onClick={slideLeft}
          sx={{
            left: "0",
          }}
          className='carousel-btn'
        >
          <ArrowBackIos sx={{ color: "#fff", fontSize: "4rem" }} />
        </Button>

        <Box className='carousel-items' id={"slider" + id}>
          {movies &&
            movies.map((movie) => {
              return (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              );
            })}
        </Box>
        <Button
          sx={{ right: "0" }}
          className='carousel-btn'
          onClick={slideRight}
        >
          <ArrowForwardIos sx={{ color: "#fff", fontSize: "4rem" }} />
        </Button>
      </Stack>
    </Box>
  );
};

export default MovieList;
