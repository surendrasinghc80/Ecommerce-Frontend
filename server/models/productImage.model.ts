import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@/app/dbConnection";
import Product from "./product.model";

// 1. Define TypeScript interfaces
export interface ProductImageAttributes {
  id: number;
  productId: number;
  color: string;
  imageUrl: string;
}

export interface ProductImageCreationAttributes
  extends Optional<ProductImageAttributes, "id"> {}

// 2. Define the model class
class ProductImage
  extends Model<ProductImageAttributes, ProductImageCreationAttributes>
  implements ProductImageAttributes
{
  public id!: number;
  public productId!: number;
  public color!: string;
  public imageUrl!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// 3. Init model
ProductImage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products", // This should match the name of the model in the database
        key: "id",
      },
      onDelete: "CASCADE",
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ProductImage",
    tableName: "productimages",
    timestamps: true,
  }
);

// 4. Define associations
Product.hasMany(ProductImage, { foreignKey: "productId", as: "images" });
ProductImage.belongsTo(Product, { foreignKey: "productId" });

// 5. Export
export default ProductImage;
