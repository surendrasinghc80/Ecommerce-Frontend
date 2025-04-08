import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../app/dbConnection.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(),
      // allowNull defaults to true
    },
  },
  {
    tableName: "users",
    timestamps: false,
    // Other model options go here
  }
);

export default User;
