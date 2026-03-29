import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4">
        {/* Home */}
        <div>
          <h1>Daily China</h1>
        </div>
        {/* Links */}
        <ul>
          <Link href={"/register"} className="font-bold text-xl text-white">
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
