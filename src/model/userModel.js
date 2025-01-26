import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const attribute = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 16],
        msg: "Password must be between 8 to 16 characters",
      },
      notEmpty: {
        msg: "Password is required",
      },
    },
  },
};

const defineModel = sequelize.define("userModel", attribute);

export default defineModel;
