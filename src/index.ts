import express from "express";
import morgan from "morgan";
import passport from "passport";
import apiRouter from "./index.routes";
import cors from "cors";
const app = express();

// config
require("./config/passport");
require("./config/database");

// middlewares
app.use(cors());
app.use(passport.initialize());
app.use(morgan("dev"));
app.use(express.json());

apiRouter(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server on port ${PORT}`));
