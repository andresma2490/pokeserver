const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

exports.signToken = (payload) => {
  return jwt.sign(payload, secret);
};

exports.verifyToken = (token) => {
  return jwt.verify(token, secret);
};
