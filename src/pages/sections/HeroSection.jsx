import Button from "../../components/Button";
import Container from "../../components/Container";
import TypedText from "../../components/TypedText";
import johandika from "../../assets/images/johandika.png";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";


const HeroSection = () => {
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

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/10xKtVOFb_JZo0tmNucM6WWD9m9IJv58X/view",
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
          I'm from Indonesia and have a career in visual design for the last 3
          years. I am currently developing career skills into website
          development and have worked on several projects as a fullstack. Design
          and Programming is my passion, and right now I am looking forward to
          collaborating with you!
        </p>
        <div className="flex flex-row flex-wrap gap-5">
          <Button
            text={"Get Showcase"}
            onClick={handleShowcase}
          />
          <Button
            text={"Get Resume"}
            onClick={handleResume}
            outline
          />
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
      <div className="flex-1 flex justify-center items-center order-1 sm:order-2">
        <img
          src={johandika}
          alt="Johandika Syahputra Lubis"
          className="w-[70%] sm:w-fit"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
