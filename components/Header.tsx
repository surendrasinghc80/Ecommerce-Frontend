"use client";
import {
  ChevronDown,
  ShoppingBag,
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
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { signOut, signIn, useSession } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CartSidebar } from "@/components/Cart";
import { useCart } from "@/context/CartContext";

const registerSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function Header() {
  const { cart } = useCart();
  const { data: session, status } = useSession();
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Signup failed");
        return;
      }

      alert("Login successfully!");
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="flex w-full px-2 justify-center mx-auto bg-white shadow-lg sticky top-0 z-50">
      <div className="w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-4 gap-3 md:gap-0">
          {/* Mobile Menu Button and Logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div>

              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div>

              <Link
                href="/"
                className="text-2xl md:text-3xl font-bold italic text-pink-500"
              >
                Bonik
              </Link>
            </div>
            {/* Mobile Cart Button */}
            <div className="flex" >
              <div className="md:hidden" >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={session?.user?.image || "/images/user.png"}
                          alt={session?.user?.name || "User"}
                        />
                        <AvatarFallback>WG</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-[95vw] sm:max-w-[425px] px-4 sm:px-6 py-6 rounded-md">
                    <DialogHeader>
                      <DialogTitle className="text-center text-lg sm:text-xl">
                        Welcome To Bonik
                      </DialogTitle>
                      <DialogDescription className="text-center text-sm text-gray-500">
                        Log in with email & password
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col space-y-4">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full flex flex-col gap-4"
                      >
                        <div className="flex flex-col w-full">
                          <Label htmlFor="email" className="pb-1">
                            Email or Phone Number
                          </Label>
                          <Input
                            {...register("email")}
                            id="email"
                            placeholder="example@mail.com"
                            className="p-3"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-left text-sm mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col w-full">
                          <Label htmlFor="password" className="pb-1">
                            Password
                          </Label>
                          <Input
                            {...register("password")}
                            id="password"
                            placeholder="*********"
                            className="p-3"
                          />
                          {errors.password && (
                            <p className="text-red-500 text-left text-sm mt-1">
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-red-400 mt-2"
                        >
                          {isSubmitting ? "Logging..." : "Login"}
                        </Button>
                      </form>

                      <DropdownMenuSeparator className="my-5" />

                      <Button className="w-full bg-blue-900 flex items-center justify-center gap-2">
                        <Image
                          src="/images/facebook-logo.png"
                          alt="Facebook logo"
                          height={20}
                          width={20}
                          className="object-contain"
                        />
                        Continue with Facebook
                      </Button>

                      {status === "authenticated" ? (
                        <Button
                          onClick={() => signOut()}
                          className="w-full bg-red-400 hover:bg-red-500"
                        >
                          Sign Out {session?.user?.name}!
                        </Button>
                      ) : (
                        <Button
                          onClick={() => signIn("google")}
                          className="w-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-2"
                        >
                          <Image
                            src="/images/google-logo.png"
                            alt="Google logo"
                            height={20}
                            width={20}
                            className="object-contain"
                          />
                          Continue with Google
                        </Button>
                      )}
                    </div>

                    <DialogFooter className="mt-6">
                      <div className="flex flex-col w-full items-center text-center gap-3">
                        {status !== "authenticated" && (
                          <div className="flex flex-wrap justify-center gap-1 text-sm">
                            <span className="text-zinc-600">Don’t have an account?</span>
                            <Link href="/user" className="text-black underline">
                              Sign Up
                            </Link>
                          </div>
                        )}
                        <div className="flex flex-wrap justify-center gap-1 text-sm">
                          <span className="text-zinc-600">Forgot your password?</span>
                          <Link href="/user" className="text-black underline">
                            Reset it
                          </Link>
                        </div>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <button
                className="md:hidden relative p-2"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-6 w-6" />
                {isMounted && cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile when menu is open */}
          {!isMobileMenuOpen && (
            <div className="flex items-center w-full md:w-auto md:max-w-xl md:mx-4">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-full pr-20 border pl-7 text-gray-600 rounded-l-md text-sm md:text-base"
                />
                <span className="absolute top-2.5 left-1 flex items-center justify-center">
                  <Search className="ml-1 text-gray-600 h-4 w-4" />
                </span>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Select>
                    <SelectTrigger className="w-[120px] md:w-[200px] cursor-pointer">
                      <SelectValue placeholder="Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
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
          )}

          {/* User Icons - Hidden on mobile when menu is open */}
          {!isMobileMenuOpen && (
            <div className="hidden md:flex items-center space-x-4">
              {status === "loading" ? (
                <p className="font-normal text-sm md:text-md text-gray-500 animate-pulse">
                  Loading...
                </p>
              ) : status === "authenticated" ? (
                <p className="font-normal text-sm md:text-md">
                  Welcome {session?.user?.name}
                </p>
              ) : (
                <p className="font-normal text-sm md:text-md">Welcome Guest</p>
              )}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={session?.user?.image || "/images/user.png"}
                        alt={session?.user?.name || "User"}
                      />
                      <AvatarFallback>WG</AvatarFallback>
                    </Avatar>
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
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="bg-white w-sm text-center rounded-t-sm"
                    >
                      <div className="flex flex-col w-full mr-2">
                        <Label htmlFor="email" className="text-right pb-2">
                          Email or Phone Number
                        </Label>
                        <Input
                          {...register("email")}
                          id="email"
                          placeholder="example@mail.com"
                          className="col-span-3 p-4 mb-1"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-left m-1 ml-0 mt-0 text-sm">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <Label
                          htmlFor="password"
                          className="text-right pb-2 mt-3"
                        >
                          Password
                        </Label>
                        <Input
                          {...register("password")}
                          id="password"
                          placeholder="*********"
                          className="col-span-3 p-4 mb-1"
                        />
                        {errors.password && (
                          <p className="text-red-500 text-left m-4 ml-0 mt-0 text-sm">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-red-400 mt-4 cursor-pointer"
                        >
                          {isSubmitting ? "Logging..." : "Login"}
                        </Button>
                      </div>
                    </form>
                    <DropdownMenuSeparator className="mt-5 mb-5" />
                    <Button className="w-full bg-blue-900 cursor-pointer mb-5">
                      <Image
                        src={"/images/facebook-logo.png"}
                        alt="Google logo"
                        height={20}
                        width={20}
                        className="object-contain"
                      />
                      Continue with Facebook
                    </Button>

                    {status === "authenticated" ? (
                      <Button
                        onClick={() => signOut()}
                        className="w-full bg-red-400 cursor-pointer hover:bg-red-500"
                      >
                        Sign Out {session?.user?.name}!
                      </Button>
                    ) : (
                      <Button
                        onClick={() => signIn("google")}
                        className="w-full bg-blue-500 cursor-pointer hover:bg-blue-600"
                      >
                        <Image
                          src={"/images/google-logo.png"}
                          alt="Google logo"
                          height={20}
                          width={20}
                          className="object-contain"
                        />
                        Continue with Google
                      </Button>
                    )}
                  </div>
                  <DialogFooter>
                    <div className="flex flex-col w-full justify-center items-center">
                      {status === "authenticated" ? null : (
                        <div className="flex flex-row justify-center p-5 items-center w-full text-center">
                          <h1 className="text-zinc-600 text-sm">
                            Don&apos;t have an account?
                          </h1>
                          <Link href="/user">
                            <p className="text-black ml-1 text-sm underline underline-offset-4 cursor-pointer">
                              Sign Up
                            </p>
                          </Link>
                        </div>
                      )}
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

              <Button
                onClick={() => setIsCartOpen(true)}
                variant="ghost"
                size="icon"
                className="relative"
              >
                <ShoppingBag className="h-6 w-6 md:h-8 md:w-8" />
                {isMounted && cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
            </div>
          )}
        </div>

        {/* Navigation Menu */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} md:flex justify-between items-center mt-0 md:mt-4 mb-4 mx-auto`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center md:mr-6 w-full md:w-56 cursor-pointer bg-gray-200 text-gray-700 justify-start"
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
                    <DropdownMenuItem className="cursor-pointer">
                      Kids
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem className="cursor-pointer">
                <Computer className="h-4 w-4 mr-2 text-gray-700" />
                <p>Electronic</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Bike className="h-4 w-4 mr-2 text-gray-700" />
                <p>Bike</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <House className="h-4 w-4 mr-2 text-gray-700" />
                <p>Home and Garden</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Gift className="h-4 w-4 mr-2 text-gray-700" />
                <p>Gift</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Music className="h-4 w-4 mr-2 text-gray-700" />
                <p>Music</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Salad className="h-4 w-4 mr-2 text-gray-700" />
                <p>Health and Beauty</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <PawPrint className="h-4 w-4 mr-2 text-gray-700" />
                <p>Pet</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Baby className="h-4 w-4 mr-2 text-gray-700" />
                <p>Baby</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-700 mt-2 md:mt-0">
            <div
              className="relative w-full md:w-20"
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <Link
                href="/"
                className="hover:text-pink-500 flex items-center py-2 md:py-0"
              >
                Home
                <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
              {homeDropdownOpen && (
                <div className="static md:absolute top-5 mt-1 -left-1 w-full md:w-48 bg-white shadow-lg rounded-md py-1 z-10 border">
                  <Link
                    href="/home/fashion"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-pink-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Fashion Home
                  </Link>
                  <Link
                    href="/home/electronics"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-pink-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Electronics Home
                  </Link>
                  <Link
                    href="/home/grocery"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-pink-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Grocery Home
                  </Link>
                  <Link
                    href="/home/furniture"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-pink-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Furniture Home
                  </Link>
                  <Link
                    href="/home/health-beauty"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-pink-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Health & Beauty Home
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/pages"
              className="hover:text-pink-500 py-2 md:py-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pages
            </Link>
            <Link
              href="/user-account"
              className="hover:text-pink-500 py-2 md:py-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              User Account
            </Link>
            <Link
              href="/vendor-account"
              className="hover:text-pink-500 py-2 md:py-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vendor Account
            </Link>
            <Link
              href="/track-orders"
              className="hover:text-pink-500 py-2 md:py-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Track My Orders
            </Link>
            <Link
              href="/demos"
              className="hover:text-pink-500 py-2 md:py-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Back to Demos
            </Link>
          </div>
        </div>
      </div>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}