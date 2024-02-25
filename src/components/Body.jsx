import ChildrenSection from "./ChildrenSection";
import DevicesSection from "./DevicesSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import MobileSection from "./MobileSection";
import TvSection from "./TvSection";

const Body = () => {
  return (
    <>
      <HeroSection />
      <TvSection />
      <MobileSection />
      <DevicesSection />
      <ChildrenSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Body;
