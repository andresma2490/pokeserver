import passport from "passport";
import { Router } from "express";
import { replaceDomain } from "../../../../shared/utils/helpers.utils";
import { PokemonRepository } from "../repositories/pokemon.repository";
import { PokemonUseCases } from "../../application/pokemon.useCases";
const router = Router();
const pokemonRepository = new PokemonRepository();
const pokemonUseCases = new PokemonUseCases(pokemonRepository);

router.get(
  "/",
  passport.authenticate(["jwt", "anonymous"], { session: false }),
  (req, res) => {
    pokemonUseCases
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
    pokemonUseCases
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
    pokemonUseCases
      .get(id)
      .then((response) => {
        return res.json(response.data);
      })
      .catch((error) => console.error(error));
  }
);

export default router;
