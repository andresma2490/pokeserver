import { UserEntity } from "../domain/user.entity";
import { UserRepositoryI } from "../domain/user.repository";

export class UserUseCases {
  constructor(private readonly userRepository: UserRepositoryI) {}

  public createUser(user: UserEntity) {
    return this.userRepository.createUser(user);
  }
}
