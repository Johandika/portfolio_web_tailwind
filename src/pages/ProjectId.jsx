import Container from "../components/Container";
import { useParams } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Topic from "../components/Topic";
import { projects } from "../constants";
import Preview from "../components/Preview";
import Button from "../components/Button";

const ProjectId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((project) => project.id === parseInt(id, 10));

  const handleBackClick = () => {
    navigate(-1);
  };
  console.log(project.link);

  const handleClick = () => {
    window.open(project.link, "_blank");
  };

  return (
    <div className="font-Poppins pt-[80px]  sm:pt-[90px] py-6">
      <Container>
        <div className="flex flex-col  bg-white text-Black p-6 sm:p-10 gap-6">
          {/* Back button */}
          <div
            onClick={handleBackClick}
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
          <Preview
            header={project.preview.title}
            year={project.year}
            client={project.client}
            descriptionPreview={project.preview.description}
            image={project.image}
            image2={project.preview.image}
            caption={project.preview.caption}
            caption2={project.preview.caption2}
          />
          {/* Content */}
          <div className="gap-8 flex flex-col">
            {project?.content?.map((item) => (
              <Topic
                //  key={item?.title} topic={topics[0]}
                key={item?.title}
                title={item?.title}
                description={item?.description}
                description2={item?.description2 ? item.description2 : null}
                description3={item?.description3 ? item.description3 : null}
                description4={item?.description4 ? item.description4 : null}
                description5={item?.description5 ? item.description5 : null}
                description6={item?.description6 ? item.description6 : null}
                list={item.list ? item.list : null}
                list2={item.list2 ? item.list2 : null}
                list3={item.list3 ? item.list3 : null}
                list4={item.list4 ? item.list4 : null}
                list5={item.list5 ? item.list5 : null}
                list6={item.list6 ? item.list6 : null}
                process={item.process ? item.process : null}
                process2={item.process2 ? item.process2 : null}
                process3={item.process3 ? item.process3 : null}
                process4={item.process4 ? item.process4 : null}
                process5={item.process5 ? item.process5 : null}
                process6={item.process6 ? item.process6 : null}
                caption={item.caption ? item.caption : null}
                caption2={item.caption2 ? item.caption2 : null}
                caption3={item.caption3 ? item.caption3 : null}
                caption4={item.caption4 ? item.caption4 : null}
                caption5={item.caption5 ? item.caption5 : null}
                caption6={item.caption6 ? item.caption6 : null}
                image={item.image ? item.image : null}
                image2={item.image2 ? item.image2 : null}
                image3={item.image3 ? item.image3 : null}
                image4={item.image4 ? item.image4 : null}
                image5={item.image5 ? item.image5 : null}
                image6={item.image6 ? item.image6 : null}
              />
            ))}
            {project.link && (
              <Button
                text={project.link}
                className={"text-white tracking-widest self-center"}
                onClick={handleClick}
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectId;
