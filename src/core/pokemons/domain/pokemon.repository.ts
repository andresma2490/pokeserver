export interface PokemonRepositoryI {
  list(limit: unknown, offset: unknown): Promise<any>;
  get(nameOrId: string): Promise<any>;
}
