const express = require("express");

const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const pokemonRoutes = require("./pokemon.routes");

function apiRouter(app) {
  const router = express.Router();
  app.use("/api/v2", router);
  router.use("/", authRoutes);
  router.use("/", userRoutes);
  router.use("/", pokemonRoutes);
}

module.exports = apiRouter;
