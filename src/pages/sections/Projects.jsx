import { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../constants";

const Projects = () => {
  const [displayData, setDisplayData] = useState(2);

  const loadMore = () => {
    setDisplayData((prevItemCount) => prevItemCount + 2);
  };

  return (
    <Container className="py-20 flex flex-col justify-center items-center gap-16">
      <h2 className="font-SpaceMono text-4xl underline">Selected Projects</h2>

      {/* Card Projects */}
      {projects.slice(0, displayData).map((project) => (
        <ProjectCard
          key={project.id}
          tipe={project.tipe}
          client={project.client}
          summary={project.summary}
          image={project.image}
          colorButton={project.color}
          {...{
            hoverBlue: project.hover === "hoverBlue",
            hoverGreen: project.hover === "hoverGreen",
            shadowBlue: project.shadowBlue === "shadowBlue",
            shadowGreen: project.shadowGreen === "shadowGreen",
            stripText: project.stripText,
          }}
        />
      ))}

      <Button
        text={"Show More"}
        onClick={loadMore}
        outline
        className="font-SpaceMono uppercase  text-lg tracking-widest text-white self-center rounded-md py-2 px-4"
      />
    </Container>
  );
};

export default Projects;
