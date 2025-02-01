import React from "react";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, UserIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end items-center">
      {/* Large Screen */}
      <nav className="hidden md:flex items-center space-x-2">
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
      </nav>

      {/* Small Screen */}
      <nav className="flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <SheetDescription asChild>
              <div className="flex flex-col space-y-4 items-center py-4">
                <Button variant={"outline"} className="w-full" asChild>
                  <Link href="/cart" className="flex items-center">
                    <ShoppingCart />
                    Cart
                  </Link>
                </Button>

                <Button asChild className="w-full">
                  <Link href="/sign-in" className="flex items-center">
                    <UserIcon />
                    Sign In
                  </Link>
                </Button>

                <ModeToggle variant={"outline"} />
              </div>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
