useEffect(() => {
  const obtenerProductos = async () => {
    const url = "https://raw.githubusercontent.com/Quincenero/25235-marco-espinoza/main/src/data/productos.json";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener productos");
      const data = await response.json();

      // Adaptar campos del JSON a los que usa el JSX
      const productosFormateados = data.map((prod) => ({
        ...prod,
        imagen: prod.img,
        valor: prod.precio,
      }));

      setProductos(productosFormateados);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      setProductos([]);
    }
  };

  obtenerProductos();
}, []);