import { slashtheory } from "../../assets/images";
import Button from "../../components/Button";
import Container from "../../components/Container";

const Projects = () => {
  return (
    <Container className="py-20 flex flex-col justify-center items-center gap-16">
      <h2 className="font-SpaceMono text-4xl underline">Selected Projects</h2>
      <div className="max-w-4xl w-full ring-white ring-1 flex flex-col sm:flex-row items-center rounded-lg  hover:shadow-2xl hover:shadow-RedDarkest transition overflow-hidden cursor-pointer ">
        <div className="w-full h-full sm:w-1/2 px-6 sm:px-0 pl-0 sm:pl-6 font-SpaceMono shadow-lg flex flex-col gap-2  order-2 sm:order-1 justify-between py-6">
          <h2 className="text-gray-500 text-2xl tracking-widest">WEBSITE</h2>
          <h1 className="bg-red-800 text-5xl font-bold self-start">
            Slashtheory
          </h1>
          <p className="font-Poppins mt-5 leading-loose mb-5 ">
            Slashtheory is an Indian company engaged in the digital design and
            IT industry. This company provides UI/UX design, full stack web
            application development, as well as iOS and Android application
            development.
          </p>
          <Button
            text={"LAUNCH SITE"}
            className={"self-start font-SpaceMono tracking-widest text-lg"}
            outline
          />
        </div>
        <div className="w-full h-full sm:w-1/2 flex justify-center items-center bg-slate-400 order-1 sm:order-2">
          IMAGE
        </div>
      </div>
    </Container>
  );
};

export default Projects;
