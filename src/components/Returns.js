import { motion } from "framer-motion";

const Returns = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="service-section"
    >
      <div className="service-content">
        <h1>Returns Policy</h1>
        
        <div className="service-block">
          <h2>30-Day Return Policy</h2>
          <p>We offer a 30-day return window for all unused products in their original packaging.</p>
        </div>

        <div className="service-block">
          <h2>Return Process</h2>
          <ol>
            <li>Initiate return through your account or contact support</li>
            <li>Receive return shipping label</li>
            <li>Package item securely in original packaging</li>
            <li>Drop off at specified shipping location</li>
            <li>Refund processed within 5-7 business days of receipt</li>
          </ol>
        </div>

        <div className="service-block">
          <h2>Return Conditions</h2>
          <ul>
            <li>Product must be unused and in original packaging</li>
            <li>All accessories and documentation must be included</li>
            <li>Return shipping costs are covered for defective items</li>
            <li>Customer responsible for return shipping of non-defective items</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Non-Returnable Items</h2>
          <ul>
            <li>Custom-built keyboards</li>
            <li>Used keycaps</li>
            <li>Opened switch packs</li>
            <li>Software licenses</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Returns; 