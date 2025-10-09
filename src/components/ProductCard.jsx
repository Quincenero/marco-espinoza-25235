const ProductCard = ({ producto, agregarAlCarrito }) => {
  const imagenSrc = producto.img.startsWith("http")
    ? producto.img
    : `/img/${producto.img}`;

  console.log("Producto:", producto); // Verificar que el producto existe
  console.log("Función agregarAlCarrito:", agregarAlCarrito); // Verificar que la función existe

  return (
    <Card className="mb-4 shadow-sm border-0 rounded-4 product-card" style={{ minHeight: '400px' }}>
      <Card.Img
        variant="top"
        src={imagenSrc}
        alt={producto.nombre}
        className="product-image rounded-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column" style={{ border: '1px solid red' }}> {/* Debug border */}
        <Card.Title className="text-success fw-bold">{producto.nombre}</Card.Title>
        <Card.Text className="text-muted">Precio: ${producto.precio}</Card.Text>
        
        {/* Botón con estilos más visibles */}
        <Button
          variant="success"
          className="w-100 mt-3"
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