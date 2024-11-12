import { motion } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What switch types do you offer?",
      answer: "We offer Cherry MX, Gateron, and Kailh switches in various types including Linear (Red), Tactile (Brown), and Clicky (Blue)."
    },
    {
      question: "How long is the warranty period?",
      answer: "All our keyboards come with a 2-year warranty covering manufacturing defects and mechanical issues."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location."
    },
    {
      question: "Can I return a keyboard if I don't like the switches?",
      answer: "Yes, unused keyboards can be returned within 30 days. Please see our returns policy for details."
    },
    {
      question: "Are your keyboards hot-swappable?",
      answer: "Most of our keyboards are hot-swappable, allowing you to change switches without soldering."
    },
    {
      question: "Do you offer custom keyboard builds?",
      answer: "Yes, we offer custom keyboard building services. Contact us for details and pricing."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="service-section"
    >
      <div className="service-content">
        <h1>Frequently Asked Questions</h1>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={false}
              animate={{ backgroundColor: openIndex === index ? "#f5f5f7" : "#fff" }}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className={`arrow ${openIndex === index ? 'open' : ''}`}>▼</span>
              </button>
              <motion.div
                className="faq-answer"
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ; 