const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const apiRouter = require("./routes/index.routes");
const cors = require("cors");
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

const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => console.log(`server on port ${PORT}`));
