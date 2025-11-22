import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Mascotas from "../pages/Mascotas";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mascotas" element={<Mascotas />} />
    </Routes>
  );
}

export default AppRouter;
