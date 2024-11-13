import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

    // Add this useEffect to scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (parseFloat(item.price.replace('$', '')) * item.quantity);
    }, 0).toFixed(2);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="cart-section"
    >
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                className="cart-item"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
              >
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </motion.button>
              </motion.div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${calculateTotal()}</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="checkout-button"
              onClick={() => alert("Checkout functionality coming soon!")}
            >
              Proceed to Checkout
            </motion.button>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Cart; 