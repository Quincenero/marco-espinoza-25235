import { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      return existente
        ? prev.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        : [...prev, { ...producto, cantidad: 1 }];
    });
  };
  const aumentarCantidad = (id) => {
  setCarrito((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    )
  );
};

const reducirCantidad = (id) => {
  setCarrito((prev) =>
    prev.map((item) =>
      item.id === id && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    )
  );
};

const eliminarDelCarrito = (id) => {
  setCarrito((prev) => prev.filter((item) => item.id !== id));
};


  return (
    <CarritoContext.Provider value={{ carrito, 
                                      agregarAlCarrito
                                      , aumentarCantidad
                                      , reducirCantidad
                                      , eliminarDelCarrito
                                    }}>
      {children}
    </CarritoContext.Provider>
  );
};