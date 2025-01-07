import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import perfido from '../assets/perfido.png';
import zoho from '../assets/zoho.svg';
import tms from '../assets/tms.png';
import powerbi from '../assets/powerbi.jpg';
const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: 'Perfido - an AI integrated tool platform',
      description: 'A full-stack ai integrated tool platform built during my internship at icanio technologies. Implemented responsive design and user authentication using React.',
      image: perfido,
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Ranjithm041/Perfido.git',
      live: 'https://ranjithm041.github.io/Perfido/',
    },
    {
      title: 'Task Management System',
      description: 'A Task Management System is a user-friendly web application built with ReactJS that allows users to efficiently organize, track, and manage their tasks. It offers a simple yet powerful interface to help users stay productive and maintain focus on their daily goals.',
      image: tms,
      tech: ['React', 'Redux', 'Tailwind', 'localstorage'],
      github: 'https://github.com/Ranjithm041/Task-Management-System.git',
      live: 'https://tm-system.netlify.app/',
    },
    {
      title: 'ZOHO Tasks',
      description: 'A modern, responsive portfolio website built with React and Framer Motion for smooth animations.',
      image: zoho,
      tech: ['JAVA', 'OOPS', 'interview process'],
      github: 'https://github.com/Ranjithm041/Zoho-Project.git',
      live: 'none',
    },
    {
      title: 'Power BI - Amazon sales analysis',
      description: 'This Power BI report provides an in-depth analysis of Amazon sales performance, tracking key metrics such as total sales, revenue trends, and profitability. Interactive visuals allow for easy exploration of data by product, category, or timeframe to uncover insights and optimize decision-making.',
      image: powerbi,
      tech: ['PowerBi', 'Amazon Data set', 'cloud'],
      github: 'https://github.com/Ranjithm041/Powerbi-Amazon-Sales-Report.git',
      live: 'https://github.com/Ranjithm041/Powerbi-Amazon-Sales-Report.git',
    },
    // {
    //   title: 'Blog Platform',
    //   description: 'A full-stack blog platform with user authentication, markdown support, and comment system.',
    //   image: 'https://via.placeholder.com/600x400',
    //   tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    //   github: '#',
    //   live: '#',
    // },
    // {
    //   title: 'Chat Application',
    //   description: 'Real-time chat application with private messaging and group chat functionality.',
    //   image: 'https://via.placeholder.com/600x400',
    //   tech: ['React', 'Socket.IO', 'Express', 'MongoDB'],
    //   github: '#',
    //   live: '#',
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-tertiary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-textSecondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-tertiary px-3 py-1 rounded-full text-sm text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-secondary transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-secondary transition-colors duration-300"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;