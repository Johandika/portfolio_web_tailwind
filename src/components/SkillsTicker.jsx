import { motion } from "framer-motion";

const SkillsTicker = ({ skills, arah, kanan, kiri }) => {
  // Duplikasi array skills dua kali untuk membuat efek loop yang seamless
  const doubledSkills = [...skills, ...skills, ...skills, ...skills];

  const tickerVariants = {
    animate: {
      x: kanan
        ? [0, 160 * skills.length]
        : kiri
        ? [0, -160 * skills.length]
        : [0, -160 * skills.length], // Sesuaikan ini berdasarkan lebar total dari semua logo skill
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Durasi animasi untuk satu siklus
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="  overflow-hidden py-5 bg-gradient-to-r from-green-500/0 via-Gray to-blue-500/0">
      <motion.div
        className={`flex ${
          kanan ? "justify-end" : kiri ? "justify-center" : ""
        } `}
        variants={tickerVariants}
        animate="animate"
      >
        {doubledSkills.map((skill, index) => (
          <motion.img
            key={index}
            src={skill.logo}
            alt={skill.name}
            className="h-20 mx-10"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsTicker;
