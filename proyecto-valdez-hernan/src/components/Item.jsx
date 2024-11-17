import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Item = ({ title, description, price, pictureUrl, id }) => {
    return (
      <div className="item">
        <img src={pictureUrl} alt={title} className="item-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Precio: ${price}</p>
        <button className="btn"> <Link to={`/detail/${id}`}> Ver Detalles</Link></button>
      </div>
    );
  };
  
  export default Item;