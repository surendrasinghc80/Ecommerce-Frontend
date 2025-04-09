import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/server/models/User";

interface SignupRequestBody {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupSuccessResponse {
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
): Promise<NextResponse<SignupSuccessResponse | ErrorResponse>> {
  try {
    const { fullName, email, password, confirmPassword }: SignupRequestBody =
      await req.json();

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: user.id,
          email: user.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
