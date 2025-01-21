import User from "../model/userModel.js";

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
    const idq = req.params.id;
    const user = await User.findByPk(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: `Error fetching user with id`,
    });
  }
};

export const createUser = (req, res) => {
  res.send("these are your books");
};

export const updateUser = (req, res) => {};

export const deleteUser = (req, res) => {};
