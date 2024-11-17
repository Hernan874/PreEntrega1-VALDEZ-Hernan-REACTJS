import React from "react";
import "../App.css";

const ItemDetail = ({ title, description, price, pictureUrl }) => {
  return (
    <div className="item-detail">
      <img src={pictureUrl} alt={title} className="item-detail-image" />
      <div className="item-detail-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p><strong>Precio:</strong> ${price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;