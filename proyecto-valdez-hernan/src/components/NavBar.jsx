import React from "react";
import "../App.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Plantor</h1>
      </div>
      <div className="navbar-lista-categ">
        <button className="btn">Inicio</button>
        <button className="btn">Productos</button>
        <button className="btn">Carrito</button>
        <CartWidget />
      </div>
      
    </nav>
  );
};

export default Navbar;