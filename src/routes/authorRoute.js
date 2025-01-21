import { Router } from "express";
import { getAuthorWithName } from "../controller/authorController.js";
// initializing the router
const route = Router();

// a get request to get all books
route.get("/api/v1/author/:id", getAuthorWithName);

export default route;
