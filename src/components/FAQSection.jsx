import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className='bg-black  border-b-8 border-neutral-700'>
      <div className='max-w-[1200px] mx-auto flex flex-col items-center gap-3 pt-14'>
        <div className='text-5xl font-bold text-white'>
          Frequently Asked Questions
        </div>
        <div className='w-full py-4 px-5'>
          <Accordion
            className='rounded-none'
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              className='bg-neutral-800 text-white'
              expandIcon={<ExpandMoreIcon className='text-white' />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography className='text-2xl text-white'>
                What is Netflix?
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </Typography>
              <Typography>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
