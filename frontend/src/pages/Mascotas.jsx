import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

function Mascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/mascotas")
      .then((res) => setMascotas(res.data))
      .catch((err) => console.error(err));
  }, []);

  const mascotasFiltradas = mascotas.filter(m => 
    m.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Imágenes de ejemplo según el id
  const getImagenMascota = (id) => {
    const imagenes = {
      1: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=300&h=200&fit=crop",
      2: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=200&fit=crop",
      3: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=300&h=200&fit=crop",
      4: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop",
      5: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=300&h=200&fit=crop",
      6: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300&h=200&fit=crop",
    };
    return imagenes[id] || "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300&h=200&fit=crop";
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Barra de Busqueda"
        className="search-bar"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="mascotas-grid">
        {mascotasFiltradas.map((mascota) => (
          <div 
            key={mascota.id} 
            className="mascota-card"
            onClick={() => navigate(`/mascota/${mascota.id}`)}
            style={{ cursor: "pointer" }}
          >
            <img 
              src={getImagenMascota(mascota.id)}
              alt={mascota.nombre}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200?text=Mascota";
              }}
            />
            <p><strong>{mascota.nombre}</strong> - {mascota.especie} - {mascota.estado}</p>
          </div>
        ))}
      </div>

      <button className="btn-primary" style={{ marginTop: "2rem" }}>
        Cargar mas..
      </button>
    </div>
  );
}

export default Mascotas;