import { DataTypes } from "sequelize";
import sequelize from "../../dbconnection.js";
import Usermodel from "../user/user.model.js";

const Notes = sequelize.define(
  'note',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
    },
  }
);

// Relationships are defined in user.model.js
export default Notes;
