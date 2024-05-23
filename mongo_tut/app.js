import express from "express";
import { connectToDb, getDb } from "./db.js";

const app = express();
const port = 3000;

// Middleware to parse urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Server @ ${port}`);
    });
    db = getDb();
  }
});

app.get("/books", (req, res) => {
  let books = [];
  db.collection("books")
    .find()
    .sort({ author: 1 })
    .forEach((book) => books.push(book))
    .then(() => {
      res.json(books);
    });
});

app.post("/books", async (req, res) => {
  var obj = {
    title: req.body.title,
    author: req.body.author,
    rating: req.body.rating,
    pages: req.body.pages,
  };

  await db.collection("books").insertOne(obj);
  res.status(201).json({ message: "Book added successfully" });
});
