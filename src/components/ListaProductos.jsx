import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CarritoContext } from '../context/CarritoContext';

const ListaProductos = () => {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [productoAgregado, setProductoAgregado] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Quincenero/marco-espinoza-25235/main/src/data/productos.json')
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el archivo");
        return res.json();
      })
      .then((data) => {
        console.log("Productos cargados:", data);
        setProductos(data);
        const categoriasUnicas = [...new Set(data.map(p => p.categoria))];
        setCategorias(categoriasUnicas);
      })
      .catch((err) => console.error('Error al cargar productos:', err));
  }, []);

  const handleAgregar = (producto) => {
    agregarAlCarrito(producto);
    setProductoAgregado(producto);
    setShowToast(true);
  };

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(p => p.categoria === categoriaSeleccionada)
    : productos;

  return (
    <Container className="mt-4">
      <h2 className="text-center text-success mb-4">Productos disponibles</h2>

      {/* Botones de filtro */}
      <div className="mb-4 text-center">
        <button
          className={`btn btn-outline-success mx-2 ${!categoriaSeleccionada ? 'active' : ''}`}
          onClick={() => setCategoriaSeleccionada(null)}
        >
          Todos
        </button>
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn btn-outline-success mx-2 ${categoriaSeleccionada === cat ? 'active' : ''}`}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Productos filtrados */}
      <Row>
        {productosFiltrados.map((producto) => (
          <Col key={producto.id} md={4} className="mb-4">
            <ProductCard producto={producto} agregarAlCarrito={handleAgregar} />
          </Col>
        ))}
      </Row>

      {/* Toast de confirmación */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">Carrito</strong>
          </Toast.Header>
          <Toast.Body>
            {productoAgregado ? `${productoAgregado.nombre} agregado al carrito 🛒` : ''}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default ListaProductos;