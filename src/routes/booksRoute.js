import { Router } from "express";
import {
  createBook,
  getBookWithID,
  updateBook,
  getBook,
  deleteBook,
} from "../controller/bookController.js";

// initializing the router
const route = Router();

// get book
route.get("/api/v1/books", getBook);

// get book with ID
route.get("/api/v1/books", getBookWithID);

// post book
route.post("/api/v1/books", createBook);

// update book with ID
route.put("/api/v1/books/:id", updateBook);

// delete book with ID
route.delete("/api/v1/books/:id", deleteBook);

export default route;
