import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { Box } from "@mui/material";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[16];
  const { original_title, overview, id } = mainMovie;

  return (
    <Box width={"100%"} position={"relative"} top={"-10rem"}>
      <Box
        sx={{ aspectRatio: "16/9", width: "100%" }}
        className='video-background'
      >
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </Box>
    </Box>
  );
};

export default MainContainer;
