import Header from "./Header";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Stack, Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const HeroSection = () => {
  return (
    <Box className='hero-section'>
      <Stack className='hero-container'>
        <Header />
        <Container maxWidth='lg' className='hero-content'>
          <ThemeProvider theme={theme}>
            <Typography
              fontSize={"4.8rem"}
              fontWeight='900'
              mb={"2rem"}
              letterSpacing={"0"}
              sx={{ wordSpacing: "-.4rem" }}
            >
              Laughter. Tears. Thrills. Find it all on Netflix.
            </Typography>
            <Typography variant='h3' mb={"1rem"}>
              Endless entertainment starts at just ₹149. Cancel anytime.
            </Typography>
            <Typography variant='h3'>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Typography>
          </ThemeProvider>
          <Box pt={"3rem"}>
            <Button endIcon={<ArrowForwardIosIcon />} className='btn-lg'>
              Get Started
            </Button>
          </Box>
        </Container>
      </Stack>
    </Box>
  );
};

export default HeroSection;
