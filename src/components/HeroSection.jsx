import Header from "./Header";
import Button from "@mui/material/Button";
import { BG_POSTER } from "../utils/constant";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeroSection = () => {
  return (
    <section className=''>
      <div className=' '>
        <Header />
        <div>
          <div>Laughter. Tears. Thrills. Find it all on Netflix.</div>
          <div>Endless entertainment starts at just ₹149. Cancel anytime.</div>
          <div>
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>

          <Button endIcon={<ArrowForwardIosIcon />}>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
