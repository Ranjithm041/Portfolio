import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiJenkins, SiPowerbi,SiMicrosoftazure,SiPostgresql,SiGitlab } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    { name: 'Power BI', icon: SiPowerbi, color: '#F2C811' }, // Power BI
    { name: 'Azure', icon: SiMicrosoftazure, color: '#0087FF' }, // Azure
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' }, // PostgreSQL
    { name: 'GitHub', icon: FaGithub, color: '#181717' }, // GitHub
    { name: 'CI/CD Pipeline', icon: SiGitlab, color: '#FC6D26' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-tertiary rounded-lg"
              >
                <skill.icon className="text-5xl mb-4" style={{ color: skill.color }} />
                <h3 className="text-lg font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
