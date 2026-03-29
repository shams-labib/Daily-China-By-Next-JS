import Link from "next/link";
import React from "react";

const NavLink = ({ href, children }) => {
  return (
    <div>
      <Link href={href} className="border-b-2">
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
