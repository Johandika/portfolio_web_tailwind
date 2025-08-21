import { Suspense, lazy } from 'react';
import Skills from './sections/Skills';
import HeroSection from './sections/HeroSection';
import BackgroundAnimation from '../components/animation/BackgroundAnimation';
import { useScroll, useInView } from 'framer-motion';
import useSmooth from '../hooks/useSmooth';
import { useRef } from 'react';

const Projects = lazy(() => import('./sections/Projects'));
const Works = lazy(() => import('./sections/Works'));
const Certificates = lazy(() => import('./sections/Certificates'));
const Contact = lazy(() => import('./sections/Contact'));

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0', '1'],
  });

  const backgroundOpacity = useSmooth(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <>
      <div ref={ref} className="font-Poppins sm:pt-[80px] pt-[60px]">
        <BackgroundAnimation
          style={{
            display: isInView ? 'flex' : 'none',
            opacity: backgroundOpacity,
          }}
          isActive={isInView}
          className="fixed left-0 -z-30 flex h-full w-full scale-100 flex-col items-center justify-center lg:scale-125 "
        />
        <HeroSection />
        <Skills />
        <Suspense fallback={<div className="text-white text-center py-20">Loading Projects...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="text-white text-center py-20">Loading Works...</div>}>
          <Works />
        </Suspense>
        <Suspense fallback={<div className="text-white text-center py-20">Loading Certificates...</div>}>
          <Certificates />
        </Suspense>
        <Suspense fallback={<div className="text-white text-center py-20">Loading Contact...</div>}>
          <Contact />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
