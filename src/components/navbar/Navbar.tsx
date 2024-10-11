import Link from "next/link";
import React from "react";
import { ModeToggle } from "../ModeToggle";

const Navbar = () => {
  return (
    <div className="shadow-md sticky top-0 py-4 dark:border-b">
      <div className="container mx-auto">
        <h2 className="uppercase font-bold text-5xl text-center">
          <span className="text-red-500">Kms</span>
          <span className="text-sky-600">pico</span>
        </h2>

        <div className="flex justify-between  items-center px-4 md:px-0 ">
          {/* logo  */}
          <div className="font-bold text-4xl  uppercase">
            <Link href={"/"}>
              <span className="text-blue-500">Dev</span>
              <span className=" text-red-500">ct</span>
            </Link>
          </div>
          {/* menu  */}
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
