import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaUser, FaEnvelope, FaBriefcase, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'home', icon: FaUser },
    { name: 'about', icon: FaGraduationCap },
    { name: 'skills', icon: FaLaptopCode },
    { name: 'projects', icon: FaBriefcase },
    { name: 'contact', icon: FaEnvelope }
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.1,
      color: "#64ffda",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="home" 
              className="text-2xl font-bold text-secondary cursor-pointer"
              smooth={true}
              duration={500}
            >
              My Portfolio
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                variants={menuItemVariants}
                whileHover="hover"
              >
                <Link
                  to={item.name}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={150}
                  className="nav-link capitalize text-lg font-medium flex items-center space-x-2"
                  activeClass="text-secondary"
                >
                  <item.icon className="text-xl" />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary text-2xl focus:outline-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </motion.div>
              </AnimatePresence>
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-tertiary/95 backdrop-blur-sm shadow-lg rounded-b-2xl mt-2"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={menuItemVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <Link
                    to={item.name}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="flex items-center space-x-2 py-4 px-6 text-lg font-medium hover:bg-primary/20"
                    activeClass="text-secondary bg-primary/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="text-xl" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;