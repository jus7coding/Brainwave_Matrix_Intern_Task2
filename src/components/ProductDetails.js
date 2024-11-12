import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const keyboards = [
    {
      id: 1,
      name: "Phantom TKL",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=800&q=80",
      description: "Tenkeyless mechanical keyboard with RGB backlight",
      specs: {
        switchType: "Cherry MX Red/Brown/Blue",
        layout: "Tenkeyless (87 keys)",
        connectivity: "USB-C, detachable cable",
        lighting: "Per-key RGB with 16.8M colors",
        material: "Aluminum frame, PBT keycaps",
        features: [
          "Hot-swappable switches",
          "N-key rollover",
          "Customizable RGB lighting",
          "Programmable keys",
          "Magnetic wrist rest included"
        ]
      }
    },
    {
      id: 2,
      name: "Eclipse 75%",
      price: "$139.99",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      description: "Compact 75% layout with wireless connectivity",
      specs: {
        switchType: "Gateron Yellow/Brown/Blue",
        layout: "75% (84 keys)",
        connectivity: "Bluetooth 5.0 & USB-C",
        lighting: "White LED backlighting",
        material: "Polycarbonate case, PBT keycaps",
        features: [
          "Dual-mode connectivity",
          "4000mAh battery",
          "Mac/Windows compatible",
          "Custom function layer",
          "Low-profile design"
        ]
      }
    },
    {
      id: 3,
      name: "Nova 60%",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-compact 60% design for minimalists",
      specs: {
        switchType: "Kailh Box White/Red/Brown",
        layout: "60% (61 keys)",
        connectivity: "USB-C",
        lighting: "RGB underglow",
        material: "CNC aluminum case, PBT keycaps",
        features: [
          "Hot-swappable PCB",
          "QMK/VIA compatible",
          "Sound dampening foam",
          "Multiple layer support",
          "Compact form factor"
        ]
      }
    },
    {
      id: 4,
      name: "Stealth Pro",
      price: "$189.99",
      image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=800&q=80",
      description: "Full-size keyboard with silent switches",
      specs: {
        switchType: "Cherry MX Silent Red",
        layout: "Full-size (104 keys)",
        connectivity: "USB-C, braided cable",
        lighting: "Per-key RGB",
        material: "Steel plate, ABS keycaps",
        features: [
          "Sound dampening rings",
          "Media controls",
          "USB passthrough",
          "Palm rest included",
          "Anti-ghosting"
        ]
      }
    },
    {
      id: 5,
      name: "Wireless Elite",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      description: "Premium wireless mechanical keyboard",
      specs: {
        switchType: "Gateron G Pro switches",
        layout: "TKL (87 keys)",
        connectivity: "2.4GHz & Bluetooth 5.1",
        lighting: "Per-key RGB",
        material: "Aircraft-grade aluminum",
        features: [
          "Triple device connection",
          "6000mAh battery",
          "Auto sleep mode",
          "Customizable dials",
          "Windows/Mac support"
        ]
      }
    },
    {
      id: 6,
      name: "Gaming Master",
      price: "$179.99",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=800&q=80",
      description: "RGB gaming keyboard with macro keys",
      specs: {
        switchType: "Optical switches",
        layout: "Extended (108 keys)",
        connectivity: "USB-C",
        lighting: "Per-key RGB + light bar",
        material: "Aluminum top plate",
        features: [
          "6 macro keys",
          "8000Hz polling rate",
          "Volume wheel",
          "Game mode",
          "On-board memory"
        ]
      }
    },
    {
      id: 7,
      name: "Minimalist Pro",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?auto=format&fit=crop&w=800&q=80",
      description: "Clean and simple design with premium switches",
      specs: {
        switchType: "Holy Panda switches",
        layout: "65% (68 keys)",
        connectivity: "USB-C",
        lighting: "White LED",
        material: "E-white aluminum case",
        features: [
          "Gasket mount design",
          "Screw-in stabilizers",
          "Sound dampening",
          "Minimalist aesthetic",
          "Programmable layers"
        ]
      }
    },
    {
      id: 8,
      name: "Ergonomic Plus",
      price: "$219.99",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      description: "Split design for maximum comfort",
      specs: {
        switchType: "Zealios V2 switches",
        layout: "Split (76 keys)",
        connectivity: "TRRS & USB-C",
        lighting: "Per-key RGB",
        material: "CNC aluminum cases",
        features: [
          "Tenting mechanism",
          "Thumb clusters",
          "Ortholinear layout",
          "Tilt adjustment",
          "Ergonomic design"
        ]
      }
    },
    {
      id: 9,
      name: "Classic Edition",
      price: "$169.99",
      image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=800&q=80",
      description: "Vintage style with modern features",
      specs: {
        switchType: "Box Jade switches",
        layout: "Full-size (104 keys)",
        connectivity: "USB-C",
        lighting: "White backlight",
        material: "Beige PBT case",
        features: [
          "Retro aesthetic",
          "Dye-sub keycaps",
          "Modern internals",
          "USB hub",
          "Classic colorway"
        ]
      }
    },
    {
        id: 9,
        name: "Classic Edition",
        price: "$169.99",
        image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=800&q=80",
        description: "Vintage style with modern features",
        specs: {
          switchType: "Box Jade switches",
          layout: "Full-size (104 keys)",
          connectivity: "USB-C",
          lighting: "White backlight",
          material: "Beige PBT case",
          features: [
            "Retro aesthetic",
            "Dye-sub keycaps",
            "Modern internals",
            "USB hub",
            "Classic colorway"
          ]
        }
      },
    {
      id: 10,
      name: "RGB Master Pro",
      price: "$229.99",
      image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=800&q=80",
      description: "Full RGB customization with premium switches",
      specs: {
        switchType: "Cherry MX Speed Silver",
        layout: "Full-size (104 keys)",
        connectivity: "USB-C, dual ports",
        lighting: "Per-key RGB + underglow",
        material: "Brushed aluminum, PBT keycaps",
        features: [
          "16.8M color customization",
          "Macro recording",
          "Dedicated media controls",
          "USB passthrough port",
          "Detachable wrist rest"
        ]
      }
    },
    {
      id: 11,
      name: "Developer Elite",
      price: "$189.99",
      image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=800&q=80",
      description: "Optimized for programming with custom keycaps",
      specs: {
        switchType: "Boba U4T switches",
        layout: "75% (84 keys)",
        connectivity: "USB-C",
        lighting: "White LED",
        material: "Polycarbonate case, DSA keycaps",
        features: [
          "Programmable layers",
          "VSCode shortcuts",
          "Git command macros",
          "Terminal integration",
          "Custom IDE keycaps"
        ]
      }
    },
    {
      id: 12,
      name: "Compact Warrior",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      description: "60% layout with hot-swappable switches",
      specs: {
        switchType: "Gateron Pro switches",
        layout: "60% (61 keys)",
        connectivity: "USB-C, Bluetooth 5.0",
        lighting: "South-facing RGB LEDs",
        material: "Frosted acrylic case",
        features: [
          "Hot-swap PCB",
          "Foam modded",
          "Screw-in stabilizers",
          "Multiple layouts support",
          "Wireless/Wired modes"
        ]
      }
    },
    {
      id: 13,
      name: "Professional Series",
      price: "$209.99",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      description: "Full-size professional grade mechanical keyboard",
      specs: {
        switchType: "Topre 45g switches",
        layout: "Full-size (104 keys)",
        connectivity: "USB-C",
        lighting: "None (Professional design)",
        material: "ABS plastic, PBT keycaps",
        features: [
          "Capacitive switches",
          "Silent operation",
          "Ergonomic design",
          "Built-in USB hub",
          "Professional keycap legends"
        ]
      }
    },
    {
      id: 14,
      name: "Silent Ninja",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-quiet mechanical switches for office use",
      specs: {
        switchType: "Silent Alpaca switches",
        layout: "TKL (87 keys)",
        connectivity: "USB-C",
        lighting: "White backlight",
        material: "Sound-dampened aluminum",
        features: [
          "Sound absorption foam",
          "Lubed stabilizers",
          "O-ring dampeners",
          "Silent switch design",
          "Office-friendly aesthetics"
        ]
      }
    },
    {
      id: 15,
      name: "Artisan Limited",
      price: "$249.99",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=800&q=80",
      description: "Limited edition with custom artisan keycaps",
      specs: {
        switchType: "Holy Panda X switches",
        layout: "65% (68 keys)",
        connectivity: "USB-C",
        lighting: "Per-key RGB",
        material: "Brass plate, custom resin case",
        features: [
          "Artisan ESC keycap",
          "Numbered limited edition",
          "Brass weight insert",
          "Custom carrying case",
          "Certificate of authenticity"
        ]
      }
    }
  ];

  const product = keyboards.find(k => k.id === parseInt(id));

  if (!product) {
    return <div className="service-section">Product not found</div>;
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="service-section"
    >
      <motion.div 
        className="product-details-container"
        variants={containerVariants}
      >
        <motion.div 
          className="product-details-image"
          variants={imageVariants}
        >
          <motion.img 
            src={product.image} 
            alt={product.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <div className="product-details-info">
          <motion.h1 variants={itemVariants}>{product.name}</motion.h1>
          <motion.p 
            className="product-details-price"
            variants={itemVariants}
          >
            {product.price}
          </motion.p>
          <motion.p 
            className="product-details-description"
            variants={itemVariants}
          >
            {product.description}
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="buy-button"
            onClick={() => addToCart(product)}
            variants={itemVariants}
          >
            Add to Cart
          </motion.button>

          <motion.div 
            className="product-specs"
            variants={itemVariants}
          >
            <motion.h2 variants={itemVariants}>Specifications</motion.h2>
            <motion.div 
              className="specs-grid"
              variants={containerVariants}
            >
              {Object.entries(product.specs).slice(0, -1).map(([key, value], index) => (
                <motion.div
                  key={key}
                  className="spec-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3>{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <p>{value}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="product-features"
              variants={itemVariants}
            >
              <motion.h2 variants={itemVariants}>Features</motion.h2>
              <motion.ul variants={containerVariants}>
                {product.specs.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProductDetails; 