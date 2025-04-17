import { NextRequest, NextResponse } from "next/server";
import sequelize from "@/app/dbConnection";
import Product from "@/server/models/product.model";
import ProductVariant from "@/server/models/productVariant.model";
import ProductImage from "@/server/models/productImage.model";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      description,
      gender,
      brandName,
      basePrice,
      variants,
      images,
    } = body;

    // Simple validation check
    if (!name || !description || !basePrice) {
      return NextResponse.json(
        { success: false, error: "Missing required product fields" },
        { status: 400 } // Bad Request
      );
    }

    const transaction = await sequelize.transaction();

    try {
      // 1. Create the product
      const product = await Product.create(
        { name, description, basePrice, gender, brandName },
        { transaction }
      );

      // 2. Add variants if provided
      if (Array.isArray(variants) && variants.length > 0) {
        for (const variant of variants) {
          const { color, size, stock, priceOverride } = variant;
          if (
            !color ||
            !size ||
            stock === undefined ||
            priceOverride === undefined
          ) {
            await transaction.rollback();
            return NextResponse.json(
              { success: false, error: "Invalid or incomplete variant data" },
              { status: 422 } // Unprocessable Entity
            );
          }

          await ProductVariant.create(
            {
              productId: product.id,
              ...variant,
            },
            { transaction }
          );
        }
      }

      // 3. Add images if provided
      if (Array.isArray(images) && images.length > 0) {
        for (const image of images) {
          const { color, imageUrl } = image;
          if (!color || !imageUrl) {
            await transaction.rollback();
            return NextResponse.json(
              { success: false, error: "Invalid or incomplete image data" },
              { status: 422 } // Unprocessable Entity
            );
          }

          await ProductImage.create(
            {
              productId: product.id,
              ...image,
            },
            { transaction }
          );
        }
      }

      await transaction.commit();
      const fullProduct = await Product.findByPk(product.id, {
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
      });

      return NextResponse.json(
        {
          success: true,
          message: "Product created successfully",
          product: fullProduct,
        },
        { status: 201 }
      );
    } catch (err) {
      await transaction.rollback();
      console.error("Transaction failed:", err);
      return NextResponse.json(
        { success: false, error: "Something went wrong during creation" },
        { status: 500 } // Internal Server Error
      );
    }
  } catch (err) {
    console.error("Invalid JSON or server error:", err);
    return NextResponse.json(
      { success: false, error: "Invalid JSON or request body" },
      { status: 400 } // Bad Request
    );
  }
}
