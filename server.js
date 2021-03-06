import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = 3001;
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

console.log("Loading restaurants server... đ§");

mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected! đ"))
  .catch((error) => {
    console.log("Database is not connected! âšī¸");
    console.log(error);
  });

app.listen(port, () => {
  console.log(`The server đ is listening on port ${port}`);
});
