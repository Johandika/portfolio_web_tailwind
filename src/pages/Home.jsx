import Skills from "./sections/Skills";
import HeroSection from "./sections/HeroSection";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Certificates from "./sections/Certificates";
import Works from "./sections/Works";

const Home = () => {
  return (
    <div className="font-Poppins sm:pt-[80px] pt-[60px]">
      <HeroSection />
      <Skills />
      <Projects />
      <Works/>
      <Certificates/>
      <Contact/>
    </div>
  );
};

export default Home;
