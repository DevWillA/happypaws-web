const express = require("express");
const router = express.Router();
const mascotas = require("../data/mascotas");

// GET /api/mascotas - lista todas las mascotas
router.get("/", (req, res) => {
  res.json(mascotas);
});

module.exports = router;
