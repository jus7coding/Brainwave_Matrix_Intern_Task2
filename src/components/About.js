import { motion } from "framer-motion";
import { useEffect } from "react";

const About = () => {

  // Add this useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="about-section"
    >

      <div className="about-content">
        <h1>About KeyboardHub</h1>
        <p>We are passionate about creating the perfect typing experience. Our carefully curated selection of mechanical keyboards represents the pinnacle of typing technology and design.</p>
        
        <div className="about-features">
          <div className="feature">
            <h3>Quality First</h3>
            <p>Every keyboard is thoroughly tested to ensure perfect performance.</p>
          </div>
          <div className="feature">
            <h3>Expert Support</h3>
            <p>Our team of keyboard enthusiasts is here to help you find your perfect match.</p>
          </div>
          <div className="feature">
            <h3>Custom Options</h3>
            <p>Personalize your keyboard with our wide range of switches and keycaps.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};


export default About; 