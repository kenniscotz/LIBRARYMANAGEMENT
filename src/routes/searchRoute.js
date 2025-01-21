import { Router } from "express";

// initializing the router
const route = Router();

// a get request to get an author
route.get("/api/books", (req, res) => {
  console.log("this is book route get");
  res.send("this is book get req");
});

// a get request to search for a book with an ID
route.get("/api/books/:id", (req, res) => {
  console.log("this is book route get");
  res.send("this is book get req");
});

export default route;
