import React from 'react';

function Inicio() {
  return (
    <div className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ height: '80vh', backgroundImage: 'url(https://github.com/Quincenero/marco-espinoza-25235/raw/main/src/assets/productos/strawberries-2563395_1280.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="p-4 rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <h1 className="display-4">Verdulería Orgánica</h1>
        <p className="lead">Productos frescos, locales y saludables para tu mesa.</p>
        <a href="productos" className="btn btn-success btn-lg mt-3">Ver productos</a>
      </div>
    </div>
  );
}

export default Inicio;
