import Button from "../../components/Button";
import Container from "../../components/Container";
import TypedText from "../../components/TypedText";
import johandika from "../../assets/images/johandika.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiLinkedinBoxLine,
  RiLinkedinFill,
} from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const HeroSection = () => {
  const { t } = useTranslation();
  const [openButtonActive, setOpenButtonActive] = useState(false);
  const dropdownRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 2);
      mouseY.set((clientY / innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Foreground layers: shift opposite to mouse (mouse moves left [-1], elements move right [+X])
  const fgX = useTransform(smoothX, [-1, 1], [40, -40]);
  const fgY = useTransform(smoothY, [-1, 1], [40, -40]);

  // Background layers: shift with mouse (mouse moves left [-1], elements move left [-X])
  const bgX = useTransform(smoothX, [-1, 1], [-40, 40]);
  const bgY = useTransform(smoothY, [-1, 1], [-40, 40]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenButtonActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=6282370323310&text=Hallo+Johandika%2C+I+visit+from+your+website&type=phone_number&app_absent=0",
      "_blank",
    );
  };

  const handleClickLinkedIn = () => {
    window.open(
      "https://id.linkedin.com/in/johandika-syahputra-lubis-a03421118",
      "_blank",
    );
  };

  const handleClickGithub = () => {
    window.open("https://github.com/Johandika", "_blank");
  };

  const handleShowcase = () => {
    window.open(
      "https://drive.google.com/file/d/1Wxj5djjwiyWghw4RaXnIQZZ6YpqOAxWB/view",
      "_blank",
    );
  };

  const handleResumeDesigner = () => {
    window.open(
      "https://drive.google.com/file/d/10xKtVOFb_JZo0tmNucM6WWD9m9IJv58X/view",
      "_blank",
    );
  };

  const handleResumeDeveloper = () => {
    window.open(
      "https://drive.google.com/file/d/1B0ZrWzNYOIhl4nW5IRNt_cwd6o_z0xo_/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <Container
      className={
        " flex flex-col sm:flex-row w-full h-fit sm:h-screen  justify-center items-center pt-5 sm:pt-0"
      }
    >
      {/* Container kiri */}
      <div className="flex-1 my-auto flex flex-col gap-4 sm:gap-5  order-2 sm:order-1">
        <h2 className="text-lg sm:text-2xl font-SpaceMono">
          {t("hero.greeting")}
        </h2>
        <TypedText
          className={"text-3xl sm:text-5xl font-bold "}
          text={[t("hero.roles.fullstack"), t("hero.roles.uiux")]}
        />
        <p className="leading-relaxed">{t("hero.description")}</p>
        <div className="flex flex-row flex-wrap gap-5">
          <Button
            text={t("hero.buttons.showcase")}
            onClick={handleShowcase}
          />
          <div
            className=" relative px-4 sm:px-8 py-4 sm:py-4 rounded-lg ring-1 hover:bg-RedDarkest/10 ring-RedDarkest"
            onClick={() => setOpenButtonActive(true)}
            ref={dropdownRef}
          >
            {t("hero.buttons.resume")}
            {openButtonActive && (
              <div className="left-0 top-0 w-32 sm:w-80   bg-black absolute rounded-lg ">
                <button
                  className="text-sm text-center bg-black hover:bg-neutral-500 w-full h-16 border-b-[1px] rounded-t-lg "
                  onClick={handleResumeDesigner}
                >
                  {t("hero.buttons.designer")}
                </button>
                <button
                  className="text-sm text-center bg-black hover:bg-neutral-500 w-full h-16 rounded-b-lg"
                  onClick={handleResumeDeveloper}
                >
                  {t("hero.buttons.developer")}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <FaLinkedin
            size={35}
            className="text-white cursor-pointer transition hover:scale-90 hover:text-RedDarkest"
            onClick={handleClickLinkedIn}
          />
          <FaGithub
            size={35}
            className="text-white cursor-pointer transition hover:scale-90 hover:text-RedDarkest"
            onClick={handleClickGithub}
          />
          <IoLogoWhatsapp
            size={35}
            className="text-white cursor-pointer transition hover:scale-90 hover:text-RedDarkest"
            onClick={handleClickWhatsapp}
          />
        </div>
      </div>
      {/* Container Kanan */}
      <div className="flex-1 flex justify-center items-center order-1 sm:order-2 relative">
        {/* 3 Kunang-kunang di belakang */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute top-1/4 right-[10%] sm:right-[20%] pointer-events-none z-0"
        >
          <motion.div
            className="w-2 h-2 bg-red-700/80 rounded-full shadow-[0_0_20px_rgba(185,28,28,1)]"
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [0.8, 1.2, 0.8],
              x: [0, 10, -5, 0],
              y: [0, -10, 5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute top-1/2 left-[10%] sm:left-[20%] pointer-events-none z-0"
        >
          <motion.div
            className="w-3 h-3 bg-red-700/80 rounded-full shadow-[0_0_25px_rgba(185,28,28,1)]"
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [0.9, 1.3, 0.9],
              x: [0, -15, 5, 0],
              y: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute bottom-1/4 right-[15%] sm:right-[25%] pointer-events-none z-0"
        >
          <motion.div
            className="w-2 h-2 bg-orange-400/80 rounded-full shadow-[0_0_20px_rgba(251,146,60,1)]"
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [0.8, 1.1, 0.8],
              x: [0, 10, -10, 0],
              y: [0, 15, -5, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          tiltReverse={true}
          perspective={1000}
          transitionSpeed={15000}
          scale={1.0}
          gyroscope={true}
          trackOnWindow={true}
          className="relative z-10"
        >
          {/* Foto utama dengan efek screen 20% */}
          <div className="relative">
            {/* Gambar dasar */}
            <img
              src={johandika}
              alt="Johandika Syahputra Lubis"
              className="sm:w-fit h-[400px] sm:h-[450px] md:h-[600px] object-cover drop-shadow-[15px_0px_30px_rgba(0,0,0,1.8)] pb-12"
            />
            {/* Screen 5% */}
            <img
              src={johandika}
              alt=""
              className="absolute inset-0 sm:w-fit h-[400px] sm:h-[450px] md:h-[600px] object-cover mix-blend-screen opacity-10 pb-12 pointer-events-none"
            />
            {/* Overlay 20% */}
            <img
              src={johandika}
              alt=""
              className="absolute inset-0 sm:w-fit h-[400px] sm:h-[450px] md:h-[600px] object-cover mix-blend-overlay opacity-5 pb-12 pointer-events-none"
            />
          </div>
        </Tilt>

        {/* 2 Kunang-kunang di depan/atas */}
        <motion.div
          style={{ x: fgX, y: fgY }}
          className="absolute top-1/3 left-[15%] sm:left-[30%] pointer-events-none z-20"
        >
          <motion.div
            className="w-2 h-2 bg-orange-400/80 rounded-full shadow-[0_0_25px_rgba(251,146,60,1)]"
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [0.7, 1.2, 0.7],
              x: [0, -10, 15, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
        </motion.div>
        <motion.div
          style={{ x: fgX, y: fgY }}
          className="absolute bottom-1/3 right-[20%] sm:right-[30%] pointer-events-none z-20"
        >
          <motion.div
            className="w-3 h-3 bg-yellow-300/80 rounded-full shadow-[0_0_30px_rgba(253,224,71,1)]"
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [0.8, 1.3, 0.8],
              x: [0, 15, -10, 0],
              y: [0, 5, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroSection;
