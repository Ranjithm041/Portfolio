import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profile from '../assets/mypic.jpg';
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-10 sm:py-20 bg-tertiary">
  <div className="container mx-auto px-4">
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
        {/* Text Section */}
        <div>
          <p className="text-textSecondary mb-4">
            Hello! I'm Ranjith M, a passionate full stack developer. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
          </p>
          <p className="text-textSecondary mb-4">
            Currently, I'm interning at icanio technologies in Tirunelveli, where I've had the opportunity to work on exciting projects like Perfido, an e-commerce platform built entirely with React.
          </p>
          <p className="text-textSecondary mb-4">
            My journey in web development has been focused on creating accessible, user-friendly applications that solve real-world problems. I'm particularly interested in front-end development and creating seamless user experiences.
          </p>
          <p className="text-textSecondary">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 mt-4 text-textSecondary">
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> JavaScript (ES6+)
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> React
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> Node.js
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> MongoDB
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> HTML/CSS
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> DevOps
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="group relative">
            <img
              src={profile}
              alt="Profile"
              className="rounded-lg w-[200px] h-[300px] sm:w-[250px] sm:h-[400px] lg:w-[300px] lg:h-[500px] transition-transform duration-500 group-hover:scale-110 shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

  );
};

export default About;