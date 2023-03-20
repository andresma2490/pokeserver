import { Router } from "express";
const router = Router();

import userService from "../services/user.service";

router.post("/register", (req, res) => {
  userService
    .create(req.body)
    .then((user) => res.json(user))
    .catch((error) => {
      res.json(error.message);
      console.error(error);
    });
});

export default router;
