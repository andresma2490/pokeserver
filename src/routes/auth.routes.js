const { Router } = require("express");
const router = Router();
const passport = require("passport");
const { signToken } = require("../utils/jwt.utils");

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
        const token = signToken(payload, process.env.JWT_SECRET);

        res.json({ token });
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
});

module.exports = router;
