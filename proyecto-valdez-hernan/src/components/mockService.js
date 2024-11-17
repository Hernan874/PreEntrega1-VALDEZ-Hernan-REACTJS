import { productos } from "./asyncMock.js";

export const fetchProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos); 
    }, 2000);
  });
};

export const fetchProductosById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = productos.find((item) => item.id === id);
        product ? resolve(product) : reject("Producto no encontrado");
      }, 2000);
    });
  };