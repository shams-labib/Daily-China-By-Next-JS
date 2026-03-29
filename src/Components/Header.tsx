import {
  BadgeDollarSign,
  Receipt,
  SquareArrowRightExit,
  UserPlus,
  Vegan,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-red-700">
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-2">
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
        <ul className=" flex justify-center items-center space-x-3">
          <li>
            <Link
              href={"/register"}
              className=" text-xl text-white flex items-center justify-center hover:bg-white px-3 py-2 rounded-2xl duration-300 hover:text-red-700  "
            >
              <span className="mx-2">
                <UserPlus size={20} />
              </span>{" "}
              Register
            </Link>
          </li>
          <li>
            <Link
              href={"/login"}
              className="text-xl text-white flex justify-center items-center hover:text-red-700 hover:bg-white px-3 py-2 rounded-2xl duration-300 "
            >
              <span className="mx-2">
                <SquareArrowRightExit size={20} />
              </span>
              Login
            </Link>
          </li>
          <li>
            <Link
              href={"/usd"}
              className="text-xl text-white flex justify-center items-center hover:text-red-700 hover:bg-white px-3 py-2 rounded-2xl duration-300 "
            >
              <span className="mx-2">
                <Receipt />
              </span>
              USD
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
