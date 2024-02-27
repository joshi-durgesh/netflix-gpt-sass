import { Container, Grid, Stack, Typography } from "@mui/material";
import { DOWNLOAD_GIF, MOBILE_IMG, MOVIE_POSTER } from "../utils/constant";

const MobileSection = () => {
  return (
    <section className='section'>
      <Container maxWidth='lg'>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          py={{ md: 10, xs: 7 }}
          gap={{ xs: 3, md: 0 }}
        >
          <Grid item xs={12} md={6}>
            <figure className='figure'>
              <img src={MOBILE_IMG} alt='mobile image' width={"100%"} />
              <Stack
                className='mobile-card'
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack
                  direction={"row"}
                  item
                  alignItems={"center"}
                  height={"100%"}
                  p='0.5rem'
                >
                  <img src={MOVIE_POSTER} height={"100%"} />

                  <Stack color={"#fff"} ml={{ xs: 1, md: 2 }}>
                    <Typography fontSize={{ xs: ".6rem", md: "1.4rem" }}>
                      Stranger Things
                    </Typography>
                    <Typography
                      color={"blue"}
                      fontSize={{ xs: "0.8rem", md: "1.4rem" }}
                    >
                      Downloading...
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  item
                  height={"100%"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mr={{ xs: ".6rem", md: "1rem" }}
                >
                  <img src={DOWNLOAD_GIF} height={"60%"} />
                </Stack>
              </Stack>
            </figure>
          </Grid>
          <Grid item md={6} xs={12}>
            <Stack direction={"column"} color={"#fff"}>
              <Typography
                fontSize={{ xs: "2rem", sm: "3rem", md: "4.6rem" }}
                textAlign={{ xs: "center", md: "left" }}
                className='content-heading'
              >
                Download your shows to watch offline
              </Typography>
              <Typography
                fontSize={{ xs: "1.4rem", sm: "1.8rem", md: "2.2rem" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                Save your favourites easily and always have something to watch.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default MobileSection;
