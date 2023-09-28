import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import props from "prop-types";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzaNum = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaNum > 0 ? (
        <Fragment>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all oraganic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((data) => {
              //rendering list
              return (
                <Pizza
                  // name={data.name}
                  // photo={data.photoName}
                  // ingredients={data.ingredients}
                  // price={data.price}

                  // passing whole object
                  pizzaObj={data}
                  key={data.name}
                />
              );
            })}
          </ul>
        </Fragment>
      ) : (
        []
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photo="pizzas/spinaci.jpg"
        price={10}
      ></Pizza>
      <Pizza
        name="Pizza Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photo="pizzas/focaccia.jpg"
        price={12}
      ></Pizza>

      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photo="pizzas/margherita.jpg"
        price={15}
      ></Pizza>
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photo="pizzas/prosciutto.jpg"
        price={12}
      ></Pizza>
      <Pizza
        na
        me="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photo="pizzas/salamino.jpg"
        price={17}
      ></Pizza> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 2;
  const closeHours = 22;

  const isOpen = hour >= openHours && hour <= closeHours;

  // if (isOpen) {
  //   alert("we are open now!");
  // } else {
  //   alert("we are closed now");
  // }

  return (
    <div className="footer">
      {isOpen ? (
        <Order openHours={openHours} closeHours={closeHours} />
      ) : (
        <Closed openHours={openHours} closeHours={closeHours} />
      )}
    </div>
  );
}

// props destructuring
function Order({ openHours, closeHours }) {
  return (
    <div className="order">
      <p>
        we are open from {openHours}:00 to {closeHours}:00. Visit or Order
        Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Closed({ openHours, closeHours }) {
  return (
    <p>
      we welcome you between {openHours}:00 and {closeHours}:00
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
