import User from "../model/userModel.js";
import { hashedPassword } from "../../config/bcrypt.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
    });
  }
};

export const getUserWithID = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: `Error fetching user with id`,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const passwordHashed = hashedPassword(password);
    //console.log("hashed password:" + passwordHashed);

    // Create a new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: `Error creating user`,
    });
  }
};

export const loginUser = (req, res) => {
  try {
    // Dashboard route
    res.status(200).json({ message: "Welcome to the dashboard" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in user" });
  }
};

export const deleteUser = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const userIndex = user.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({
        message: "User not found",
      });
      user.splice(userIndex, 1);
      res.json({
        message: "User deleted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error delete" });
  }
};
