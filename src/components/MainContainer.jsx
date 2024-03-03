import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { Box } from "@mui/material";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.animatedMovies);
  if (movies === null) return;

  const mainMovie = movies[7];
  const { original_title, overview, id } = mainMovie;

  return (
    <Box
      width={"100%"}
      position={"relative"}
      top={{ xs: "-4rem", sm: "-6.5rem", md: "-8rem", lg: "-10rem" }}
    >
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
