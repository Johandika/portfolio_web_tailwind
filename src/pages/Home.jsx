import Skills from "./sections/Skills";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

const Home = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
