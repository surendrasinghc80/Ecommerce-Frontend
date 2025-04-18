import { NextResponse, NextRequest } from "next/server";
import { getProductById } from "@/app/lib/GetProductById";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const id = params.id;

  console.log("Fetching product with ID:", id);

  try {
    const product = await getProductById(id);

    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error("Error fetching product:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
