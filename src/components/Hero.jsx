import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Resume from '../assets/Ranjith_M_Resume.pdf';

const Hero = () => {
  const downloadResume = () => {
    
    // using Java Script method to get PDF file
    fetch(Resume).then((response) => {
        response.blob().then((blob) => {
        
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Ranjith_Resume.pdf";
            alink.click();
        });
    });
};
  return (
    <section id="home" className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-sm text-secondary mb-4">Hi, I'm</h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Ranjith M</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-textSecondary mb-8">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Frontend Developer',
                2000,
                'React Developer',
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-secondary"
            />
          </h3>
          <p className="text-textSecondary text-lg mb-8 max-w-xl">
            A passionate full-stack developer with experience in building responsive web applications.
            Expertise in both front-end and back-end technologies.
           <br /> 
           <h4 className="text-secondary">Welcome to my portfolio ! </h4>   where you can explore my projects and learn more about my journey in software development
            
          </p>
          <div className="flex space-x-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors duration-300"
            >
              Get in touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-secondary text-secondary px-8 py-3 rounded-md font-medium hover:bg-secondary hover:bg-opacity-10 transition-colors duration-300"
            >
              View Work
            </motion.a>
            <motion.a
              // href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="border-2 border-secondary text-secondary px-8 py-3 rounded-md font-medium hover:bg-secondary hover:bg-opacity-10 transition-colors duration-300"
            >
              Download Resume
            </motion.a>
          </div>
          <div className="flex space-x-6 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors duration-300">
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;