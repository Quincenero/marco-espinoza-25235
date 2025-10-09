
useEffect(() => {
  const obtenerProductos = async () => {
    const url = "https://raw.githubusercontent.com/Quincenero/25235-marco-espinoza/refs/heads/main/src/data/productos.json";
    
    try {
      const response = await fetch(url);
      console.log("Response status:", response.status);
      if (!response.ok) throw new Error("Error al obtener productos");
      const data = await response.json();
      
      // Usar los datos directamente sin mapear
      setProductos(data);
      
    } catch (error) {
      console.error("Error al cargar productos:", error);
      setProductos([]);
    }
  };

  obtenerProductos();
}, []);