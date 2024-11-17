import React from "react";
import Item from "./Item";
import "../App.css";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;