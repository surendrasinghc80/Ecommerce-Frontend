import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@/app/dbConnection";

export interface ProductAttributes {
  id?: number;
  name: string;
  description: string;
  brandName: string;
  gender: string;
  basePrice: number;
}

export interface ProductCreationAttributes
  extends Optional<ProductAttributes, "id"> {}

class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public brandName!: string;
  public gender!: string;
  public basePrice!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
{
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    basePrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: false,
  }
);
export default Product;
