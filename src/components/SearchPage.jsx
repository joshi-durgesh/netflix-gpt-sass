import { Box, Button, Container, Grid } from "@mui/material";
import CustomTextField from "./CustomTextField";

const SearchPage = () => {
  return (
    <section>
      <Box bgcolor={"#000"} py={9} mt={"-7rem"}>
        <Container maxWidth='lg'>
          <Grid container mt={7}>
            <Grid item>
              <CustomTextField placeholder='What you want to watch today?' />
              <Button variant='contained' color='success'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default SearchPage;
