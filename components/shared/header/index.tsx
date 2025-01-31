import React from "react";
import { ShoppingBagIcon, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="w-full max-w-screen-lg mx-auto flex justify-between items-center p-3">
        {/* Logo */}
        <div className="flex items-center flex-start">
          <Link href="/">
            <h1 className="text-xl font-bold flex items-center gap-1 text-blue-900">
              <ShoppingBagIcon />{" "}
              <span className="hidden lg:inline">{APP_NAME}</span>
            </h1>
          </Link>
        </div>

        {/* Buttons */}
        <div className="space-x-2 flex items-center">
          <ModeToggle />

          <Button variant={"outline"} asChild>
            <Link href="/cart" className="flex items-center">
              <ShoppingCart />
              Cart
            </Link>
          </Button>

          <Button asChild>
            <Link href="/sign-in" className="flex items-center">
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
