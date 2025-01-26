import express from "express";
import Author from "./routes/authorRoute.js";
import User from "./routes/userRoute.js";
import Books from "./routes/booksRoute.js";
import Borrowing from "./routes/borrowingRoute.js";
//import "../config/sequelize.js";
import passport from "passport";

// const { authenticate } = pkg;
const app = express();

// in-built middleware to accept post req.
app.use(express.json());

// Routes
app.use(Author);
app.use(Borrowing);
app.use(Books);
app.use(User);

// All routes not defined will be set to 404 page not found
app.use("*", (req, res) => {
  res.status(404).send("404 PAGE NOT FOUND");
});

// PASSPORT : for Authentication
app.use(passport.initialize());

export default app;
