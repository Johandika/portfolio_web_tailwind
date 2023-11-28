// import { slashtheory } from '../assets/images'
import Button from "./Button";

const ProjectCard = ({
  tipe,
  client,
  summary,
  image,
  colorButton,
  hoverGreen,
  hoverBlue,
  stripText = "bg-RedDarkest",
  shadowBlue,
  shadowGreen,
  onClick,
}) => {
  return (
    <div
      className={`max-w-5xl min-h-[400px] sm:h-fit w-full bg-Black ring-white ring-1 flex flex-col sm:flex-row items-center rounded-lg  hover:shadow-2xl ${
        shadowBlue
          ? "hover:shadow-blue-500"
          : shadowGreen
          ? "hover:shadow-green-500"
          : "hover:shadow-RedDarkest"
      } hover:shadow-RedDarkest transition overflow-hidden cursor-pointer group`}
    >
      <div className="w-full h-full sm:w-1/2 px-6 py-6 sm:py-0 sm:px-0 sm:pr-2 sm:pl-6 font-SpaceMono shadow-lg flex flex-col gap-2  order-2 sm:order-1 justify-between  ">
        <h2 className="text-gray-400 text-2xl tracking-widest">{tipe}</h2>
        <h1 className={`${stripText} text-5xl font-bold self-start`}>
          {client}
        </h1>
        <p className="font-Poppins mt-5 leading-loose mb-5 ">{summary}</p>
        <Button
          text={"VIEW DETAIL"}
          className={"self-start font-SpaceMono tracking-widest text-lg"}
          onClick={onClick}
          outline
          {...{
            ...(colorButton && { color: colorButton }),
            ...(hoverBlue && { hoverBlue: true }),
            ...(hoverGreen && { hoverGreen: true }),
          }}
        />
      </div>
      <div className="w-full order-1 sm:order-2 sm:w-1/2 relative">
        <div
          className={`flex justify-center items-center rounded-lg rotate-12 relative ring-1 ring-gray-200 group-hover:shadow-2xl

          ${
            shadowBlue
              ? "group-hover:shadow-blue-500"
              : shadowGreen
              ? "group-hover:shadow-green-500"
              : "group-hover:shadow-RedDarkest"
          } 

            z-0 -right-8 -bottom-10 overflow-hidden scale-100 hover:scale-105 transition`}
        >
          <div className="w-full h-full sm:bg-Black sm:group-hover:bg-Black/0 transition z-10 absolute"></div>
          <img
            src={image}
            alt={client}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
