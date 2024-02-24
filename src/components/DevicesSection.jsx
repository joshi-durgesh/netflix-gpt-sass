import { Box, Container, Grid, Typography } from "@mui/material";
import { DEVICE_IMG, VIDEO_DEVICES } from "../utils/constant";

const DevicesSection = () => {
  return (
    <Box className='section'>
      <Container maxWidth='lg' className='container-height'>
        <Grid container height={"100%"}>
          <Grid xs='6' className='content-container'>
            <Box color={"#fff"}>
              <Typography className='content-heading '>
                Watch everywhere
              </Typography>
              <Typography fontSize={"2.2rem"}>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </Typography>
            </Box>
          </Grid>
          <Grid xs='6' className='content-container'>
            <Box position={"relative"} width={"100%"} height={"100%"}>
              <img src={DEVICE_IMG} className='device-img' />
              <video autoPlay loop className='device-video'>
                <source src={VIDEO_DEVICES} type='video/mp4' />
              </video>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DevicesSection;
