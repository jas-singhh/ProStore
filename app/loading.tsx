import React from "react";
import Image from "next/image";
import { ShoppingBagIcon } from "lucide-react";

const Loading = () => {
  return (
    <div
      className="w-screen h-screen 
    flex flex-col justify-center items-center space-y-4"
    >
      <Image
        src={"/images/loader.gif"}
        width={100}
        height={100}
        alt="Loading..."
      />
      <p
        className="text-lg tracking-wider text-slate-800 flex 
      items-center gap-2"
      >
        <ShoppingBagIcon /> LOADING...
      </p>
    </div>
  );
};

export default Loading;
