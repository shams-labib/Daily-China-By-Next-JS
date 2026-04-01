"use client";

import React, { useState } from "react";
import { X, Construction } from "lucide-react";
// Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };

  // ভিডিও/ইমেজ স্লাইডার ডেটা
  const videoSlides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/SwcgKJ3t/Study-MBBS-CHINA-1.webp",
      title: "MBBS AT SHANTOU UNIVERSITY",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/3ZX5VSC/China-Admissions-Common-Misconceptions-about-China-5.jpg",
      title: "STUDY IN TSINGHUA UNIVERSITY",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/G4qF03wz/CA-Logo-Big-White-Background.png",
      title: "LIFE AT PEKING UNIVERSITY",
    },
  ];

  // টেক্সট রিভিউ ডেটা
  const reviews = [
    {
      name: "Hasnaat",
      country: "Pakistan",
      text: "One of the best I have come across, it is more or less a complete solution from the application stage till final admission. Good guidance for medicals and student visa process.",
    },
    {
      name: "Bertha Amosa",
      country: "Papua New Guinea",
      text: "I find services at China Admissions very satisfactorily, in fact, it has an excellent support staff who are very responsive to our email enquiries from time to time.",
    },
    {
      name: "Joe",
      country: "Italy",
      text: "Long time I haven't had such a professional handling of things and I worked ten years in Luxury Hotels. Thanks.",
    },
    {
      name: "Ali",
      country: "Egypt",
      text: "The process was very smooth and the team helped me every step of the way. Highly recommended for international students.",
    },
  ];

  return (
    <section className="bg-white py-16 w-full overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-10">
          Helping Thousands of Students Study in China
        </h2>

        {/* Top Video Slider */}
        <div className="relative mb-16 group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="rounded-xl shadow-md"
          >
            {videoSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-[300px] md:h-[450px] w-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div
                      onClick={handleUpdateClick}
                      className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                    >
                      <div className="ml-1 border-y-[10px] border-y-transparent border-l-[18px] border-l-white"></div>
                    </div>
                  </div>
                  {/* Text Overlay */}
                  <div className="absolute top-10 left-10 max-w-sm text-white drop-shadow-2xl">
                    <h3 className="text-4xl md:text-6xl font-black italic leading-none uppercase">
                      {slide.title.split(" AT ")[0]}
                    </h3>
                    <p className="text-xl md:text-2xl font-bold mt-2">
                      {slide.title.includes("AT")
                        ? `AT ${slide.title.split(" AT ")[1]}`
                        : ""}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Review Slider */}
        <div className="relative px-10">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm h-full min-h-[220px] flex flex-col">
                  <h4 className="font-bold text-gray-800 text-sm mb-1">
                    {review.name} -{" "}
                    <span className="text-gray-500 font-normal">
                      {review.country}
                    </span>
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {review.text}
                  </p>
                  <button
                    onClick={handleUpdateClick}
                    className="text-red-500 text-xs font-semibold mt-4 text-left hover:underline cursor-pointer"
                  >
                    Read more
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination and See More */}
          <div className="flex flex-col items-center mt-4">
            <div className="custom-pagination mb-4"></div>
            <div className="w-full text-right">
              <button
                onClick={handleUpdateClick}
                className="text-red-500 font-semibold text-sm hover:underline cursor-pointer"
              >
                See More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- WEBSITE UPDATING MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="flex justify-center mb-4 text-red-500">
              <Construction size={50} />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Website Updating
            </h3>

            <p className="text-gray-600 mb-6 text-sm">
              We are updating our media library for the 2026 intake. Video
              testimonials and detailed reviews will be back online shortly!
            </p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-lg transition-colors cursor-pointer"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Swiper Navigation Custom Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-button-next, .swiper-button-prev {
          color: #666;
          background: rgba(255,255,255,0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: #dc2626 !important;
        }
      `,
        }}
      />
    </section>
  );
};

export default Testimonials;
