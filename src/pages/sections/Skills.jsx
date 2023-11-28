import Container from "../../components/Container";
import SkillsTicker from "../../components/SkillsTicker";
import { skillDesign, skills, skillsTwo } from "../../constants";

const Skills = () => {
  return (
    <div className="py-20  flex flex-col gap-10">
      <Container className=" overflow-hidden flex flex-col justify-center items-center ">
        {/* Coding Skills */}
        <h2 className="font-SpaceMono text-2xl mb-10">Coding Skills</h2>
        <div className="max-w-6xl overflow-hidden flex flex-col gap-5 relative">
          <div className="h-full w-[30%] bg-gradient-to-l from-Black to-Black/0 z-10 absolute right-0"></div>
          <div className="h-full w-[30%] bg-gradient-to-r from-Black to-Black/0 z-10 absolute left-0"></div>
          <SkillsTicker
            skills={skills}
            kanan
          />
          <SkillsTicker
            skills={skillsTwo}
            kiri
          />
        </div>
      </Container>
      <Container className=" overflow-hidden flex flex-col justify-center items-center">
        {/* Design Skills */}
        <h2 className="font-SpaceMono text-2xl mb-10">Design Skills</h2>
        <div className="max-w-6xl overflow-hidden flex flex-col gap-5 relative">
        <div className="h-full w-[30%] bg-gradient-to-l from-Black to-Black/0 z-10 absolute right-0"></div>
          <div className="h-full w-[30%] bg-gradient-to-r from-Black to-Black/0 z-10 absolute left-0"></div>
          <SkillsTicker
            skills={skillDesign}
            kanan
          />
        </div>
      </Container>
    </div>
  );
};

export default Skills;
