"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp, MessageSquare } from "lucide-react";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`bg-[#ce2029] text-white p-3 rounded shadow-lg hover:bg-red-700 transition-all duration-300 cursor-pointer flex items-center justify-center ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} strokeWidth={3} />
      </button>

      {/* Chat / Support Button */}
      <button
        className="bg-[#e62e05] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform cursor-pointer flex items-center justify-center"
        aria-label="Contact support"
      >
        <MessageSquare size={28} fill="white" />
      </button>
    </div>
  );
};

export default FloatingActions;
