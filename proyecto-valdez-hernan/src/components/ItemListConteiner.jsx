import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { fetchProductos } from "./mockService";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchProductos(); 
        setItems(data); 
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      } finally {
        setLoading(false); 
      }
    };

    getItems();
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;