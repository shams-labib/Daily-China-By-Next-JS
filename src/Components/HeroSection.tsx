"use client";

import React, { useState } from "react";
import { Search, X, Construction } from "lucide-react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAction = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section with search"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bannar.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Search Top <br className="md:hidden" /> Programs in China
        </h1>

        {/* Search Bar */}
        <form
          onSubmit={handleAction}
          className="relative flex items-center w-full max-w-3xl mx-auto overflow-hidden rounded-lg md:rounded-xl shadow-2xl"
          role="search"
        >
          <label htmlFor="program-search" className="sr-only">
            Search programs
          </label>
          <input
            id="program-search"
            type="text"
            placeholder="Search by university, program, or city"
            className="w-full py-3 px-6 text-gray-800 outline-none text-base md:text-lg bg-white"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 md:p-4 transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search size={24} />
          </button>
        </form>

        {/* Quick Search Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-white font-medium text-sm md:text-base">
          {["Chinese", "MBBS", "MBA", "September 2026", "Spring 2026"].map(
            (tag) => (
              <button
                key={tag}
                onClick={handleAction}
                className="hover:text-red-400 transition-colors cursor-pointer"
                type="button"
              >
                {tag}
              </button>
            ),
          )}
        </div>
      </div>

      {/* --- WEBSITE UPDATING MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex justify-center mb-4 text-yellow-500">
              <Construction size={50} />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Website Updating
            </h3>

            <p className="text-gray-600 mb-6">
              We are currently updating our database for 2026 admissions. Search
              functionality will be back online shortly!
            </p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
