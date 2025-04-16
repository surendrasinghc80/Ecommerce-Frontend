import Product from "@/server/models/product.model";
import ProductVariant from "@/server/models/productVariant.model";
import ProductImage from "@/server/models/productImage.model";

export async function getProductById(id: string) {
  console.log("Fetching product with ID:", id);
  const product = await Product.findOne({
    where: { id },
    include: [
      { model: ProductImage, as: "images" },
      { model: ProductVariant, as: "variants" },
    ],
  });

  return product?.toJSON() || null;
}
