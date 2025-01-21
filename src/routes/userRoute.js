import { Router } from "express";
import {
  createUser,
  getUserWithID,
  getUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

// initializing the router
const route = Router();

// a get request to get all books
route.get("/api/v1/user", getUser);

// a get request to get a book with an ID
route.get("/api/v1/user/:id", getUserWithID);

// a post request to insert a book
route.post("/api/v1/user", createUser);

// an update req to update a book with an ID
route.put("/api/v1/user/:id", updateUser);

// a delete request to delete a book with ID
route.delete("/api/v1/user/:id", deleteUser);

export default route;
