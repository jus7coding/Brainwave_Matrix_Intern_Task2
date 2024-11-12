import { motion } from "framer-motion";

const Warranty = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="service-section"
    >
      <div className="service-content">
        <h1>Warranty Information</h1>
        
        <div className="service-block">
          <h2>Warranty Coverage</h2>
          <p>All KeyboardHub products come with a comprehensive 2-year warranty from the date of purchase.</p>
          <ul>
            <li>Manufacturing defects</li>
            <li>Switch malfunctions</li>
            <li>PCB issues</li>
            <li>LED/RGB lighting problems</li>
            <li>USB connection issues</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>What's Not Covered</h2>
          <ul>
            <li>Physical damage from drops or spills</li>
            <li>Normal wear and tear</li>
            <li>Unauthorized modifications</li>
            <li>Misuse or abuse</li>
            <li>Lost or stolen products</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Warranty Process</h2>
          <ol>
            <li>Contact our support team</li>
            <li>Provide proof of purchase and photos</li>
            <li>Receive RMA number</li>
            <li>Ship product to service center</li>
            <li>Receive repaired/replaced product</li>
          </ol>
        </div>

        <div className="service-block">
          <h2>Extended Warranty</h2>
          <p>Extended warranty options available for purchase:</p>
          <ul>
            <li>+1 year: $29.99</li>
            <li>+2 years: $49.99</li>
            <li>+3 years: $69.99</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Warranty; 