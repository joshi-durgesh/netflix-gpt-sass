import { Container, Grid, Stack, Typography } from "@mui/material";
import { DEVICE_IMG, VIDEO_DEVICES } from "../utils/constant";

const DevicesSection = () => {
  return (
    <section className='section'>
      <Container maxWidth='lg'>
        <Grid
          container
          py={10}
          gap={{ xs: 3, md: 0 }}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <Grid xs='12' md='6' className='content-container'>
            <Stack color={"#fff"}>
              <Typography
                fontSize={{ xs: "2rem", sm: "3rem", md: "4.6rem" }}
                textAlign={{ xs: "center", md: "left" }}
                className='content-heading'
              >
                Watch everywhere
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
          <Grid xs='12' md='6' className='content-container'>
            <figure className='figure'>
              <video autoPlay loop muted width='100%' className='device-video'>
                <source src={VIDEO_DEVICES} type='video/mp4' />
              </video>
              <img src={DEVICE_IMG} className='tv-img' width={"100%"} />
            </figure>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default DevicesSection;
