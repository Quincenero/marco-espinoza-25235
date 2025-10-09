import { Card, Button } from 'react-bootstrap';
import '../styles/product-card.css';

const ProductCard = ({ producto, agregarAlCarrito }) => {
  const imagenSrc = new URL(`../assets/productos/${producto.img}`, import.meta.url).href;

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img 
      variant="top" 
      src={imagenSrc} 
      alt={producto.nombre} 
      className='product-image'/>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>Precio: ${producto.precio}</Card.Text>
        <Button variant="success" onClick={() => agregarAlCarrito(producto)}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;