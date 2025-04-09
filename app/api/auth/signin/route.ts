import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/server/models/User";

interface SigninRequestBody {
  email: string;
  password: string;
}

interface SigninSuccessResponse {
  message: string;
  user: {
    id: number;
    email: string;
  };
}

interface ErrorResponse {
  error: string;
}

export async function POST(
  req: Request
): Promise<NextResponse<SigninSuccessResponse | ErrorResponse>> {
  try {
    const { email, password }: SigninRequestBody = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "Signin successful",
        user: {
          id: user.id,
          email: user.email,
          //   password: user.password, // Avoid sending the password in the response
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during signin:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
