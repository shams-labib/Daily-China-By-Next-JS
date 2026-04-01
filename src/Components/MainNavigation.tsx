"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  UserPlus,
  SquareArrowRightExit,
  Receipt,
  Vegan,
  ChevronRight,
} from "lucide-react";

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

const MainNavigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 'e' এর টাইপ নির্দিষ্ট করে দেওয়া হয়েছে যাতে বিল্ড এরর না আসে
  const handleAction = (e?: React.MouseEvent | React.FormEvent) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* --- TOP HEADER (Red Section) --- */}
      <div className="bg-red-700 text-white">
        <nav className="flex justify-between items-center max-w-7xl mx-auto py-2 px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="p-1 bg-white rounded-full text-red-700">
              <Vegan size={24} />
            </span>
            <h1 className="text-xl md:text-2xl font-bold italic tracking-tight">
              China Scholar
            </h1>
          </div>

          {/* Desktop Auth Links */}
          <ul className="hidden md:flex items-center space-x-2">
            <li>
              <Link
                href="/register"
                onClick={handleAction}
                className="flex items-center text-sm lg:text-base hover:bg-white hover:text-red-700 px-3 py-1.5 rounded-xl duration-300"
              >
                <UserPlus size={18} className="mr-1" /> Register
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                onClick={handleAction}
                className="flex items-center text-sm lg:text-base hover:bg-white hover:text-red-700 px-3 py-1.5 rounded-xl duration-300"
              >
                <SquareArrowRightExit size={18} className="mr-1" /> Login
              </Link>
            </li>
            <li>
              <Link
                href="/usd"
                onClick={handleAction}
                className="flex items-center text-sm lg:text-base hover:bg-white hover:text-red-700 px-3 py-1.5 rounded-xl duration-300"
              >
                <Receipt size={18} className="mr-1" /> USD
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden p-1 cursor-pointer"
          >
            <Menu size={28} />
          </button>
        </nav>
      </div>

      {/* --- SUB HEADER (White Section - Desktop Only) --- */}
      <nav className="hidden md:block bg-white border-b border-gray-100 shadow-sm">
        <ul className="flex flex-wrap justify-center items-center gap-x-8 py-3 px-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                onClick={handleAction}
                className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-[13px] left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- MOBILE DRAWER --- */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-5 flex justify-between items-center border-b bg-red-700 text-white">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="overflow-y-auto flex-1">
              <div className="p-4 bg-gray-50 grid grid-cols-2 gap-2 border-b">
                <button
                  onClick={handleAction}
                  className="flex items-center justify-center gap-2 bg-red-700 text-white p-2 rounded-lg text-sm cursor-pointer"
                >
                  <UserPlus size={16} /> Register
                </button>
                <button
                  onClick={handleAction}
                  className="flex items-center justify-center gap-2 border border-red-700 text-red-700 p-2 rounded-lg text-sm cursor-pointer"
                >
                  <SquareArrowRightExit size={16} /> Login
                </button>
              </div>

              <ul className="p-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={handleAction}
                      className="flex justify-between items-center px-4 py-4 text-gray-700 hover:bg-red-50 rounded-lg group"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight
                        size={18}
                        className="text-gray-400 group-hover:text-red-600"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* --- WEBSITE UPDATING MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl border-t-4 border-red-600 animate-in zoom-in duration-200">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Vegan size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
              UPDATING!
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed text-sm">
              This feature is under construction. <br />
              <strong>Daily China</strong> is getting better!
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-red-700 text-white py-3 rounded-xl font-bold hover:bg-red-800 transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNavigation;
