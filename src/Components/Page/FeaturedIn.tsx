"use client";
import React from "react";
// Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

const FeaturedIn = () => {
  const logos = [
    {
      src: "https://i.ibb.co.com/93hR1C0B/economist.png",
      alt: "The Economist",
    },
    { src: "https://i.ibb.co.com/xqkyssYR/us-news.png", alt: "U.S. News" },
    { src: "https://i.ibb.co.com/NnQhWrHy/technode.png", alt: "TechNode" },
    {
      src: "https://i.ibb.co.com/9HcrF6dd/CBC.png",
      alt: "China Business Cast",
    },
    { src: "https://i.ibb.co.com/JFMcPqXk/xinhua.png", alt: "Xinhua" },
    { src: "https://i.ibb.co.com/LDgJppzC/cri.png", alt: "CRI" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-sm font-bold text-gray-400 mb-10 uppercase tracking-[0.2em]">
          Featured In
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          speed={3000} // স্লাইড মুভমেন্টের গতি
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // রেসপনসিভ ব্রেকপয়েন্ট
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="featured-swiper flex items-center"
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="flex items-center justify-center h-16 w-full px-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* স্লাইড যাতে একনাগাড়ে বা থামা ছাড়া চলতে থাকে (Continuous loop) */
        .featured-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default FeaturedIn;
