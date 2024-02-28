import { Link } from "react-router-dom";
import { LOGO } from "../utils/constant";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid grey",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "grey",
  },

  "& .MuiInputLabel-root": {
    color: "#fff",
  },

  "& .MuiInputBase-input": {
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
});

const SignInPage = () => {
  return (
    <section className='section-img'>
      <Box className='container-dark '>
        <Container maxWidth='lg'>
          <Link to={"/"} className='p-4 block'>
            <Box width={{ xs: "12rem", sm: "18rem", md: "20rem" }}>
              <img src={LOGO} width={"100%"} />
            </Box>
          </Link>

          <Container maxWidth='xs'>
            <Grid py={15}>
              <form className='form-field'>
                <Typography
                  color={"#fff"}
                  fontSize={"2.5rem"}
                  fontWeight={"bold"}
                  textAlign={"left"}
                >
                  Sign in
                </Typography>
                <CustomTextField
                  variant='outlined'
                  label='Name'
                  type='text'
                  fullWidth
                  autoComplete='off'
                  sx={{ display: "none" }}
                />
                <CustomTextField
                  variant='outlined'
                  label='Email'
                  type='email'
                  fullWidth
                  autoComplete='off'
                />
                <CustomTextField
                  variant='outlined'
                  label='Password'
                  type='password'
                  fullWidth
                  autoComplete='off'
                />
                <Button
                  variant='contained'
                  className='btn-lg'
                  sx={{
                    fontSize: { xs: "1rem", md: "1.6rem" },
                    marginTop: "3rem",
                  }}
                >
                  Sign in
                </Button>
                <Stack direction={"row"} alignItems={"center"}>
                  <Typography fontSize={"1.4rem"} color={"#fff"}>
                    New to Netflix?
                  </Typography>
                  <Button className='btn-type2'>Sign up now.</Button>
                </Stack>
              </form>
            </Grid>
          </Container>
        </Container>
      </Box>
    </section>
  );
};

export default SignInPage;
