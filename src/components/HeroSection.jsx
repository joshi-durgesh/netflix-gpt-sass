import Header from "./Header";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Stack, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <section className='section-img border-sec'>
      <Stack className='container-dark'>
        <Header />
        <Container maxWidth='lg'>
          <Box color={"#fff"} py={{ xs: "8rem", sm: "13rem", md: "15rem" }}>
            <Typography
              fontWeight='800'
              fontSize={{ xs: "2rem", sm: "3rem", md: "4.8rem" }}
              mb={"2rem"}
              letterSpacing={"0"}
              sx={{ wordSpacing: "-.4rem" }}
            >
              Laughter. Tears. Thrills. Find it all on Netflix.
            </Typography>
            <Typography
              fontSize={{ xs: "1.4rem", sm: "2rem", md: "3rem" }}
              mb={"1rem"}
            >
              Endless entertainment starts at just ₹149. Cancel anytime.
            </Typography>
            <Typography fontSize={{ xs: "1.4rem", sm: "2rem", md: "3rem" }}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Typography>
            <Box pt={"3rem"}>
              <Button
                endIcon={
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: {
                        xs: "1.2rem !important",
                        sm: "1.4rem !important",
                        md: "2.4rem !important",
                      },
                    }}
                  />
                }
                className='btn-lg'
                sx={{ fontSize: { xs: "1rem", sm: "1.4rem", md: "2.2rem" } }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Container>
      </Stack>
    </section>
  );
};

export default HeroSection;
