import { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../constants";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [displayData, setDisplayData] = useState(2);
  const navigate = useNavigate();

  const loadMore = () => {
    setDisplayData((prevItemCount) => prevItemCount + 2);
  };

  const handleClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Container className="py-20 flex flex-col justify-center items-center gap-16">
      <h2 className="font-SpaceMono text-4xl underline">Selected Projects</h2>

      {/* Card Projects */}
      {projects.slice(0, displayData).map((project,index) => {

          //kondisi agar setiap index pertama kedua dan ketiga warnanya merah hijau biru seterusnya
          const styles = [
            { color: false, hover: false, shadowBlue: false, shadowGreen: false, stripText: false },
            { color: 'green-700', hover: 'hoverGreen', shadowBlue: false, shadowGreen: 'shadowGreen', stripText: 'bg-green-700' },
            { color: 'blue-700', hover: 'hoverBlue', shadowBlue: 'shadowBlue', shadowGreen: false, stripText: 'bg-blue-700' },
          ];

          const { color, hover, shadowBlue, shadowGreen, stripText } = styles[index % 3];
        
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
          )
        })}

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
