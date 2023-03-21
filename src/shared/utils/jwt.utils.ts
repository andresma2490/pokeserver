const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

export const signToken = (payload) => {
  return jwt.sign(payload, secret);
};

export const verifyToken = (token) => {
  return jwt.verify(token, secret);
};
