import { Link } from "react-router-dom";
import { LOGO } from "../utils/constant";
import Button from "@mui/material/Button";
import { Container, Stack } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth='lg'>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <img src={LOGO} alt='Netflix logo' className='logo' />

        <Button
          component={Link}
          to='/sign-in'
          variant='contained'
          className='btn-md'
        >
          Sign in
        </Button>
      </Stack>
    </Container>
  );
};

export default Header;
