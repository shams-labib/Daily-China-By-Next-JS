import { UserPlus, Vegan } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-red-700">
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4">
        {/* Home */}
        <div>
          <h1 className="text-2xl font-bold flex justify-center items-center">
            {" "}
            <span className="mx-2 p-1 bg-white rounded-full text-red-700">
              <Vegan />
            </span>{" "}
            Daily China
          </h1>
        </div>
        {/* Links */}
        <ul className="space-x-8">
          <Link
            href={"/register"}
            className="font-bold text-xl text-white flex "
          >
            <span className="">
              <UserPlus />
            </span>{" "}
            Register
          </Link>
          <Link href={"/login"} className="font-bold text-xl text-white">
            Login
          </Link>
          <Link href={"/usd"} className="font-bold text-xl text-white">
            USD
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
