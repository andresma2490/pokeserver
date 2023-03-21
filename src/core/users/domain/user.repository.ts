import { UserEntity } from "./user.entity";

export interface UserRepositoryI {
  createUser(user: UserEntity): Promise<UserEntity | null>;
}
