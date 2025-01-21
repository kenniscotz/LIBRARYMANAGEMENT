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
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

const defineModel = sequelize.define("userModel", attribute);

export default defineModel;
