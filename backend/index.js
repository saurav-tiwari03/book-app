import express, { request, response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import router from "./routes/booksRoute.js";
import cors from 'cors'

dotenv.config();
const PORT = 3001;

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
  .connect("mongodb+srv://saurav5625:saurav5625@book-store.kxvphhq.mongodb.net/books-collection?retryWrites=true&w=majority")
  .then(() => {
    console.log(`DB connection established`);
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
