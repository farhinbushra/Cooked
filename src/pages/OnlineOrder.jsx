import "./Form.css";

const OnlineOrder = () => {
  return (
    <main className="form-container">
      <h1>Online Order</h1>

      <form className="form">
        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Food Item" required />
        <input type="number" placeholder="Quantity" required />
        <input type="text" placeholder="Delivery Address" required />
        <button type="submit">Place Order</button>
      </form>
    </main>
  );
};

export default OnlineOrder;
