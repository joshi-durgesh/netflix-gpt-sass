import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container, Stack } from "@mui/material";

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box className='faq-section'>
      <Container maxWidth='lg'>
        <Typography
          color={"#fff"}
          fontSize={"4.4rem"}
          textAlign={"center"}
          fontWeight={"900"}
          mb={"3rem"}
          sm
        >
          Frequently Asked Questions
        </Typography>
        <Box>
          <Accordion
            className='accordion-div'
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              className='que-div'
              expandIcon={<ExpandMoreIcon className='que' />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography className='que'>What is Netflix?</Typography>
            </AccordionSummary>

            <AccordionDetails className='ans-div'>
              <Stack gap={"2.4rem"}>
                <Typography className='ans'>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices.
                </Typography>
                <Typography className='ans'>
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className='accordion-div'
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              className='que-div'
              expandIcon={<ExpandMoreIcon className='que' />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography className='que'>
                How much does Netflix cost?
              </Typography>
            </AccordionSummary>

            <AccordionDetails className='ans-div'>
              <Stack gap={"2.4rem"}>
                <Typography className='ans'>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹149 to ₹649 a month. No extra costs, no contracts.
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className='accordion-div'
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              className='que-div'
              expandIcon={<ExpandMoreIcon className='que' />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography className='que'>How do I cancel?</Typography>
            </AccordionSummary>

            <AccordionDetails className='ans-div'>
              <Stack gap={"2.4rem"}>
                <Typography className='ans'>
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className='accordion-div'
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              className='que-div'
              expandIcon={<ExpandMoreIcon className='que' />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography className='que'>
                What can I watch on Netflix?
              </Typography>
            </AccordionSummary>

            <AccordionDetails className='ans-div'>
              <Stack gap={"2.4rem"}>
                <Typography className='ans'>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className='accordion-div'
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              className='que-div'
              expandIcon={<ExpandMoreIcon className='que' />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography className='que'>Is Netflix good for kids?</Typography>
            </AccordionSummary>

            <AccordionDetails className='ans-div'>
              <Stack gap={"2.4rem"}>
                <Typography className='ans'>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space.
                </Typography>
                <Typography className='ans'>
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className='accordion-div'
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              className='que-div'
              expandIcon={<ExpandMoreIcon className='que' />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography className='que'>Where can I watch?</Typography>
            </AccordionSummary>

            <AccordionDetails className='ans-div'>
              <Stack gap={"2.4rem"}>
                <Typography className='ans'>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                </Typography>
                <Typography className='ans'>
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
