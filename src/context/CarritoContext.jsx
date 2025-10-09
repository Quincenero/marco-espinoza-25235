import { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const index = carrito.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito[index].cantidad += 1;
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const sumarUnidad = (id) => {
    setCarrito((prev) =>
      prev.map((p) => (p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p))
    );
  };

  const restarUnidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p))
        .filter((p) => p.cantidad > 0)
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, sumarUnidad, restarUnidad, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
