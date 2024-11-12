import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="service-section"
    >
      <div className="service-content">
        <h1>Privacy Policy</h1>
        
        <div className="service-block">
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Billing and shipping addresses</li>
            <li>Payment information</li>
            <li>Order history</li>
            <li>Communication preferences</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>How We Use Your Information</h2>
          <ul>
            <li>Process your orders and payments</li>
            <li>Send order confirmations and updates</li>
            <li>Provide customer support</li>
            <li>Send marketing communications (with consent)</li>
            <li>Improve our products and services</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Information Sharing</h2>
          <p>We do not sell or rent your personal information. We may share your information with:</p>
          <ul>
            <li>Payment processors</li>
            <li>Shipping partners</li>
            <li>Service providers</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information, including:</p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Secure servers</li>
            <li>Regular security audits</li>
            <li>Employee training on data protection</li>
          </ul>
        </div>

        <div className="service-block">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>File a complaint with relevant authorities</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Privacy; 