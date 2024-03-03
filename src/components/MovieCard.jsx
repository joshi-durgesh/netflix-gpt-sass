import { Box } from "@mui/material";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <Box
      width={{ xs: "60px", sm: "80px", md: "100px", lg: "120px" }}
      flex={"none"}
    >
      <img alt='movie poster' width={"100%"} src={IMG_CDN_URL + posterPath} />
    </Box>
  );
};

export default MovieCard;
