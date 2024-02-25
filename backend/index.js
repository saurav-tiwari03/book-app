import express, { request, response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import router from "./routes/booksRoute.js";
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT || 3000;
const dbUrl = process.env.dbUrl;

const app = express();
//middleware
app.use(express.json());
//CORS policy
app.use(cors());
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN stack Book-store");
});

app.use("/books", router);

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log(`DB connection established`);
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
