import Button from "../../components/Button";
import Container from "../../components/Container";
import TypedText from "../../components/TypedText";
import johandika from "../../assets/images/johandika.webp";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [openButtonActive, setOpenButtonActive] = useState(false)
  const dropdownRef = useRef(null);
  
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
      "_blank"
    );
  };

  const handleClickGithub = () => {
    window.open("https://github.com/Johandika", "_blank");
  };

  const handleClickInstagram = () => {
    window.open("https://www.instagram.com/azonix_designer/", "_blank");
  };

  const handleShowcase = () => {
    window.open(
      "https://drive.google.com/file/d/1Wxj5djjwiyWghw4RaXnIQZZ6YpqOAxWB/view",
      "_blank"
    );
  };

  const handleResumeDesigner = () => {
    window.open(
      "https://drive.google.com/file/d/10xKtVOFb_JZo0tmNucM6WWD9m9IJv58X/view",
      "_blank"
    );
  };

  const handleResumeDeveloper = () => {
    window.open(
      "https://drive.google.com/file/d/1uTxxnsihdUe0QbwYbqBtX72hkYaOMzWd/view?usp=drive_link",
      "_blank"
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
          Hi there ✌️, I'm Johandika
        </h2>
        <TypedText
          className={"text-3xl sm:text-5xl font-bold "}
          text={["Fullstack Javascript", "UI/UX Designer"]}
        />
        <p className="leading-relaxed">
          I am from Indonesia and have been pursuing a career in visual design
          for the past 3 years. Currently, I am expanding my career skills into
          website development and have worked on several projects as a fullstack
          developer. Design and programming are my passions, and I am very
          excited about the prospect of collaborating with you!
        </p>
        <div className="flex flex-row flex-wrap gap-5">
          <Button
            text={"Get Showcase"}
            onClick={handleShowcase}
          />
          <div
          className=" relative px-4 sm:px-8 py-4 sm:py-4 rounded-lg ring-1 hover:bg-RedDarkest/10 ring-RedDarkest"
            onClick={()=>setOpenButtonActive(true)}
            ref={dropdownRef}
          >
            Get Resume
            {openButtonActive && 
              (<div className="left-0 top-0 w-32 sm:w-40   bg-black absolute rounded-lg ">
                  <button className="text-sm text-center bg-black hover:bg-neutral-500 w-full h-16 border-b-[1px] rounded-t-lg " onClick={handleResumeDesigner}>Designer</button>
                  <button className="text-sm text-center bg-black hover:bg-neutral-500 w-full h-16 rounded-b-lg" onClick={handleResumeDeveloper}>Developer</button>
              </div>)
            }
            {console.log('openButtonActive',openButtonActive)}
          </div>
           
        </div>
        <div className="flex flex-row gap-4">
          <FaGithub
            size={35}
            className="text-white cursor-pointer transition hover:scale-90 hover:text-RedDarkest"
            onClick={handleClickGithub}
          />
          <RiInstagramFill
            size={35}
            className="text-white cursor-pointer transition hover:scale-90 hover:text-RedDarkest"
            onClick={handleClickInstagram}
          />
          <IoLogoWhatsapp
            size={35}
            className="text-white cursor-pointer transition hover:scale-90 hover:text-RedDarkest"
            onClick={handleClickWhatsapp}
          />
        </div>
      </div>
      {/* Container Kanan */}
      <div className="flex-1 flex justify-center items-center order-1 sm:order-2 ">
        <img
          src={johandika}
          alt="Johandika Syahputra Lubis"
          className="sm:w-fit h-[400px] sm:h-[450px] md:h-[600px] object-cover "
        />
      </div>
    </Container>
  );
};

export default HeroSection;
