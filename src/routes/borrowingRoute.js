import { Router } from "express";

// initializing the router
const route = Router();

// a get request to get all books
route.get("/api/borrowing", (req, res) => {
  console.log("this is book route get");
  res.send("this is book get req");
});

// a get request to get a book with an ID
route.get("/api/borrowing/:id", (req, res) => {
  console.log("this is book route get");
  res.send("this is book get req");
});

// a post request to insert a book
route.post("/api/borrowing", (req, res) => {
  console.log("this is book route get");
  res.send("this is book post req");
});

// an update req to update a book with an ID
route.put("/api/borrowing/:id", (req, res) => {
  console.log("this is book update req");
  res.send("this is book update req");
});

// a delete request to delete a book
route.delete("/api/borrowing", (req, res) => {
  console.log("this is book route get");
  res.send("this is book delete req");
});

export default route;
