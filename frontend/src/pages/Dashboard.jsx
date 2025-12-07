import { useState } from "react";

function Dashboard() {
  const [tabActiva, setTabActiva] = useState("solicitudes");

  const solicitudes = [
    { nombre: "Simon", estado: "En proceso de Papeleo", adoptante: "Carlos Fuentes", fecha: "28 octubre del 2025" },
    { nombre: "Karla", estado: "Pendiente Visita", adoptante: "Tatiana Castillo", fecha: "15 octubre del 2025" },
    { nombre: "Arthur", estado: "En proceso de Papeleo", adoptante: "Yuly Cortes", fecha: "31 octubre del 2025" },
    { nombre: "Marley", estado: "Adoptado", adoptante: "Claudio Chicken", fecha: "12 octubre del 2025" }
  ];

  return (
    <div className="container">
      <div className="dashboard-tabs">
        <button 
          className={tabActiva === "solicitudes" ? "tab active" : "tab"}
          onClick={() => setTabActiva("solicitudes")}
        >
          Solicitudes Pendientes
        </button>
        <button 
          className={tabActiva === "adopciones" ? "tab active" : "tab"}
          onClick={() => setTabActiva("adopciones")}
        >
          Adopciones completadas
        </button>
        <button 
          className={tabActiva === "disponibles" ? "tab active" : "tab"}
          onClick={() => setTabActiva("disponibles")}
        >
          Mascotas Disponibles
        </button>
        <button 
          className={tabActiva === "registros" ? "tab active" : "tab"}
          onClick={() => setTabActiva("registros")}
        >
          Registros medicos
        </button>
      </div>

      <h3>Tablas de control:</h3>

      <table className="control-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Adoptante</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud, index) => (
            <tr key={index}>
              <td>{solicitud.nombre}</td>
              <td>{solicitud.estado}</td>
              <td>{solicitud.adoptante}</td>
              <td>{solicitud.fecha}</td>
              <td>
                <button className="btn-edit">Editar</button>
                <button className="btn-delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;