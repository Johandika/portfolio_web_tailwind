import { motion } from 'framer-motion';

const SkillsTicker = ({ skills }) => {
  // Duplikasi array skills dua kali untuk membuat efek loop yang seamless
  const doubledSkills = [...skills, ...skills, ...skills, ...skills];
  
  const tickerVariants = {
    animate: {
      x: [0, -160 * skills.length], // Sesuaikan ini berdasarkan lebar total dari semua logo skill
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5, // Durasi animasi untuk satu siklus
          ease: "linear" // Jenis animasi
        }
      }
    }
  };

  return (
    <div className="overflow-hidden w-fit mx-auto flex flex-row justify-center">
      <motion.div
        className="flex"
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




