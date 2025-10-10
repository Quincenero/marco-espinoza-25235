import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ producto, agregarAlCarrito }) => {
  
  const imagenSrc = producto.img.startsWith('http')
    ? producto.img
    : `/img/${producto.img}`;

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={imagenSrc}
        alt={producto.nombre}
        className="img-fluid"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-success fw-bold">{producto.nombre}</Card.Title>
        <Card.Text className="text-muted">Precio: ${producto.precio}</Card.Text>

        <Button
          variant="success"
          className="w-100 mt-auto"
          onClick={() => agregarAlCarrito(producto)}
          style={{
            backgroundColor: '#28a745',
            borderColor: '#28a745',
            padding: '10px',
            fontSize: '16px'
          }}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;