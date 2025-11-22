import { useEffect, useState } from "react";
import { api } from "../services/api";

function Mascotas() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    api.get("/mascotas")
      .then((res) => setMascotas(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <h1>Lista de Mascotas</h1>
      <ul>
        {mascotas.map((m) => (
          <li key={m.id}>
            {m.nombre} - {m.especie} - {m.estado}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Mascotas;
