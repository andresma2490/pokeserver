const axios = require("axios");
const baseUrl = `${process.env.POKEAPI_URL}/${process.env.POKEAPI_VERSION}/pokemon`;

class PokemonService {
  list(limit, offset) {
    return axios.get(
      `${baseUrl}/?${limit ? "limit=" + limit : ""}${
        offset ? "&offset=" + offset : ""
      }`
    );
  }

  get(nameOrId) {
    return axios.get(`${baseUrl}/${nameOrId}`);
  }
}

module.exports = new PokemonService();
