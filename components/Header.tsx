"use client";
import {
  ChevronDown,
  User,
  ShoppingCart,
  Grid,
  Search,
  Computer,
  Shirt,
  Bike,
  Gift,
  Music,
  PawPrint,
  Salad,
  Baby,
  House,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuSubContent,
  DropdownMenuSub,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Eye } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  return (
    <header className="flex w-full justify-center bg-white shadow-lg">
      <div className="w-full max-w-screen-xl px-6 pl-0 pr-0 ">
        {/* Top Section */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold  italic text-pink-500">
            Bonik
          </Link>

          {/* Search Bar */}
          <div className="flex items-center w-full max-w-xl mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search and hit enter..."
                className="w-full pr-20 border pl-7 text-gray-600 rounded-l-md"
              />
              <span className="absolute top-2.5 left-1 flex items-center justify-center">
                <Search className="ml-1 text-gray-600 h-4 w-4" />
              </span>
              <div className="absolute inset-y-0 right-0 flex items-center">
                {/* <div className="h-full border-l flex items-center px-3 bg-white rounded-r-md">
                  <span className="text-gray-500 text-sm mr-1">
                    All Categories
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div> */}
                <Select>
                  <SelectTrigger className="w-[200px] cursor-pointer ">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Categories</SelectLabel> */}
                      <SelectItem className="cursor-pointer" value="fashion">
                        Fashion
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="bike">
                        Bike
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="gift">
                        Gifts
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="music">
                        Music
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="pet">
                        Pet
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* User Icons */}
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-10 w-10" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Welcome To Bonik
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Log in with email & password
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col">
                  <div className="flex flex-col ">
                    <Label htmlFor="email" className="text-right pb-2">
                      Email or Phone Number
                    </Label>
                    <Input
                      id="email"
                      placeholder="example@mail.com"
                      className="col-span-3 p-4 mb-4 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="password" className="text-right pb-2">
                      Password
                    </Label>
                    <Input
                      id="password"
                      placeholder="*********"
                      className="col-span-3 p-4 mb-4"
                    />
                  </div>
                  <div>
                    <Button className="w-full bg-red-400 cursor-pointer ">
                      Login
                    </Button>
                  </div>
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
                <DialogFooter>
                  <div className="flex flex-col w-full justify-center items-center">
                    <div className="flex flex-row justify-center  p-5 items-center w-full text-center">
                      <h1 className="text-zinc-600 text-sm">
                        Don&apos;t have an account?
                      </h1>
                      <Link href="/user">
                        <p className="text-black ml-1 text-sm underline underline-offset-4 cursor-pointer">
                          Sign Up
                        </p>
                      </Link>
                    </div>
                    <div className="flex flex-row justify-center p-5 items-center w-full text-center">
                      <h1 className="text-zinc-600 text-sm">
                        Forgot your password?
                      </h1>
                      <Link href="/user">
                        <p className="text-black ml-1 text-sm underline underline-offset-4 cursor-pointer">
                          Reset it
                        </p>
                      </Link>
                    </div>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-10 w-10" />
              {/* Cart Badge (Optional) */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex justify-between items-center mt-4 mb-4 mx-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center mr-6 w-56 cursor-pointer bg-gray-200 text-gray-700"
              >
                <Grid className="h-5 w-5 mr-2" />
                <span className="mr-6 ml-6">Categories</span>
                <ChevronDown className="h-10 w-10 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  <Shirt className="h-4 w-4 text-gray-700 cursor-pointer mr-2 ml-1" />
                  <p>Fashion</p>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="cursor-pointer">
                      Men
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Women
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem className="cursor-pointer">
                <Computer className="h-10 w-10 ml-1 text-gray-700 " />
                <p>Electronic</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Bike className="h-10 w-10 ml-1 text-gray-700 " />
                <p>Bike</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <House className="h-10 w-10 ml-1 text-gray-700" />
                <p>Home and Garden</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Gift className="h-10 w-10 ml-1 text-gray-700" />
                <p>Gift</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Music className="h-10 w-10 ml-1 text-gray-700" />
                <p>Music</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Salad className="h-10 w-10 ml-1 text-gray-700" />
                <p>Health and Beauty</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <PawPrint className="h-10 w-10 ml-1 text-gray-700" />
                <p>Pet</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Baby className="h-10 w-10 ml-1 text-gray-700" />
                <p>Baby</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex space-x-6 text-gray-700">
            <div
              className="relative w-20"
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <Link href="/" className="hover:text-pink-500 flex items-center">
                Home
                <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
              {homeDropdownOpen && (
                <div className="absolute top-5 mt-1 -left-1 w-48 bg-white shadow-lg rounded-md py-1 z-10 border">
                  <Link
                    href="/home/fashion"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-pink-500"
                  >
                    Fashion Home
                  </Link>
                  <Link
                    href="/home/electronics"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-pink-500"
                  >
                    Electronics Home
                  </Link>
                  <Link
                    href="/home/grocery"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-pink-500"
                  >
                    Grocery Home
                  </Link>
                  <Link
                    href="/home/furniture"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-pink-500"
                  >
                    Furniture Home
                  </Link>
                  <Link
                    href="/home/health-beauty"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-pink-500"
                  >
                    Health & Beauty Home
                  </Link>
                </div>
              )}
            </div>
            <Link href="/pages" className="hover:text-pink-500">
              Pages
            </Link>
            <Link href="/user-account" className="hover:text-pink-500">
              User Account
            </Link>
            <Link href="/vendor-account" className="hover:text-pink-500">
              Vendor Account
            </Link>
            <Link href="/track-orders" className="hover:text-pink-500">
              Track My Orders
            </Link>
            <Link href="/demos" className="hover:text-pink-500">
              Back to Demos
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
