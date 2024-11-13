import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import images from '../assets/images';

const Hero = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section 
      className="hero-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="hero-content"
        variants={textVariants}
      >
        <motion.h1
          variants={textVariants}
        >
          Premium Mechanical Keyboards
        </motion.h1>
        <motion.p variants={textVariants}>
          Experience typing perfection with our handcrafted keyboards
        </motion.p>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate('/products')}
          className="cta-button-container"
        >
          <button className="cta-button">
            <span>Explore Collection</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-image"
        variants={imageVariants}
        animate={floatingAnimation}
      >
        <motion.img 
          src={images.keyboardHero} 
          alt="Premium Mechanical Keyboard"
          whileHover={{
            scale: 1.05,
            rotate: [-1, 1, -1],
            transition: {
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero; 