import Product from "./product.model";
import ProductVariant from "./productVariant.model";
import ProductImage from "./productImage.model";

// Call this function after importing models to set up associations
const associateModels = () => {
  Product.hasMany(ProductVariant, { foreignKey: "productId", as: "variants" });
  ProductVariant.belongsTo(Product, { foreignKey: "productId" });

  Product.hasMany(ProductImage, { foreignKey: "productId", as: "images" });
  ProductImage.belongsTo(Product, { foreignKey: "productId" });
};

export { Product, ProductVariant, ProductImage, associateModels };
