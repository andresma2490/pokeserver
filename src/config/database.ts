import mongoose from "mongoose";
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log(`Connected to the database on port ${db.connection.port}`);
  })
  .catch((err) => {
    console.log("Cannot connect to the database ", err);
    process.exit();
  });
