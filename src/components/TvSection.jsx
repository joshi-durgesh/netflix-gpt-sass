import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { TV_IMG, VIDEO_TV } from "../utils/constant";

const TvSection = () => {
  return (
    <Box className='section' bgcolor={"#000"}>
      <Container maxWidth='lg' className='container-height'>
        <Grid container height={"100%"}>
          <Grid
            xs='6'
            pr={"3rem"}
            alignItems={"center"}
            justifyContent={"space-between"}
            color={"#fff"}
            sx={{ display: "flex" }}
          >
            <Stack direction={"column"}>
              <Typography fontSize={"4.5rem"} fontWeight={"900"} mb={"2rem"}>
                Enjoy on your TV
              </Typography>
              <Typography fontSize={"2.2rem"}>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            xs='6'
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ display: "flex" }}
          >
            <Box className='tv-content'>
              <img src={TV_IMG} className='tv-img' />
              <video autoPlay={true} loop className='tv-video'>
                <source src={VIDEO_TV} type='video/mp4' />
              </video>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TvSection;
