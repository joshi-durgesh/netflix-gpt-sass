import { Link } from "react-router-dom";
import { LOGO } from "../utils/constant";
import Button from "@mui/material/Button";
import { Box, Container, Stack } from "@mui/material";

const Header = () => {
  return (
    <header>
      <Container maxWidth='lg'>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          pt={2}
        >
          <Box width={{ xs: "12rem", sm: "18rem", md: "20rem" }}>
            <img
              src={LOGO}
              alt='Netflix logo'
              className='logo'
              width={"100%"}
            />
          </Box>
          <Button
            component={Link}
            to='/sign-in'
            variant='contained'
            className='btn-md'
            sx={{ fontSize: { xs: "1rem", md: "1.6rem" } }}
          >
            Sign in
          </Button>
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
