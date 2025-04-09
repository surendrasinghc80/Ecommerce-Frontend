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

const registerSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterForm = z.infer<typeof registerSchema>;

function Register() {
  const { data: session, status } = useSession();

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
    <div className="bg-gray-100 flex justify-center flex-col items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-lg text-center p-6 rounded-t-sm shadow-md"
      >
        <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
        <p className="text-gray-600 mb-10">Please fill all forms to continue</p>

        <div>
          <Label htmlFor="name" className="text-right pb-2">
            Full Name
          </Label>
          <Input
            {...register("fullName")}
            id="name"
            placeholder="Surendra Singh"
            className="p-4 mb-2"
          />
          {errors.fullName && (
            <p className="text-red-500 text-left text-sm">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-right pb-2">
            Email
          </Label>
          <Input
            {...register("email")}
            id="email"
            placeholder="example@gmail.com"
            className="p-4 mb-2"
          />
          {errors.email && (
            <p className="text-red-500 text-left text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="password" className="text-right pb-2">
            Password
          </Label>
          <Input
            type="password"
            {...register("password")}
            id="password"
            className="p-4 mb-2"
          />
          {errors.password && (
            <p className="text-red-500 text-left text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="confirmPassword" className="text-right pb-2">
            Confirm Password
          </Label>
          <Input
            type="password"
            {...register("confirmPassword")}
            id="confirmPassword"
            className="p-4 mb-2"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-left text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="flex flex-row pb-2 items-center space-x-1 text-sm text-zinc-600">
          <span className="text-2xl font-bold text-zinc-600 pb-3">.</span>
          <p>By signing up, you agree to</p>
          <h1 className="text-black text-sm ml-1 font-semibold underline underline-offset-4 cursor-pointer">
            Terms & Conditions
          </h1>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-pink-600 hover:bg-red-800 cursor-pointer"
        >
          {isSubmitting ? "Creating..." : "Create Account"}
        </Button>

        <DropdownMenuSeparator className="mt-5 mb-5" />

        <Button className="w-full bg-blue-900 hover:bg-blue-700 cursor-pointer mb-5">
          <Image
            src="/images/facebook-logo.png"
            alt="Facebook"
            height={20}
            width={20}
          />
          Continue with Facebook
        </Button>

        {status === "authenticated" ? (
          <Button
            onClick={() => signOut()}
            className="w-full bg-red-400 hover:bg-red-500"
          >
            Sign Out
          </Button>
        ) : (
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full bg-blue-500 hover:bg-blue-600"
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

      <div className="bg-gray-200 w-lg text-center justify-center item-center p-4 rounded-b-sm shadow-md flex flex-row">
        <h1 className="text-zinc-600 text-sm">Already have an account?</h1>
        <Link href="/">
          <p className="text-black ml-1 text-sm font-semibold underline underline-offset-4 cursor-pointer">
            Log in
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
