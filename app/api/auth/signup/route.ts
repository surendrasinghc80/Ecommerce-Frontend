import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
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

    if (!fullName || !email || !password || !confirmPassword) {
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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // not recommended for production
      },
    });

    await transporter.sendMail({
      from: `Bonik Team <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: "Welcome to Bonik",
      html: `<h1>Welcome to Bonik, ${fullName}!</h1><p>Thank you for signing up. We are excited to have you on board.</p>`,
      headers: {
        "X-Mailer": "Bonik Mailer",
      },
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
