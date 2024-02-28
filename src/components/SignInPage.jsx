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
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

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
  const [isSignIn, setIsSignIn] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email?.current?.value?.trim().toLowerCase(),
      password?.current?.value?.trim()
    );
    setShowErrorMessage(message);
    if (message) return;

    //Sign in and sign up logic
    if (!isSignIn) {
      //  sign up logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value?.trim().toLowerCase(),
        password?.current?.value?.trim()
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value?.trim().toLowerCase(),
        password?.current?.value?.trim()
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <section className='section-img'>
      <Box className='container-dark ' height={"100vh"}>
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
                  {isSignIn ? "Sign in" : "Sign up"}
                </Typography>
                {!isSignIn && (
                  <CustomTextField
                    variant='outlined'
                    label='Name'
                    type='text'
                    fullWidth
                    autoComplete='off'
                  />
                )}
                <CustomTextField
                  inputRef={email}
                  variant='outlined'
                  label='Email'
                  type='email'
                  fullWidth
                  autoComplete='off'
                />
                <CustomTextField
                  inputRef={password}
                  variant='outlined'
                  label='Password'
                  type='password'
                  fullWidth
                  autoComplete='off'
                />
                <Typography
                  color={"red"}
                  textAlign={"left"}
                  fontSize={"1.3rem"}
                >
                  {showErrorMessage}
                </Typography>
                <Button
                  onClick={handleButtonClick}
                  variant='contained'
                  className='btn-lg'
                  sx={{
                    fontSize: { xs: "1rem", md: "1.6rem" },
                  }}
                >
                  {isSignIn ? "Sign in" : "Sign up"}
                </Button>
                <Stack direction={"row"} alignItems={"center"}>
                  <Typography fontSize={"1.4rem"} color={"#fff"}>
                    {isSignIn ? "New to Netflix?" : "Already an account?"}
                  </Typography>
                  <Button className='btn-type2' onClick={toggleSignIn}>
                    {isSignIn ? "Sign up now." : "Sign in now."}
                  </Button>
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
