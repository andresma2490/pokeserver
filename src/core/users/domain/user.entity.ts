export type Team = "red" | "blue" | "yellow"

export interface UserEntity {
  name: string;
  nickname: string;
  password: string;
  team: Team;
  last_connection: Date;
}
