const express = require("express");
const app = express();

const pokemonRoutes = require("./pokemon.routes");
const userRoutes = require("./user.routes");

app.use("/", pokemonRoutes);
app.use("/", userRoutes);

module.exports = app;
