import "./Contact.css";

const Contact = ({ goToTable, goToOrder }) => {
  return (
    <main className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <p>📍 Address: Dhaka, Bangladesh</p>
        <p>📞 Phone: +880 1234-567890</p>
        <p>📧 Email: foodiepalace@gmail.com</p>
      </div>

      <div className="service-links">
        <button className="service-btn" onClick={goToTable}>
          🍽️ Book a Table
        </button>

        <button className="service-btn" onClick={goToOrder}>
          🛒 Online Order
        </button>
      </div>
    </main>
  );
};

export default Contact;
