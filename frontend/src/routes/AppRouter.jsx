
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Mascotas from "../pages/Mascotas";
import Login from "../pages/Login";
import DetalleMascota from "../pages/DetalleMascota";
import Dashboard from "../pages/Dashboard";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mascotas" element={<Mascotas />} />
      <Route path="/mascota/:id" element={<DetalleMascota />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/acerca" element={<div className="container"><h1>Acerca de</h1></div>} />
      <Route path="/links" element={<div className="container"><h1>Links</h1></div>} />
    </Routes>
  );
}

export default AppRouter;