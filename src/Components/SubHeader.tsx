import Link from "next/link";
import React from "react";

const NAV_ITEMS = [
  { label: "Programs", href: "/programs" },
  { label: "Universities", href: "/universities" },
  { label: "Online Classes", href: "/classes" },
  { label: "Community", href: "/community" },
  { label: "Guides", href: "/guides" },
  { label: "Services", href: "/services" },
  { label: "Support", href: "/support" },
  { label: "About Us", href: "/about" },
];

const SubHeader = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <ul className="flex flex-wrap justify-center items-center gap-x-8 py-3 px-4">
        {NAV_ITEMS.map((item) => (
          <li key={item.label} className="group relative">
            <Link
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-red-600"
            >
              {item.label}
              {/* Animated underline/border that doesn't move the text */}
              <span className="absolute -bottom-[13px] left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubHeader;
