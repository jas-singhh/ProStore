import React from "react";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="w-full max-w-screen-lg mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div className="flex items-center flex-start">
          <Link href="/">
            <h1 className="text-xl font-bold flex items-center gap-1 text-blue-900">
              <ShoppingBagIcon />{" "}
              <span className="hidden md:inline">{APP_NAME}</span>
            </h1>
          </Link>
        </div>

        {/* Buttons */}
        <Menu />
      </div>
    </header>
  );
};

export default Header;
