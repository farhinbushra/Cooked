
import { useState } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import TableBooking from "./pages/TableBooking";
import OnlineOrder from "./pages/OnlineOrder";
import Cart from "./pages/Cart";

const App = () => {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log('Adding to cart:', item); // Debug log
    setCart(prevCart => [...prevCart, item]);
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={setPage} />;
      case "menu":
        return <Menu addToCart={addToCart} />;
      case "contact":
        return <Contact />;
      case "table":
        return <TableBooking />;
      case "order":
        return <OnlineOrder />;
      case "cart":
        return <Cart cart={cart} />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div>
      <nav style={{
        padding: '15px',
        backgroundColor: '#333',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => setPage("home")}
          style={navButtonStyle}
        >
          Home
        </button>
        <button 
          onClick={() => setPage("menu")}
          style={navButtonStyle}
        >
          Menu
        </button>
        <button 
          onClick={() => setPage("contact")}
          style={navButtonStyle}
        >
          Contact
        </button>
        <button 
          onClick={() => setPage("table")}
          style={navButtonStyle}
        >
          Table Booking
        </button>
        <button 
          onClick={() => setPage("order")}
          style={navButtonStyle}
        >
          Online Order
        </button>

        <button 
          className="cart-btn" 
          onClick={() => setPage("cart")}
          style={{
            ...navButtonStyle,
            backgroundColor: '#ff9800',
            marginLeft: 'auto'
          }}
        >
          🛒 Cart ({cart.length})
        </button>
      </nav>

      <main style={{ padding: '20px' }}>
        {renderPage()}
      </main>
    </div>
  );
};

// Style object for nav buttons
const navButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px',
  minWidth: '100px'
};

export default App;
