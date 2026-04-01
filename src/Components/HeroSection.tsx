import React from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/Z6gfq83v/Gemini-Generated-Image-cwr5xbcwr5xbcwr5.png')`, // এখানে আপনার নিজের ইমেজ লিঙ্ক দিন
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Search Top Programs in China
        </h1>

        {/* Search Bar Container */}
        <div className="relative flex items-center w-full max-w-3xl mx-auto overflow-hidden rounded-lg md:rounded-xl shadow-2xl">
          <input
            type="text"
            placeholder="Search by university, program, or city"
            className="w-full py-3 md:py-5 px-6 text-gray-800 outline-none text-base md:text-lg bg-white"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 md:p-5 transition-colors">
            <Search size={24} />
          </button>
        </div>

        {/* Quick Search Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-white font-medium text-sm md:text-base">
          <button className="hover:text-red-400 transition-colors">
            Chinese
          </button>
          <button className="hover:text-red-400 transition-colors">MBBS</button>
          <button className="hover:text-red-400 transition-colors">MBA</button>
          <button className="hover:text-red-400 transition-colors">
            September 2026
          </button>
          <button className="hover:text-red-400 transition-colors">
            Spring 2026
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
