import React from "react";
import "../App.css";
import cartIcon from "../assets/icono-carrito.png";


const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Carrito de Compras" className="cart-icon" />
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;