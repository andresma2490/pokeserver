import { Router } from "express";
import { UserUseCases } from "../../application/user.useCases";
import { UserRepository } from "../repositories/user.repository";
const router = Router();
const userRepository = new UserRepository();
const userUseCases = new UserUseCases(userRepository);

router.post("/register", (req, res) => {
  userUseCases
    .createUser(req.body)
    .then((user) => res.json(user))
    .catch((error) => {
      res.json(error.message);
      console.error(error);
    });
});

export default router;
