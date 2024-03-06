import { useState } from "react";
import { LOGO } from "../utils/constant";
import {
  AppBar,
  Avatar,
  Button,
  Box,
  Menu,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  MenuItem,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Movies", "Tv Shows", "Search"];
const settings = ["Profile", "Account", "Logout"];

const BrowseHeader = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavigation = (page) => {
    const title = page.target.textContent;
    switch (title) {
      case "Search":
        navigate("/browse/search");
        console.log("search");
        break;
      case "Home":
        navigate("/browse");
        console.log("Home");
        break;
      case "Movies":
        console.log("Movies");
        break;
      case "Latest":
        console.log("Latest");
        break;
      case "Tv Shows":
        console.log("Tv Shows");
        break;
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (setting) => {
    handleCloseUserMenu();
    if (setting === "Logout") {
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          navigate("/error");
        });
    }
  };

  return (
    <AppBar className='browser-header'>
      <Container maxWidth='xl'>
        <Toolbar sx={{ minHeight: "20px", justifyContent: "space-between" }}>
          <Box width={{ xs: "8rem", sm: "12rem", md: "16rem" }}>
            <img src={LOGO} width={"100%"} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleNavigation}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "1.4rem",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton
                className='user-btn'
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  sx={{
                    width: { xs: "3rem", lg: "4rem" },
                    height: { xs: "3rem", lg: "4rem" },
                  }}
                  className='user-icon'
                  src={require("../images/user-icon.png")}
                />
                <ArrowDropDownIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleMenuItemClick(setting)}
                >
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default BrowseHeader;
