import express from "express";

import authRoutes from "./core/auth/infrastructure/routes/auth.routes";
import userRoutes from "./core/users/infrastructure/routes/user.routes";
import pokemonRoutes from "./core/pokemons/infrastructure/routes/pokemon.routes";

function apiRouter(app) {
  const router = express.Router();
  app.use("/api/v2", router);
  router.use("/", authRoutes);
  router.use("/", userRoutes);
  router.use("/", pokemonRoutes);
}

export default apiRouter;
