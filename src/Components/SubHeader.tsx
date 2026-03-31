"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // আইকন ব্যবহারের জন্য

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAction = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsDrawerOpen(false); // মডাল খুললে ড্রয়ার বন্ধ হয়ে যাবে
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between md:justify-center items-center h-12">
          {/* Desktop Menu - বড় স্ক্রিনে দেখাবে */}
          <ul className="hidden md:flex items-center gap-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  onClick={handleAction}
                  className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors py-3 inline-block"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - শুধু মোবাইলে দেখাবে */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-sm font-bold text-red-600">MENU</span>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 text-gray-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Drawer Overlay --- */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Black Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl p-6 transition-transform">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg">Navigation</span>
              <button onClick={() => setIsDrawerOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={handleAction}
                    className="text-base font-medium text-gray-800 block py-2 border-b border-gray-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* --- Website Updating Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Website Updating
            </h3>
            <p className="text-gray-500 mb-6">
              We are working on this section. Please check back later!
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SubHeader;
