import { Router } from "express";
import passport from "passport";
import {
  createUser,
  loginUser,
  getUserWithID,
  getUser,
  deleteUser,
} from "../controller/userController.js";

// initializing the router
const route = Router();

// a get request to get all users
route.get("/api/v1/user", getUser);

// a get request to get a user with an ID with authentication
route.get("/api/v1/user/:id", passport.authenticate("local"), getUserWithID);

// a post request create a user
route.post("/api/v1/user", createUser);

// an update req to update a users with an ID with authentication
route.post(
  "/api/v1/loginuser",
  passport.authenticate("local", {
    successRedirect: "/api/v1/dashboard",
    failureRedirect: "/api/v1/logibuser", // redirects back to the endpoint
    failureFlash: true,
  }),
  loginUser
);

// a delete request to delete a user with ID with authentication
route.delete("/api/v1/user/:id", passport.authenticate("local"), deleteUser);

export default route;
