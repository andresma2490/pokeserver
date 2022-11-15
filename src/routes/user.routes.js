const { Router } = require("express");
const router = Router();

const userService = require("../services/user.service");

router.post("/register", (req, res) => {
  userService
    .create(req.body)
    .then((user) => res.json(user))
    .catch((error) => {
      res.json(error.message);
      console.error(error);
    });
});

module.exports = router;
