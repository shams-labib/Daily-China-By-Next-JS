"use client";

import React from "react";

const Contact = () => {
  // TypeScript এরর ফিক্স করতে 'e' এর টাইপ React.FormEvent দেওয়া হয়েছে
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log("Subscribing...");
  };

  return (
    <section className="bg-[#28293d] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-10 tracking-tight">
          Join 180,000+ International Students And Get Monthly Updates
        </h2>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center max-w-xl mx-auto mb-8 shadow-2xl"
        >
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full h-12 px-6 bg-white text-gray-900 outline-none focus:ring-2 focus:ring-red-500 transition-all rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto h-12 bg-[#ce2029] hover:bg-[#e6222c] text-white font-bold px-10 whitespace-nowrap uppercase text-sm tracking-widest transition-colors rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none cursor-pointer"
          >
            Get Updates
          </button>
        </form>

        {/* Informational Text */}
        <div className="space-y-2">
          <p className="text-gray-300 text-base md:text-lg">
            Receive Admissions, Scholarships & Deadlines Updates from Chinese
            Universities.
          </p>
          <p className="text-gray-400 text-sm italic">Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
