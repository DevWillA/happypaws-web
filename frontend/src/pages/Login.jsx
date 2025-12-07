import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUsuario } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulación de login
    setUsuario({ username });
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-primary">
            Iniciar sesión
          </button>
          <button type="submit" className="btn-primary">
            Registrarse
          </button>
        </div>

        <button type="button" className="btn-primary">
          Olvido su contraseña
        </button>
      </form>
    </div>
  );
}

export default Login;