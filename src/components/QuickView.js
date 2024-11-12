import { motion, AnimatePresence } from "framer-motion";

const QuickView = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="quick-view-modal"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <button className="close-button" onClick={onClose}>&times;</button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="modal-details">
                <h2>{product.name}</h2>
                <p className="modal-price">{product.price}</p>
                <p className="modal-description">{product.description}</p>
                <div className="modal-specs">
                  <h3>Specifications:</h3>
                  <ul>
                    <li>Switch Type: Cherry MX</li>
                    <li>Layout: {product.name.includes('TKL') ? 'Tenkeyless' : 'Full Size'}</li>
                    <li>Connectivity: USB-C</li>
                    <li>RGB Lighting: Yes</li>
                    <li>Material: Aluminum frame</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickView; 