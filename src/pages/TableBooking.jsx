import "./Form.css";
const TableBooking = () => {
  return (
    <main className="form-container">
      <h1>Book a Table</h1>
      <form className="form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <input type="date" required />
        <input type="time" required />
        <input type="number" placeholder="Guests" required />
        <button type="submit">Confirm Booking</button>
      </form>
    </main>
  );
};

export default TableBooking;
