import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const shoesData = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 12000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9vcJNPprFN_aIGrrk43mEcWzQufkfYn8Lw&s"
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 15000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7Yil_VqEL475hrWHHxqNd3h0OkFpwVlhIA&s"
    },
    {
      id: 3,
      name: "Puma Runner",
      price: 10000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqLW0D1XA6FuyHIiiNtHtH1aUczJtEK7DCg&s"
    }
  ];

  // Add to cart
  const addToCart = (shoe) => {
    const existingItem = cart.find(item => item.id === shoe.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === shoe.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  // Increase quantity
  const increaseQty = (shoe) => {
    addToCart(shoe);
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    const updatedCart = cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);

    setCart(updatedCart);
  };

  // Total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>👟 ShoeMart</h2>
        <div style={styles.navLinks}>
          <span style={styles.link}>Home</span>
          <span style={styles.link}>Category</span>
          <span style={styles.link}>About Us</span>
        </div>
      </nav>

      {/* MAIN */}
      <div style={styles.container}>

        {/* LEFT */}
        <div style={styles.section}>
          <h2 style={styles.heading}>Products</h2>

          {shoesData.map(shoe => (
            <div key={shoe.id} style={styles.card}>
              <img src={shoe.image} alt={shoe.name} style={styles.image} />
              <h4>{shoe.name}</h4>
              <p>₹ {shoe.price}</p>

              <button style={styles.button} onClick={() => addToCart(shoe)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div style={styles.section}>
          <h2 style={styles.heading}>🛒 Cart</h2>

          {cart.length === 0 ? (
            <p style={{ color: "#6d4c41" }}>Cart is empty</p>
          ) : (
            cart.map(item => (
              <div key={item.id} style={styles.card}>
                <h4>{item.name}</h4>
                <p>₹ {item.price}</p>

                {/* Quantity Controls */}
                <div style={styles.qtyContainer}>
                  <button
                    style={styles.qtyBtn}
                    onClick={() => decreaseQty(item.id)}
                  >
                    −
                  </button>

                  <span style={styles.qtyText}>{item.quantity}</span>

                  <button
                    style={styles.qtyBtn}
                    onClick={() => increaseQty(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}

          <h3 style={{ marginTop: "20px" }}>Total: ₹ {total}</h3>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f5f0e6",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif"
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#4e342e",
    color: "white",
    padding: "15px 30px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.2)"
  },

  logo: {
    margin: 0
  },

  navLinks: {
    display: "flex",
    gap: "25px"
  },

  link: {
    cursor: "pointer"
  },

  container: {
    display: "flex",
    gap: "40px",
    padding: "30px"
  },

  section: {
    flex: 1
  },

  heading: {
    color: "#4e342e"
  },

  card: {
    background: "#fff8f0",
    border: "1px solid #d7ccc8",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },

  image: {
    width: "120px",
    borderRadius: "8px",
    marginBottom: "10px"
  },

  button: {
    background: "#6d4c41",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px"
  },

  qtyContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px"
  },

  qtyBtn: {
    background: "#6d4c41",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  },

  qtyText: {
    fontWeight: "bold",
    fontSize: "16px"
  }
};

export default App;