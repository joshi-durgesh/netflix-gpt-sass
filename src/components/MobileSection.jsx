import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { DOWNLOAD_GIF, MOBILE_IMG, MOVIE_POSTER } from "../utils/constant";

const MobileSection = () => {
  return (
    <Box className='section' bgcolor={"#000"}>
      <Container maxWidth='lg' className='container-height'>
        <Grid container height={"100%"}>
          <Grid
            xs='6'
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box position={"relative"}>
              <img src={MOBILE_IMG} alt='mobile image' width={"100%"} />
              <Box
                display={"flex"}
                alignItems={"center"}
                position={"absolute"}
                justifyContent={"space-between"}
                bottom={"5%"}
                left={"21%"}
                bgcolor={"#000"}
                height={"10rem"}
                width={"33rem"}
                border={"2px solid #555"}
                borderRadius={"7px"}
              >
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
                <img src={DOWNLOAD_GIF} width={"50px"} height={"50px"} />
              </Box>
            </Box>
          </Grid>
          <Grid
            xs='6'
            color={"#fff"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ display: "flex" }}
          >
            <Stack direction={"column"}>
              <Typography
                fontSize={"4.6rem"}
                fontWeight={"900"}
                lineHeight={"6.5rem"}
                mb={"2rem"}
              >
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
