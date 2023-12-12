import Skills from "./sections/Skills";

import HeroSection from "./sections/HeroSection";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Certificates from "./sections/Certificates";
import Works from "./sections/Works";
import BackgroundAnimation from "../components/animation/BackgroundAnimation";
import { useScroll, useInView } from 'framer-motion'
import useSmooth from '../hooks/useSmooth'
import { useRef } from "react";
import GrainyTexture from "../components/animation/GrainyTexture";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '1']
  });

  const backgroundOpacity = useSmooth(scrollYProgress, [0.5, 1], [1, 0]);
  
  return (
    <>
     {/* <GrainyTexture className={`h-screen w-screen fixed opacity-20 [filter:url('#grainyTexture')] bg-RedDarkest -z-20`}/> */}
    <div ref={ref} className="font-Poppins sm:pt-[80px] pt-[60px]">
      <BackgroundAnimation
        style={{
          display: isInView ? 'flex' : 'none',
          opacity: backgroundOpacity
        }}
        isActive={isInView}
        className="fixed left-0 -z-30 flex h-full w-full scale-100 flex-col items-center justify-center lg:scale-125 "
      />
      <HeroSection />
      <Skills />
      <Projects />
      <Works/>
      <Certificates/>
      <Contact/>
    </div>
    </>

  );
};

export default Home;
