
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f1f1f1" }}>
      <strong>HappyPaws Web II 🐾</strong>
      <span style={{ marginLeft: "1rem" }}>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/mascotas">Mascotas</Link>
      </span>
    </nav>
  );
}

export default Navbar;
