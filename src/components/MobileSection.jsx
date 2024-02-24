import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { DOWNLOAD_GIF, MOBILE_IMG, MOVIE_POSTER } from "../utils/constant";

const MobileSection = () => {
  return (
    <Box className='section' bgcolor={"#000"}>
      <Container maxWidth='lg' className='container-height'>
        <Grid container height={"100%"}>
          <Grid xs='6' className='content-container'>
            <Box position={"relative"} width={"100%"} height={"100%"}>
              <img
                src={MOBILE_IMG}
                alt='mobile image'
                className='center-container'
                width={"100%"}
              />
              <Box className=' mobile-card'>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  height={"100%"}
                  p={"1rem"}
                >
                  <img src={MOVIE_POSTER} alt='movie poster' height={"100%"} />
                  <Box color={"#fff"} ml={"1rem"}>
                    <Typography fontSize={"1.4rem"}>Stranger Things</Typography>
                    <Typography color={"blue"} fontSize={"1.4rem"}>
                      Downloading...
                    </Typography>
                  </Box>
                </Box>
                <Box mr={"1rem"}>
                  <img src={DOWNLOAD_GIF} width={"50px"} height={"50px"} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs='6' className='content-container'>
            <Stack direction={"column"} color={"#fff"}>
              <Typography className='content-heading'>
                Download your shows to watch offline
              </Typography>
              <Typography fontSize={"2.2rem"}>
                Save your favourites easily and always have something to watch.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MobileSection;
