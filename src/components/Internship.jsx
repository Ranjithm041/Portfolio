import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ICANIO from '../assets/ICANIO.svg';
const Internship = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const internships = [
    {
      company: 'Icanio Technologies',
      role: 'Frontend Developer Intern',
      duration: '1 Month',
      description:
        'Worked on Perfido, an ai integrated tool platform , improving user interfaces and implementing responsive designs using React.',
      logo:ICANIO, // Replace with actual logo URL
    },
    // {
    //   company: 'TechCorp Solutions',
    //   role: 'Full Stack Developer Intern',
    //   duration: 'Jun 2023 - Dec 2023',
    //   description:
    //     'Developed RESTful APIs and enhanced the frontend of internal tools using Node.js and React.',
    //   logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="internships" className="py-20 bg-tertiary">
      <div className="container  mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-center mb-10">Internship Experience</h2>
          <div className="grid grid-cols-1  md:grid-cols-1 gap-8">
            {internships.map((internship) => (
              <motion.div
                key={internship.company}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-primary shadow-md rounded-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={internship.logo}
                  alt={`${internship.company} logo`}
                  className="w-20 h-20 mb-4 rounded-full border-2 border-secondary"
                />
                <h3 className="text-xl font-semibold mb-2">{internship.company}</h3>
                <p className="text-gray-600 mb-1">{internship.role}</p>
                <p className="text-gray-500 text-sm mb-4">{internship.duration}</p>
                <p className="text-textSecondary text-sm">{internship.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;
