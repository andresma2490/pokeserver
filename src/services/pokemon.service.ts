import axios from "axios";
const baseUrl = `${process.env.POKEAPI_URL}/${process.env.POKEAPI_VERSION}/pokemon`;

class PokemonService {
  list(limit: unknown = null, offset: unknown = null) {
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

export default new PokemonService();
