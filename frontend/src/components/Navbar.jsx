import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const { usuario, setUsuario } = useAppContext();

  const handleLogout = () => {
    setUsuario(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/mascotas">Mascotas</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/links">Links</Link>
        
        {usuario ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={handleLogout} className="btn-login">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn-login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;