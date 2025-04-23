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
      html: `
      <div style="font-family: 'Helvetica Neue', sans-serif; padding: 20px; background-color: #f9f9f9;">
        <h1 style="color: #ff6600;">Hey ${fullName}, welcome to Bonik!</h1>
          <p>We're excited to have you shopping with us. Use your exclusive welcome coupon below:</p>
          <h2 style="background-color: #fff3cd; padding: 10px; border-radius: 5px; display: inline-block;">
          WELCOME10
          </h2>
          <p>Click the button below to start shopping:</p>
            <a href="http://localhost:3000" style="background-color: #ff6600; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Shop Now
            </a>
          <p style="margin-top: 30px;">Happy shopping!<br>— The Bonik Team</p>
      </div>
        `,
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
