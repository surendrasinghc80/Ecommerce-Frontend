import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

function Register() {
  return (
    <div className="bg-gray-100 flex justify-center flex-col items-center min-h-screen">
      <div className="bg-white w-lg text-center p-6 rounded-t-sm shadow-md  ">
        <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
        <p className="text-gray-600 mb-10">Please fill all forms to continue</p>
        <div>
          <Label htmlFor="name" className="text-right pb-2">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="Surendra Singh"
            className="col-span-3 p-4 mb-4 "
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-right pb-2">
            Email or Phone Number
          </Label>
          <Input
            id="email"
            placeholder="example@gmail.com"
            className="col-span-3 p-4 mb-4 "
          />
        </div>
        <div>
          <Label htmlFor="password" className="text-right pb-2">
            Password
          </Label>
          <Input
            id="password"
            placeholder="*********"
            className="col-span-3 p-4 mb-4 "
          />
        </div>
        <div>
          <Label htmlFor="confirm_password" className="text-right pb-2">
            Confirm Password
          </Label>
          <Input
            id="password"
            placeholder="*********"
            className="col-span-3 p-4 mb-4 "
          />
        </div>
        <div className="flex flex-row pb-2 items-center space-x-1 text-sm text-zinc-600">
          <span className="text-2xl font-bold text-zinc-600 pb-3">.</span>
          <p>By signing up, you agree to</p>
          <h1 className="text-black text-sm ml-1 text-semibold underline underline-offset-4 cursor-pointer ">
            Terms & Conditions
          </h1>
        </div>
        <Button className="w-full bg-pink-600 hover:bg-red-800 cursor-pointer">
          Create Account
        </Button>
        <DropdownMenuSeparator className="mt-5 mb-5" />
        <Button className="w-full bg-blue-900 cursor-pointer mb-5 ">
          <Image
            src={"/images/facebook-logo.png"}
            alt="Google logo"
            height={20}
            width={20}
            className="object-contain"
          />
          Continue with Facebook
        </Button>
        <Button className="w-full bg-blue-500 cursor-pointer ">
          <Image
            src={"/images/google-logo.png"}
            alt="Google logo"
            height={20}
            width={20}
            className="object-contain"
          />
          Continue with Google
        </Button>
      </div>
      <div className="bg-gray-200 w-lg text-center justify-center item-center p-4 rounded-b-sm shadow-md flex flex-row ">
        <h1 className="text-zinc-600 text-sm">Already have account?</h1>
        <Link href={"/"}>
          <p className="text-black ml-1 text-sm text-semibold underline underline-offset-4 cursor-pointer ">
            Log in
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
