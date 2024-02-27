import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { CHILDREN_IMG } from "../utils/constant";

const ChildrenSection = () => {
  return (
    <section className='section'>
      <Container maxWidth='lg'>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          py={{ md: 10, xs: 7 }}
          gap={{ xs: 3, md: 0 }}
        >
          <Grid xs={12} md={6}>
            <figure className='figure'>
              <img src={CHILDREN_IMG} width={"100%"} />
            </figure>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack color={"#fff"}>
              <Typography
                className='content-heading'
                fontSize={{ xs: "2rem", sm: "3rem", md: "4.6rem" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                Create profiles for kids
              </Typography>
              <Typography
                fontSize={{ xs: "1.4rem", sm: "1.8rem", md: "2.2rem" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ChildrenSection;
