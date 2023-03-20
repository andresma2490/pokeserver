import { Router } from "express";
const router = Router();
import passport from "passport";
import { signToken } from "../utils/jwt.utils";

router.post("/login", async (req, res, next) => {
  passport.authenticate(
    "login",
    { session: false },
    async (err, user, info) => {
      try {
        if (err) return next(new Error("An error occurred."));
        if (!user) return res.status(401).json(info);

        const payload = {
          sub: user.id,
          role: user.role,
        };
        const token = signToken(payload);

        res.json({ token });
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
});

export default router;
