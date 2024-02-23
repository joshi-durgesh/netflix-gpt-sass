import Header from "./Header";
import Button from "@mui/material/Button";
import { BG_POSTER } from "../utils/constant";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BG_POSTER})` }}
      className='h-[96vh] border-b-8 border-neutral-700 bg-cover'
    >
      <div className=' h-full bg-gradient-to-b from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.9)]'>
        <Header />
        <div className='text-white max-w-7xl mx-auto text-center mt-56'>
          <div className='text-5xl font-bold mb-6'>
            Laughter. Tears. Thrills. Find it all on Netflix.
          </div>
          <div className='text-2xl font-semibold mb-6'>
            Endless entertainment starts at just ₹149. Cancel anytime.
          </div>
          <div className='text-2xl font-semibold tracking-tighter mb-6'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>

          <Button
            className='bg-[#ff1621] hover:bg-[#b20f17] normal-case text-2xl font-semibold px-9 py-2 text-white'
            endIcon={<ArrowForwardIosIcon />}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
