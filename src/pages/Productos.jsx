import { useContext, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import productosData from '../data/productos.json';
import ProductCard from '../components/ProductCard';
import { CarritoContext } from '../context/CarritoContext';

const Productos = () => {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [productos, setProductos] = useState(productosData);

  const categoriasUnicas = ['Todas', ...new Set(productosData.map(p => p.categoria))];

  const productosFiltrados =
    categoriaSeleccionada === 'Todas'
      ? productos
      : productos.filter(p => p.categoria === categoriaSeleccionada);

  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Productos Orgánicos</h2>

      <Form.Select
        className="mb-4"
        value={categoriaSeleccionada}
        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
      >
        {categoriasUnicas.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </Form.Select>

      <Row>
        {productosFiltrados.map((producto) => (
          <Col key={producto.id} md={4} sm={6} xs={12}>
            <ProductCard
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
              eliminarProducto={eliminarProducto}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Productos;