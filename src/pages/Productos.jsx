import React from 'react';
import ListaProductos from '../components/ListaProductos';

const Productos = () => {
  return (
    <main className="py-4">
      <div className="container">
        <h1 className="mb-4 text-center text-success">Nuestros productos orgánicos</h1>
        <ListaProductos />
      </div>
    </main>
  );
};

export default Productos;