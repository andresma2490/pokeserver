import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as AnonymousStrategy } from "passport-anonymous";
import { Strategy, ExtractJwt } from "passport-jwt";
import { UserRepository } from "../core/users/infrastructure/repositories/user.repository";

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "nickname",
      passwordField: "password",
    },
    async (nickname, password, done) => {
      try {
        const user = await UserRepository.findOne({ nickname });

        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const validate = await user.comparePassword(password, user.password);
        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }

        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    (payload, done) => {
      return done(null, payload);
    }
  )
);

passport.use(new AnonymousStrategy());
