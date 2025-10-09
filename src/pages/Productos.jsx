import { useEffect, useState } from "react";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const url = "https://raw.githubusercontent.com/Quincenero/marco-espinoza-25235/main/src/data/productos.json";
      console.log(url)
      try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) throw new Error("Error al obtener productos");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
        setProductos([]);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div className="row">
      {productos.map((prod) => (
        <div key={prod.id} className="col-md-4 mb-3">
          <div className="card h-100">
            <img src={prod.img} alt={prod.nombre} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{prod.nombre}</h5>
              <p className="card-text">${prod.precio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}