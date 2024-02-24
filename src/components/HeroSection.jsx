import Header from "./Header";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Stack, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box className='hero-section'>
      <Stack>
        <Header />
        <Container maxWidth='lg'>
          <Typography>
            Laughter. Tears. Thrills. Find it all on Netflix.
          </Typography>
          <Typography>
            Endless entertainment starts at just ₹149. Cancel anytime.
          </Typography>
          <Typography>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>

          <Button endIcon={<ArrowForwardIosIcon />}>Get Started</Button>
        </Container>
      </Stack>
    </Box>
  );
};

export default HeroSection;
