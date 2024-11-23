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
          Hello! I’m Ranjith M, a passionate and dedicated Full-Stack Developer with a keen eye for creating dynamic and responsive web applications. My journey in software development began with a fascination for building solutions that make life simpler, and it has grown into a career focused on delivering impactful user experiences.          </p>
          <p className="text-textSecondary mb-4">
          I specialize in front-end frameworks like React and have solid expertise in back-end technologies such as Node.js and MongoDB. I previously interned at icanio technologies, where I contributed to exciting projects like Perfido, an e-commerce platform, applying modern tools and best practices to create scalable solutions.          </p>
          <p className="text-textSecondary mb-4">
          Beyond coding, I enjoy diving into the nuances of design systems, improving user interfaces, and exploring DevOps workflows to streamline development processes. My goal is to continuously learn and adapt, crafting applications that are not only functional but also elegant and efficient.          </p>
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
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> PowerBI
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> java
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