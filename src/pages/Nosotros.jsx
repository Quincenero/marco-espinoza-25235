import React from 'react';
import { Link } from 'react-router-dom';

function Nosotros() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Sobre Nosotros 🥬</h1>
      <div className="row">
        <div className="col-md-6">
          <p>
            En <strong>Verdulería Orgánica </strong> creemos que la salud comienza con lo que comemos. Desde nuestros inicios, nos dedicamos a ofrecer frutas y verduras frescas, libres de agroquímicos, cultivadas con respeto por la tierra y por quienes la trabajan.
          </p>
          <p>
            Somos una familia apasionada por la alimentación consciente y el comercio justo. Trabajamos con productores locales, priorizando la calidad, la sostenibilidad y el vínculo humano detrás de cada alimento.
          </p>
          <p>
            Nuestro compromiso es brindarte productos que nutran tu cuerpo y tu espíritu, en un espacio donde la comunidad y el cuidado mutuo son protagonistas.
          </p>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src="/src/assets/productos/nosotros.png" alt="Equipo de la verdulería" className="img-fluid rounded shadow" />
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to ="/contacto" className="btn btn-success">Conocenos más </Link>
      </div>
    </div>
  );
}

export default Nosotros; 