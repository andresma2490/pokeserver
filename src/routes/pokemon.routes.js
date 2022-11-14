const { replaceDomain } = require("../utils/helpers.utils");
const { Router } = require("express");
const router = Router();

const pokemonService = require("../services/pokemon.service");

router.get("/pokemon", (req, res) => {
  const { limit, offset } = req.query;
  pokemonService
    .list(limit, offset)
    .then((response) => {
      const data = response.data;
      data.next = replaceDomain(data.next);
      return res.json(data);
    })
    .catch((error) => console.error(error));
});

router.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  pokemonService
    .get(id)
    .then((response) => {
      return res.json(response.data);
    })
    .catch((error) => console.error(error));
});

module.exports = router;
