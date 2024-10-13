import { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import ProjectCard from "../../components/ProjectCard";
import ProjectCardProgrammer from "../../components/ProjectCardProgrammer";
import { projects, projectProgrammer } from "../../constants";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [displayData, setDisplayData] = useState(2);
  const [active, setActive] = useState("uiux");
  const navigate = useNavigate();

  const loadMore = () => {
    setDisplayData((prevItemCount) => prevItemCount + 2);
  };

  const handleClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const handleClickProgrammer = (projectId) => {
    navigate(`/project-programmer/${projectId}`);
  };

  const handleClickRepoProgrammer = (projectId) => {
    navigate(`/links/${projectId}`);
  };

  const chipStyle = (chipType) => {
    const baseStyle =
      "px-4 py-2 rounded-md cursor-pointer transition-colors duration-300";
    const activeStyle = "text-white border-none bg-RedDarkest/70";
    const inactiveStyle =
      "text-white/40 border-[1px] border-gray-800 bg-gray-900/40 hover:bg-gray-800 hover:text-white";

    return `${baseStyle} ${active === chipType ? activeStyle : inactiveStyle}`;
  };

  return (
    <Container className="py-20 flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="font-SpaceMono text-4xl underline">Selected Projects</h2>
        <div className="flex flex-row gap-4">
          <div
            className={chipStyle("uiux")}
            onClick={() => setActive("uiux")}
          >
            UI/UX
          </div>
          <div
            className={chipStyle("programmer")}
            onClick={() => setActive("programmer")}
          >
            Programmer
          </div>
        </div>
      </div>

      {/* Card Projects */}
      {active === "uiux"
        ? projects.slice(0, displayData).map((project, index) => {
            //kondisi agar setiap index pertama kedua dan ketiga warnanya merah hijau biru seterusnya
            const styles = [
              {
                color: false,
                hover: false,
                shadowBlue: false,
                shadowGreen: false,
                stripText: "bg-RedDarkest",
              },
              {
                color: "green-700",
                hover: "hoverGreen",
                shadowBlue: false,
                shadowGreen: "shadowGreen",
                stripText: "bg-green-700",
              },
              {
                color: "blue-700",
                hover: "hoverBlue",
                shadowBlue: "shadowBlue",
                shadowGreen: false,
                stripText: "bg-blue-700",
              },
            ];

            const { color, hover, shadowBlue, shadowGreen, stripText } =
              styles[index % 3];

            return (
              <ProjectCard
                key={project.id}
                tipe={project.tipe}
                client={project.client}
                summary={project.summary}
                image={project.image}
                colorButton={color}
                onClick={() => handleClick(project.id)}
                {...{
                  hoverBlue: hover === "hoverBlue",
                  hoverGreen: hover === "hoverGreen",
                  shadowBlue: shadowBlue === "shadowBlue",
                  shadowGreen: shadowGreen === "shadowGreen",
                  stripText: stripText,
                }}
              />
            );
          })
        : projectProgrammer.slice(0, displayData).map((project, index) => {
            //kodnisi agar setiap index pertama kedua dan ketiga warnanya merah hijau biru seterusnya
            const styles = [
              {
                color: false,
                hover: false,
                shadowBlue: false,
                shadowGreen: false,
                stripText: "bg-RedDarkest",
              },
              {
                color: "green-700",
                hover: "hoverGreen",
                shadowBlue: false,
                shadowGreen: "shadowGreen",
                stripText: "bg-green-700",
              },
              {
                color: "blue-700",
                hover: "hoverBlue",
                shadowBlue: "shadowBlue",
                shadowGreen: false,
                stripText: "bg-blue-700",
              },
            ];

            const { color, hover, shadowBlue, shadowGreen, stripText } =
              styles[index % 3];

            return (
              <ProjectCardProgrammer
                key={project.id}
                tipe={project.tipe}
                client={project.client}
                summary={project.summary}
                image={project.image}
                colorButton={color}
                onClick={() => handleClickProgrammer(project.id)}
                onClickRepo={() => handleClickRepoProgrammer(project.id)}
                {...{
                  hoverBlue: hover === "hoverBlue",
                  hoverGreen: hover === "hoverGreen",
                  shadowBlue: shadowBlue === "shadowBlue",
                  shadowGreen: shadowGreen === "shadowGreen",
                  stripText: stripText,
                }}
              />
            );
          })}

      {displayData < projects.length && (
        <Button
          text={"Show More"}
          onClick={loadMore}
          outline
          className="font-SpaceMono uppercase text-lg tracking-widest text-white self-center rounded-md py-2 px-4"
        />
      )}
    </Container>
  );
};

export default Projects;
