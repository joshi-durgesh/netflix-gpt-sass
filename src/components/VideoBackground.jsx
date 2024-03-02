import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { Box } from "@mui/material";
import LoopingVideo from "./LoopingVideo";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  return (
    <Box
      position={"absolute"}
      top={0}
      left={0}
      width={"100%"}
      className='background-video'
      zIndex={"-1"}
    >
      <LoopingVideo videoKey={trailerVideo?.key} />
    </Box>
  );
};

export default VideoBackground;
