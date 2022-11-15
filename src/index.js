const express = require("express");
const morgan = require("morgan");
const app = express();
require("./database");

// middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v2", require("./routes/index.routes"));

const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => console.log(`server on port ${PORT}`));
