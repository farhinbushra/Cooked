import "./Menu.css";
const menuData = [
  {
  title: "Margherita Pizza",
  img: "/src/assets/margherita pizza.jpg",
  desc: "Size is constant",
  price: 850,
  side: "left",
},

  {
    title: "Beef Tacos",
    img: "/src/assets/beeftacos.jpg",
    desc: "Spicy crispy juicy meat tacos.",
    price :150,
    side: "right",
  },
  {
    title: "Ceasar Salad",
    img: "/src/assets/ceasar.jpg",
    desc: "Healthy and Wealthy.",
    price:200,
    side: "left",
  },
  {
    title: "Katsu Bowl",
    img: "/src/assets/Katsu Bowls.jpg",
    desc: "Chicken cutting with white rice",
    price:350,
    side: "right",
  },
  {
    title:"Pumpkin Soup",
    img:"/src/assets/Pumpkin Soup.jpg",
    desc:"A happy Soul with soup of Bowl",
    price:200 ,
    side:"left",
  },

  {
    title:"Alfredo",
    img:"/src/assets/Alfredo.jpg",
    desc:"Juicy Pasta Nasta",
    price:200 ,
    side:"right",
  },{
    title:"Affogato",
    img:"/src/assets/affogato.jpg", 
    desc:"Cool and Strong",
    price:190,
    side:"left",
  },{
    title:"Fresh Latte",
    img:"/src/assets/Fresh Latte.jpg",
    desc:"Fresh Latte",
    price:100,
    side:"right",
  },{
    title:"Lamonade",
    img:"/src/assets/lemonade.jpg",
    desc:"Green Ice",
    price:35,
    side:"left",
  },

  
];

const MenuPuzzle = ({ addToCart }) => {
  const handleOrder = (foodItem) => {
    addToCart(foodItem);
  };

  return (
    <section className="menu-puzzle">
      <h1 className="menu-title">OUR MENU</h1>

      {menuData.map((item, index) => (
        <div
          key={index}
          className={`menu-row ${item.side === "right" ? "reverse" : ""}`}
        >
          <div className="menu-img">
            <img src={item.img} alt={item.title} />
          </div>

          <div className="menu-text">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <div className="menu-bottom">
              <span className="price">৳{item.price}</span>
              <button
                className="order-btn"
                onClick={() => handleOrder(item)} // pass `item` here
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MenuPuzzle;

