import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

function DetalleMascota() {
  const { id } = useParams();
  const [mascota, setMascota] = useState(null);

  // misma lógica de imágenes que en Mascotas
  const getImagenMascota = (id) => {
    const imagenes = {
      1: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=400&fit=crop",
      2: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
      3: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop",
      4: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop",
      5: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&h=400&fit=crop",
      6: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop",
    };

    return (
      imagenes[id] ||
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop"
    );
  };

  useEffect(() => {
    api
      .get("/mascotas")
      .then((res) => {
        const encontrada = res.data.find(
          (m) => m.id === parseInt(id, 10)
        );
        setMascota(encontrada || null);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!mascota) {
    return <div className="container">Cargando...</div>;
  }

  return (
    <div className="container">
      <div className="detalle-mascota">
        <div className="detalle-imagen">
          <img
            src={getImagenMascota(mascota.id)}
            alt={mascota.nombre}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/400x400?text=Mascota";
            }}
          />
        </div>

        <div className="detalle-info">
          <h1>Nombre: {mascota.nombre}</h1>
          <p>
            <strong>Edad:</strong> {mascota.edad}
          </p>
          <p>
            <strong>Raza:</strong> {mascota.raza}
          </p>
          <p>
            <strong>Tamaño:</strong> {mascota.tamano}
          </p>
          <p>
            <strong>Estado:</strong> {mascota.estado}
          </p>

          <p style={{ marginTop: "1.5rem" }}>{mascota.descripcion}</p>

          <p style={{ marginTop: "1rem" }}>
            <strong>Requisitos de adopción:</strong> {mascota.requisitos}
          </p>

          <button className="btn-blue">
            Adoptar esta mascota
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalleMascota;
