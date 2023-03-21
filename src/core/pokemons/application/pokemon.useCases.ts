import { PokemonRepositoryI } from "../domain/pokemon.repository";

export class PokemonUseCases {
  constructor(private readonly pokemonRepository: PokemonRepositoryI) {}

  list(limit: unknown = null, offset: unknown = null) {
    return this.pokemonRepository.list(limit, offset);
  }

  get(nameOrId: string) {
    return this.pokemonRepository.get(nameOrId)
  }
}
