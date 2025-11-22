require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mascotasRoutes = require("./routes/mascotas.routes");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rutas
app.use("/api/mascotas", mascotasRoutes);

app.get("/", (req, res) => {
  res.send("API HappyPaws Web II funcionando 🐾");
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
