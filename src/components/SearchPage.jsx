import { Box, Button, Container, Grid } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import MovieSuggetion from "./MovieSuggetion";

const SearchPage = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuerry =
      "Act as a Movie Recommendation system and suggest some movies for the querry:" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gaddar, Shole, Don, Golmaal, Koi Mil Gaya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuerry }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      //TODO: write error handling
    }
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <section>
      <Box bgcolor={"#000"} py={9} height={"100vh"} mt={"-7rem"}>
        <Container maxWidth='md'>
          <Grid container alignItems={"stretch"} mt={7} px={"3rem"}>
            <Grid item xs={9}>
              <CustomTextField
                inputRef={searchText}
                placeholder='What would you like to watch today?'
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                sx={{ fontSize: { xs: "1.2rem", md: "1.4rem" } }}
                variant='contained'
                className='btn-search'
                onClick={handleGptSearchClick}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Container>

        <MovieSuggetion />
      </Box>
    </section>
  );
};

export default SearchPage;
