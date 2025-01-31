import React from "react";
import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-lg mx-auto border-t">
      <div className="p-4 flex justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
