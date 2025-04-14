import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@/app/dbConnection";
import Product from "./product.model";

export interface ProductVariantAttributes {
  id?: number;
  productId: number;
  color: string;
  size: string;
  stock: number;
  priceOverride?: number | null;
}

export interface ProductVariantCreationAttributes
  extends Optional<ProductVariantAttributes, "id"> {}

class ProductVariant
  extends Model<ProductVariantAttributes, ProductVariantCreationAttributes>
  implements ProductVariantAttributes
{
  public id!: number;
  public productId!: number;
  public color!: string;
  public size!: string;
  public stock!: number;
  public priceOverride?: number | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ProductVariant.init(
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
        model: "products",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    priceOverride: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "ProductVariant",
    tableName: "product_variants",
    timestamps: true,
  }
);

Product.hasMany(ProductVariant, { foreignKey: "productId", as: "variants" });
ProductVariant.belongsTo(Product, { foreignKey: "productId" });

export default ProductVariant;
