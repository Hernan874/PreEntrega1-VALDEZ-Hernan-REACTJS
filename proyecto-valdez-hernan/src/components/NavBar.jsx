import React from "react";
import "../App.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Plantor</h1>
      </div>
      <div className="navbar-lista-categ">
        <button className="btn"><Link to={'/'}>Inicio</Link></button>
        <button className="btn"><Link to={'/Productos'}>Productos</Link></button>
        <button className="btn">Carrito</button>
        <CartWidget />
      </div>
      
    </nav>
  );
};

export default Navbar;