import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const attribute = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  published_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("Available", "Borrowed"),
    allowNull: true,
  },
  genre: {
    type: DataTypes.ENUM("Fiction", "Non-fiction", "Mystery", "Thriller"),
    allowNull: true,
  },
  deletedAt: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
};

const defineModel = sequelize.define("bookModel", attribute);

export default defineModel;
