import User from "../models/User";

class UserService {
  create(user) {
    return new User(user).save();
  }
}

export default new UserService();
