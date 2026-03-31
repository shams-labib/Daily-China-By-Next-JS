import Link from "next/link";
import React from "react";

const SubHeader = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/programs"} className="hover:text-red-500 border-t-2">
            Programs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
