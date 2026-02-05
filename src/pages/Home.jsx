import "./Home.css";

const Home = ({ goToMenu }) => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Cooked</h1>
        <p>Delicious food delivered fresh to your table</p>
        <button onClick={goToMenu}>See Menu</button> {/* Hero button */}
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>We serve the best meals in town with love and care!</p>
      </section>
    </div>
  );
};
