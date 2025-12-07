import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="hero-section">
        <img 
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=300&fit=crop" 
          alt="Perros jugando" 
          className="hero-image"
        />
        
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate("/mascotas")}>
            Ver mascotas
          </button>
          <button className="btn-primary" onClick={() => navigate("/registro")}>
            Registrarme
          </button>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=300&fit=crop" 
          alt="Perro feliz" 
          style={{ maxWidth: "500px", borderRadius: "8px", marginTop: "2rem" }}
        />
      </div>
    </div>
  );
}

export default Home;