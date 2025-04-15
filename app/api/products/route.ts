import { NextResponse } from "next/server";
import Product from "@/server/models/product.model";
import ProductVariant from "@/server/models/productVariant.model";
import ProductImage from "@/server/models/productImage.model";

export async function GET() {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: ProductVariant,
          as: "variants",
        },
        {
          model: ProductImage,
          as: "images",
        },
      ],
      order: [["createdAt", "DESC"]], // Optional: latest first
    });

    return NextResponse.json(
      {
        success: true,
        products,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching products:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch products",
      },
      { status: 500 }
    );
  }
}
