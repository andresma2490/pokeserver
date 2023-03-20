import { replaceDomain } from "../utils/helpers.utils";
import { Router } from "express";
const router = Router();
import passport from "passport";

import pokemonService from "../services/pokemon.service";

router.get(
  "/",
  passport.authenticate(["jwt", "anonymous"], { session: false }),
  (req, res) => {
    pokemonService
      .list()
      .then((response) => {
        const data = response.data;
        data.next = replaceDomain(data.next);
        return res.json(data);
      })
      .catch((error) => console.error(error));
  }
);

router.get(
  "/pokemon",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { limit, offset } = req.query;
    pokemonService
      .list(limit, offset)
      .then((response) => {
        const data = response.data;
        data.next = replaceDomain(data.next);
        return res.json(data);
      })
      .catch((error) => console.error(error));
  }
);

router.get(
  "/pokemon/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { id } = req.params;
    pokemonService
      .get(id)
      .then((response) => {
        return res.json(response.data);
      })
      .catch((error) => console.error(error));
  }
);

export default router;
