import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { TV_IMG, VIDEO_TV } from "../utils/constant";

const TvSection = () => {
  return (
    <section className='section'>
      <Container maxWidth='lg'>
        <Grid
          container
          py={{ md: 10, xs: 7 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item md={6} xs={12}>
            <Stack direction={"column"} color={"#fff"}>
              <Typography
                fontSize={{ xs: "2rem", sm: "3rem", md: "4.6rem" }}
                textAlign={{ xs: "center", md: "left" }}
                className='content-heading'
              >
                Enjoy on your TV
              </Typography>
              <Typography
                fontSize={{ xs: "1.4rem", sm: "1.8rem", md: "2.2rem" }}
                textAlign={{ xs: "center", md: "left" }}
                paragraph
              >
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6} xs={12}>
            <figure className='figure'>
              <video autoPlay loop muted className='tv-video'>
                <source src={VIDEO_TV} type='video/mp4' />
              </video>
              <img src={TV_IMG} className='tv-img' />
            </figure>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default TvSection;
