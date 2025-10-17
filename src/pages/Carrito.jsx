import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, aumentarCantidad, reducirCantidad } = useContext(CarritoContext);

  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  return (
    <Container className="mt-4">
      <h2 className="text-success text-center mb-4">🛒 Tu carrito</h2>

      {carrito.length === 0 ? (
        <p className="text-center">El carrito está vacío.</p>
      ) : (

      <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>

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
          <tfoot>
            <tr>
              <td colSpan="4" className="text-end fw-bold fs-5">Total</td>
              <td className="fw-bold">${total}</td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
      </div>
      )}
    </Container>
  );
};

export default Carrito;