import { DataTypes } from "sequelize";
import sequelize from "../../dbconnection.js";
import Notes from "../notes/notes.model.js";

const Usermodel = sequelize.define(
  'user',
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
    },
    password: {
      type: DataTypes.STRING(100),
    },
  }
);

// Define relationships
Usermodel.hasMany(Notes,{
  // foreignKey: 'creatorId', // تغيير اسم المفتاح الأجنبي by default userId

  onDelete:"CASCADE",
  onUpdate:"CASCADE",

});
Notes.belongsTo(Usermodel,{
  // foreignKey: 'creatorId',
});

export default Usermodel;
