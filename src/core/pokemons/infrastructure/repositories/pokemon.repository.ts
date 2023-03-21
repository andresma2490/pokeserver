import axios from "axios";
import { PokemonRepositoryI } from "../../domain/pokemon.repository";
const baseUrl = `${process.env.POKEAPI_URL}/${process.env.POKEAPI_VERSION}/pokemon`;

export class PokemonRepository implements PokemonRepositoryI {
  list(limit: unknown = null, offset: unknown = null): Promise<any> {
    return axios.get(
      `${baseUrl}/?${limit ? "limit=" + limit : ""}${
        offset ? "&offset=" + offset : ""
      }`
    );
  }

  get(nameOrId: string): Promise<any> {
    return axios.get(`${baseUrl}/${nameOrId}`);
  }
}
