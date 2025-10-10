import React from 'react';

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
          <img src="https://pixabay.com/get/gec77f99b389f6bfa093c78cedaf6416abf786e7cd6cb7bdd8cf28e9e5fb9664e4af769ae8fa82e4b18dc824d665ef705_640.jpg" alt="Equipo de la verdulería" className="img-fluid rounded shadow" />
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="contacto" className="btn btn-success">Conocenos más</a>
      </div>
    </div>
  );
}

export default Nosotros;