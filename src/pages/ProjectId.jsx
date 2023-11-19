import Container from "../components/Container";
import { useParams } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const ProjectId = () => {
  const { id } = useParams();

  const handleBackClick = () => {};

  return (
    <div className="font-Poppins sm:pt-[80px] py-6">
      <Container>
        <div className="flex flex-col  bg-white text-Black p-10 ">
          {/* Back button */}
          <div
            onClick={() => console.log("hallo")}
            className="flex flex-row gap-2 items-center  group self-start"
          >
            <IoChevronBackCircleOutline
              size={25}
              className=" text-gray-400 transition group-hover:scale-90 group-hover:text-RedDarkest"
            />
            <p className="text-gray-400 cursor-pointer transition group-hover:text-RedDarkest">
              Kembali
            </p>
          </div>
          {/* Preview */}
          {/* Problem */}
          {/* Users & Audiences */}
          {/* Roles & Responsibilities */}
          {/* Scope and Constraints */}
          {/* Process*/}
          {/* Results*/}
          {/* Development*/}
        </div>
      </Container>
      <h1 className="text-white">Project Detail for ID: {id}</h1>
    </div>
  );
};

export default ProjectId;
