import { useNavigate, useParams } from "react-router-dom";
import { projectProgrammer } from "../constants";
import { IoChevronBackOutline } from "react-icons/io5";

const MultipleLink = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectProgrammer.find(
    (project) => project.id === parseInt(id, 10)
  );

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="  text-white h-screen w-full flex justify-center items-center">
      <div className="flex flex-col gap-4 ">
        <div
          onClick={() => handleBackClick()}
          className="py-2 px-3 border-[1px] self-start rounded-lg border-gray-600 text-gray-400 hover:bg-gray-800  transition flex flex-row gap-2 items-center font-light"
        >
          <IoChevronBackOutline
            size={18}
            className=" text-gray-400 transition  group-hover:text-RedDarkest"
          />
          Kembali
        </div>
        {project.linkDemo && (
          <div className="flex flex-row gap-2">
            <p>Demo :</p>
            <a
              href={project.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {project.linkDemo}
            </a>
          </div>
        )}
        {project.link && (
          <div className="flex flex-row gap-2">
            <p>Link Repo 1 :</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {project.link}
            </a>
          </div>
        )}
        {project.link2 && (
          <div className="flex flex-row gap-2">
            <p>Link Repo 2 :</p>
            <a
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {project.link2}
            </a>
          </div>
        )}
        {project.link3 && (
          <div className="flex flex-row gap-2">
            <p>Link Repo 3 :</p>
            <a
              href={project.link3}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {project.link3}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultipleLink;
