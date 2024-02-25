import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box bgcolor={"#000"} py={"4rem"}>
      <Container maxWidth='lg'>
        <Stack direction={"row"} mb={"2rem"} color={"#b3b3b3"}>
          <Typography mr={"1rem"} fontSize={"1.4rem"} fontWeight={"bold"}>
            Questions? Call
          </Typography>
          <Link className='links'>000-800-919-1694</Link>
        </Stack>
        <Grid container>
          <Grid xs='3'>
            <List>
              <ListItem>
                <Link className='links'>FAQ</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Investor Relations</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Privacy</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Speed Test</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid xs='3'>
            <List>
              <ListItem>
                <Link className='links'>Help Center</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Jobs</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Cookie Preferences</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Legal Notices</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid xs='3'>
            <List>
              <ListItem>
                <Link className='links'>Account</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Ways to Watch</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Corporate Information</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Only on Netflix</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid xs='3'>
            <List>
              <ListItem>
                <Link className='links'>Media Center</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Term of Use</Link>
              </ListItem>
              <ListItem>
                <Link className='links'>Corporate Information</Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
