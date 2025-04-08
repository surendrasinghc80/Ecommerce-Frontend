import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../app/dbConnection";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string | null;
  createdAt: Date;
  updatedAt: Date;
}

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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    // Other model options go here
  }
);

export default User;
