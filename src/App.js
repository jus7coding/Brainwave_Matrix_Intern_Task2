import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import MobileMenu from './components/MobileMenu';
import { CartProvider, useCart } from './context/CartContext';
import Footer from './components/Footer';
import Shipping from './components/Shipping';
import Returns from './components/Returns';
import FAQ from './components/FAQ';
import Warranty from './components/Warranty';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import ProductDetails from './components/ProductDetails';
import './App.css';

// Create a separate component for the app content
function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '10px',
            padding: '16px',
          },
          success: {
            duration: 1000,
            iconTheme: {
              primary: '#4ecdc4',
              secondary: '#fff',
            },
          },
        }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="logo">KeyboardHub</Link>
        <ul className="nav-links desktop-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              Cart
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </Link>
          </li>
        </ul>
        <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} cartCount={cartItemCount} />
      </motion.nav>
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Products />
            </>
          } />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
