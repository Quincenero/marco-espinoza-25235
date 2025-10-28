import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-success text-white pt-4 pb-3 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Verdulería Orgánica</h5>
            <p>Frutas y verduras frescas, directo del productor a tu mesa. 🌱</p>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Contacto</h6>
            <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i>Av. Corrientes 3255, CABA</p>
            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>(011) 1234-5678</p>
            <p><i className="bi bi-envelope-fill me-2"></i>contacto@verduleriaorganica.com</p>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Seguinos</h6>
            <a href="#" className="text-white d-block mb-1">
              <i className="#"></i>Instagram
            </a>
            <a href="#" className="text-white d-block mb-1">
              <i className="bi bi-facebook me-2"></i>Facebook
            </a>
            <a href="#" className="text-white d-block">
              <i className="bi bi-whatsapp me-2"></i>WhatsApp
            </a>
          </Col>
        </Row>

        <hr className="border-light" />

        <Row>
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Verdulería Orgánica. Todos los derechos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;