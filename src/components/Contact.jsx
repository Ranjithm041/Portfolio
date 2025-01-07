import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs
      .sendForm(
        'service_x8vdedu', // Replace with your EmailJS Service ID
        'template_0w1dt3j', // Replace with your EmailJS Template ID
        e.target,
        'Spg4h5bNhBBcQILgi' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setStatus('Message sent successfully!');
          e.target.reset(); // Clear the form
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-textSecondary mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                required
                className="w-full px-4 py-3 bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-secondary text-primary px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </form>
          {status && <p className="mt-4 text-secondary">{status}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
