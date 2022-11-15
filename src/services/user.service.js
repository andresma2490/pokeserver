const User = require("../models/User");

class UserService {
  create(user) {
    return User(user).save();
  }
}

module.exports = new UserService();
