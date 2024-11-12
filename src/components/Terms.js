import { motion } from "framer-motion";

const Terms = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="service-section"
    >
      <div className="service-content">
        <h1>Terms of Service</h1>
        
        <div className="service-block">
          <h2>Agreement to Terms</h2>
          <p>By accessing or using KeyboardHub's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        </div>

        <div className="service-block">
          <h2>Use of Service</h2>
          <ul>
            <li>You must be at least 18 years old to use our services</li>
            <li>You are responsible for maintaining account security</li>
            <li>You agree not to misuse our services</li>
            <li>You must provide accurate information for orders</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Product Information</h2>
          <ul>
            <li>We strive to display accurate product information</li>
            <li>Colors may vary due to monitor settings</li>
            <li>We reserve the right to limit order quantities</li>
            <li>Prices are subject to change without notice</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Orders and Payment</h2>
          <ul>
            <li>Orders are subject to acceptance and availability</li>
            <li>We accept major credit cards and specified payment methods</li>
            <li>Prices are in stated currency and include applicable taxes</li>
            <li>Payment must be received before order processing</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Intellectual Property</h2>
          <p>All content on KeyboardHub is protected by copyright and other intellectual property rights:</p>
          <ul>
            <li>Website content and design</li>
            <li>Product images and descriptions</li>
            <li>Logos and trademarks</li>
            <li>Custom keyboard designs</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Limitation of Liability</h2>
          <p>KeyboardHub shall not be liable for:</p>
          <ul>
            <li>Indirect or consequential damages</li>
            <li>Service interruptions</li>
            <li>Third-party actions</li>
            <li>Events beyond our reasonable control</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Terms; 