import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { CHILDREN_IMG } from "../utils/constant";

const ChildrenSection = () => {
  return (
    <Box className='section'>
      <Container maxWidth='lg' className='container-height'>
        <Grid container height={"100%"}>
          <Grid xs='6' className='content-container'>
            <img src={CHILDREN_IMG} width={"100%"} />
          </Grid>
          <Grid xs='6' className='content-container'>
            <Stack color={"#fff"}>
              <Typography className='content-heading'>
                Create profiles for kids
              </Typography>
              <Typography fontSize={"2.2rem"}>
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChildrenSection;
