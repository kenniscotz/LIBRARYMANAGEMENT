import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const attribute = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  authorFirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authorLastName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

const defineModel = sequelize.define("authorModel", attribute);

export default defineModel;
