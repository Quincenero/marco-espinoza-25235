import React from 'react';

function Inicio() {
  return (
    <div className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ height: '80vh', backgroundImage: 'url(https://pixabay.com/get/ge21dd9fb837868e0d45e504e267e82096228f489358473a56fef9b4d5dd383a959fe088adc31b5e652d39d56e53f583c2c44eacb7997296a4ff4e6377e3defcd_1280.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="p-4 rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <h1 className="display-4">Verdulería Orgánica</h1>
        <p className="lead">Productos frescos, locales y saludables para tu mesa.</p>
        <a href=" /marco-espinoza-25235/productos" className="btn btn-success btn-lg mt-3">Ver productos</a>
      </div>
    </div>
  );
}

export default Inicio;