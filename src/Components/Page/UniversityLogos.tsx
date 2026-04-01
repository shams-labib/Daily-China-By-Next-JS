"use client";

import React, { useState } from "react";
import { X, Construction } from "lucide-react";

const UniversityLogos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const logos = [
    "https://i.ibb.co.com/HTyxVzzw/Tsinghua-University-Logo.png",
    "https://i.ibb.co.com/Kc6d1bdd/UIC-f58edeb43563.jpg",
    "https://i.ibb.co.com/v4tmDR53/pku-no-gb.avif",
    "https://i.ibb.co.com/gbMRpz5j/zust-logo-2.avif",
    "https://i.ibb.co.com/YB4cL7Hv/fudan-mba-png.png",
    "https://i.ibb.co.com/pvd5WZyQ/HKMU-6da7fbe4ce95.png",
    "https://i.ibb.co.com/dsHNKLFJ/AEBS-29639ea6a090.webp",
    "https://i.ibb.co.com/gFycgqQc/westlake-185d16fdf455.png",
    "https://i.ibb.co.com/JW5xzztb/Renmin-Business-School-xb8-TOvi.png",
    "https://i.ibb.co.com/6RdzDSdf/SUMC-100x100.png",
  ];

  return (
    <section className="bg-white py-16 w-full relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Title and Illustration */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-8">
              Discover China's World Class Universities
            </h2>
            <div className="flex justify-center md:justify-start">
              <img
                src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg"
                alt="Illustration"
                className="w-64 h-auto"
              />
            </div>
          </div>

          {/* Right Side: Logos Grid */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="w-24 h-24 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={logo}
                    alt={`University Logo ${index}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#dc2626] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all uppercase text-sm tracking-wide cursor-pointer active:scale-95"
          >
            View All Universities
          </button>
        </div>
      </div>

      {/* --- WEBSITE UPDATING MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300 border border-gray-100">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="flex justify-center mb-4 text-orange-500">
              <Construction size={50} strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Website Updating
            </h3>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              We are currently finalizing the university rankings and details
              for the 2026 intake. This section will be live shortly!
            </p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UniversityLogos;
