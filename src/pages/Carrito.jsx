import { useContext } from 'react';
import { Container, ListGroup, Button, Image, ButtonGroup } from 'react-bootstrap';
import { CarritoContext } from '../context/CarritoContext';

const Carrito = () => {
  const { carrito, sumarUnidad, restarUnidad, vaciarCarrito } = useContext(CarritoContext);

  const totalCompra = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <Container className="mt-4">
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ListGroup>
            {carrito.map((item) => {
              const imagenSrc = new URL(`../assets/productos/${item.img}`, import.meta.url).href;
              const totalPorProducto = item.precio * item.cantidad;

              return (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <Image src={imagenSrc} alt={item.nombre} width={50} height={50} rounded />
                    <div>
                      <strong>{item.nombre}</strong><br />
                      ${item.precio} × {item.cantidad} = <strong>${totalPorProducto}</strong>
                    </div>
                  </div>
                  <ButtonGroup>
                    <Button variant="outline-secondary" size="sm" onClick={() => restarUnidad(item.id)}>
                      −
                    </Button>
                    <Button variant="outline-success" size="sm" onClick={() => sumarUnidad(item.id)}>
                      +
                    </Button>
                  </ButtonGroup>
                </ListGroup.Item>
              );
            })}
          </ListGroup>

          <div className="mt-4 text-end">
            <h4>Total de la compra: ${totalCompra}</h4>
            <Button variant="danger" className="mt-2" onClick={vaciarCarrito}>
              Vaciar carrito
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Carrito;