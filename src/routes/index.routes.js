const express = require("express");
const app = express();

const pokemonRoutes = require("./pokemon.routes");

app.use("/", pokemonRoutes);

module.exports = app;
