import express from "express";

import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import pokemonRoutes from "./pokemon.routes";

function apiRouter(app) {
  const router = express.Router();
  app.use("/api/v2", router);
  router.use("/", authRoutes);
  router.use("/", userRoutes);
  router.use("/", pokemonRoutes);
}

export default apiRouter;
