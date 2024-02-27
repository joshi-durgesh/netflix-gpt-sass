import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container, Stack } from "@mui/material";
import faqData from "../utils/faqData.json";

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);
  const Data = faqData;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box className='faq-section'>
      <Container maxWidth='lg'>
        <Typography
          color={"#fff"}
          fontSize={{ xs: "1.8rem", sm: "3rem", md: "4.4rem" }}
          textAlign={"center"}
          fontWeight={"900"}
          mb={"3rem"}
        >
          Frequently Asked Questions
        </Typography>
        <Box px={2}>
          {Data?.map((data) => {
            return (
              <Accordion
                className='accordion-div'
                expanded={expanded === data?.id}
                onChange={handleChange(data?.id)}
              >
                <AccordionSummary
                  className='que-div'
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "#fff",
                        fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2.4rem" },
                      }}
                    />
                  }
                  aria-controls={data?.id + "bh-content"}
                  id={data?.id + "bh-header"}
                >
                  <Typography
                    fontSize={{ xs: "1.4rem", sm: "2rem", md: "2.4rem" }}
                    className='que'
                  >
                    {data?.que}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className='ans-div'>
                  <Stack gap={"2.4rem"}>
                    {data?.ans?.map((e) => {
                      return (
                        <Typography
                          color={"#fff"}
                          fontSize={{
                            xs: "1.2rem",
                            sm: "1.8rem",
                            md: "2.2rem",
                          }}
                        >
                          {e?.ans}
                        </Typography>
                      );
                    })}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            );
          })}
          ;
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
