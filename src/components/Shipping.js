import { motion } from "framer-motion";

const Shipping = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="service-section"
    >
      <div className="service-content">
        <h1>Shipping Information</h1>
        
        <div className="service-block">
          <h2>Delivery Options</h2>
          <ul>
            <li>
              <h3>Standard Shipping (Free)</h3>
              <p>5-7 business days</p>
              <p>Free for orders over $100</p>
            </li>
            <li>
              <h3>Express Shipping ($15)</h3>
              <p>2-3 business days</p>
              <p>Available for all orders</p>
            </li>
            <li>
              <h3>Next Day Delivery ($25)</h3>
              <p>Next business day</p>
              <p>Order before 2 PM for next-day delivery</p>
            </li>
          </ul>
        </div>

        <div className="service-block">
          <h2>International Shipping</h2>
          <p>We ship to most countries worldwide. International shipping rates are calculated at checkout based on location and package weight.</p>
          <ul>
            <li>Europe: 7-10 business days</li>
            <li>Asia: 10-14 business days</li>
            <li>Rest of World: 14-21 business days</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Tracking Your Order</h2>
          <p>Once your order ships, you'll receive a confirmation email with tracking information.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Shipping; 