import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, toggleMenu, cartCount }) => {
  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" }
  };

  return (
    <>
      <button className="hamburger-button" onClick={toggleMenu}>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      <motion.div 
        className="mobile-menu"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-menu-content">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/products" onClick={toggleMenu}>Products</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/cart" onClick={toggleMenu} className="cart-link">
            Cart
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu; 