import { Home, Movie, MovieFilter, Search } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BottomNavigate = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (
    <Box
      sx={{ width: "100%", display: { xs: "block", md: "none" } }}
      className='bottom-navigation'
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (newValue === 3) {
            navigate("/browse/search");
          }
          if (newValue === 0) {
            navigate("/browse");
          }
        }}
      >
        <BottomNavigationAction label='Home' icon={<Home />} />
        <BottomNavigationAction label='Movies' icon={<Movie />} />
        <BottomNavigationAction label='Tv Shows' icon={<MovieFilter />} />
        <BottomNavigationAction label='Search' icon={<Search />} />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigate;
