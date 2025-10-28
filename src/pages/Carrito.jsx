import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, aumentarCantidad, reducirCantidad, vaciarCarrito } = useContext(CarritoContext);

  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  const formatoPeso = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  return (
    <Container className="mt-4">
      <h2 className="text-success text-center mb-4">🛒 Tu carrito</h2>

      {carrito.length === 0 ? (
        <p className="text-center">El carrito está vacío.</p>
      ) : (
        <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '1rem' }}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((producto) => (
                <tr key={producto.id}>
                  <td>
                    <img
                      src={producto.img}
                      alt={producto.nombre}
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>{producto.nombre}</td>
                  <td>${producto.precio}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <Button variant="outline-secondary" size="sm" onClick={() => reducirCantidad(producto.id)}>
                        −
                      </Button>
                      <span>{producto.cantidad}</span>
                      <Button variant="outline-secondary" size="sm" onClick={() => aumentarCantidad(producto.id)}>
                        +
                      </Button>
                    </div>
                  </td>
                  <td>${producto.precio * producto.cantidad}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => eliminarDelCarrito(producto.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Total y botones dentro del scroll */}
          <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap px-2">
            <div className="fw-bold fs-5">
              {carrito.length} producto{carrito.length !== 1 && 's'}
            </div>
            <div className="fw-bold fs-5">
              Total: {formatoPeso.format(total)}
            </div>
          </div>

          <div className="d-flex justify-content-end gap-3 mt-3 px-2">
            <Button variant="outline-danger" onClick={vaciarCarrito}>
              Vaciar carrito
            </Button>
            <Button variant="success" size="lg" onClick={() => alert('Gracias por tu compra 🥦')}>
              Finalizar compra
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Carrito;