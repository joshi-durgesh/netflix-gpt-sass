import { Box } from "@mui/material";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <Box>
      <img alt='movie poster' width={"120px"} src={IMG_CDN_URL + posterPath} />
    </Box>
  );
};

export default MovieCard;
