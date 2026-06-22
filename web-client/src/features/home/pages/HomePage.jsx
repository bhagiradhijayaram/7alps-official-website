import Banner from "../sections/Banner";
import Contact from "../sections/Contact";
import GlobalTrade from "../sections/GlobalTrade";
import HeroSection from "../sections/HeroSection";
import OurFeaturedProducts from "../sections/ourFeaturedProducts";
import OurProcess from "../sections/OurProcess";
import WhyChoose from "../sections/WhyChoose";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OurFeaturedProducts />
      <OurProcess />
      <WhyChoose />
      <Banner />
      <GlobalTrade />
      <Contact />
    </>
  );
};

export default HomePage;
