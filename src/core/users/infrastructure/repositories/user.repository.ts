import { UserEntity } from "../../domain/user.entity";
import { UserRepositoryI } from "../../domain/user.repository";
import UserModel from "../schemas/user.schema";

export class UserRepository implements UserRepositoryI {
  static findOne(filters) {
    return UserModel.findOne(filters);
  }

  createUser(user: UserEntity): Promise<any> {
    return UserModel.create(user);
  }
}
