import { motion } from "framer-motion";
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Products = () => {
  const { addToCart } = useCart();
  
  const keyboards = [
    {
      id: 1,
      name: "Phantom TKL",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=800&q=80",
      description: "Tenkeyless mechanical keyboard with RGB backlight"
    },
    {
      id: 2,
      name: "Eclipse 75%",
      price: "$139.99",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      description: "Compact 75% layout with wireless connectivity"
    },
    {
      id: 3,
      name: "Nova 60%",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-compact 60% design for minimalists"
    },
    {
      id: 4,
      name: "Stealth Pro",
      price: "$189.99",
      image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=800&q=80",
      description: "Full-size keyboard with silent switches"
    },
    {
      id: 5,
      name: "Wireless Elite",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      description: "Premium wireless mechanical keyboard"
    },
    {
      id: 6,
      name: "Gaming Master",
      price: "$179.99",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=800&q=80",
      description: "RGB gaming keyboard with macro keys"
    },
    {
      id: 7,
      name: "Minimalist Pro",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?auto=format&fit=crop&w=800&q=80",
      description: "Clean and simple design with premium switches"
    },
    {
      id: 8,
      name: "Ergonomic Plus",
      price: "$219.99",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      description: "Split design for maximum comfort"
    },
    {
      id: 9,
      name: "Classic Edition",
      price: "$169.99",
      image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=800&q=80",
      description: "Vintage style with modern features"
    },
    {
      id: 10,
      name: "RGB Master Pro",
      price: "$229.99",
      image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=800&q=80",
      description: "Full RGB customization with premium switches"
    },
    {
      id: 11,
      name: "Developer Elite",
      price: "$189.99",
      image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=800&q=80",
      description: "Optimized for programming with custom keycaps"
    },
    {
      id: 12,
      name: "Compact Warrior",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      description: "60% layout with hot-swappable switches"
    },
    {
      id: 13,
      name: "Professional Series",
      price: "$209.99",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      description: "Full-size professional grade mechanical keyboard"
    },
    {
      id: 14,
      name: "Silent Ninja",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-quiet mechanical switches for office use"
    },
    {
      id: 15,
      name: "Artisan Limited",
      price: "$249.99",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=800&q=80",
      description: "Limited edition with custom artisan keycaps"
    }
  ];

  return (
    <section className="products-section">
      <h2>Our Collection</h2>
      <div className="products-grid">
        {keyboards.map((keyboard, index) => (
          <motion.div 
            key={keyboard.id}
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Link to={`/product/${keyboard.id}`} className="product-link">
              <div className="product-image-container">
                <img src={keyboard.image} alt={keyboard.name} />
              </div>
              <h3>{keyboard.name}</h3>
              <p>{keyboard.description}</p>
              <span className="price">{keyboard.price}</span>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="buy-button"
              onClick={() => addToCart(keyboard)}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;