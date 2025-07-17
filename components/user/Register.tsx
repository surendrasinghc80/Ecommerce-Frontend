"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const registerSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterForm = z.infer<typeof registerSchema>;

function Register() {
  const { data: session, status } = useSession();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Signup failed");
        return;
      }

      alert("Account created successfully!");
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white text-center p-6 rounded-t-md shadow-md w-full"
        >
          <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
          <p className="text-gray-600 mb-8 text-sm">
            Please fill all fields to continue
          </p>

          {/* Full Name */}
          <div className="mb-4 text-left">
            <Label htmlFor="name" className="pb-2 block">
              Full Name
            </Label>
            <Input
              {...register("fullName")}
              id="name"
              placeholder="Surendra Singh"
              className="p-3"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4 text-left">
            <Label htmlFor="email" className="pb-2 block">
              Email
            </Label>
            <Input
              {...register("email")}
              id="email"
              placeholder="example@gmail.com"
              className="p-3"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 text-left">
            <Label htmlFor="password" className="pb-2 block">
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                id="password"
                placeholder="********"
                className="p-3 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4 text-left">
            <Label htmlFor="confirmPassword" className="pb-2 block">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword")}
                id="confirmPassword"
                placeholder="********"
                className="p-3 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms */}
          <div className="text-sm text-zinc-600 mt-4 mb-4 text-left flex flex-wrap items-center gap-1">
            <span className="text-2xl font-bold text-zinc-600">.</span>
            <p>By signing up, you agree to</p>
            <span className="text-black font-semibold underline underline-offset-4 cursor-pointer">
              Terms & Conditions
            </span>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pink-600 hover:bg-red-800"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </Button>

          <DropdownMenuSeparator className="mt-6 mb-6" />

          {/* Facebook */}
          <Button className="w-full bg-blue-900 hover:bg-blue-700 gap-2 mb-4">
            <Image
              src="/images/facebook-logo.png"
              alt="Facebook"
              height={20}
              width={20}
            />
            Continue with Facebook
          </Button>

          {/* Google or Sign Out */}
          {status === "authenticated" ? (
            <Button
              onClick={() => signOut()}
              className="w-full bg-red-400 hover:bg-red-500"
            >
              Sign Out {session?.user?.name}!
            </Button>
          ) : (
            <Button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full bg-blue-500 hover:bg-blue-600 gap-2"
            >
              <Image
                src="/images/google-logo.png"
                alt="Google logo"
                height={20}
                width={20}
              />
              Continue with Google
            </Button>
          )}
        </form>

        {/* Login link */}
        <div className="bg-gray-200 text-center p-4 rounded-b-md shadow-md w-full mt-1">
          <p className="text-sm text-zinc-600">
            Already have an account?{" "}
            <Link href="/" className="text-black font-semibold underline underline-offset-4">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
