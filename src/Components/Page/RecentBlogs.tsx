"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Added pagination styles

const RecentBlogs = () => {
  const blogs = [
    {
      title: "Studying MBA in China vs Malaysia – Which is better?",
      author: "Angel Tolentino",
      date: "March 31, 2026",
      img: "https://img.semafor.com/72402a32c879551a86a381bf5a527860b03b3b45-1345x684.png?rect=22,0,1303,684&w=1200&h=630&q=75&auto=format",
    },
    {
      title: "How XJTLU Prepares Students to Lead in the AI Era",
      author: "Angel Tolentino",
      date: "March 30, 2026",
      img: "https://www.economist.com/sites/default/files/images/2016/02/articles/main/20160206_cnp501.jpg",
    },
    {
      title: "How Beijing’s Tech Ecosystem Changes Your Business Mindset",
      author: "Angel Tolentino",
      date: "March 29, 2026",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YRut52bYYeEKzfK1uoYYnrnLosFFupSjpA&s",
    },
    {
      title:
        "10 Reasons to Study Bachelor’s in Business (BBA) at Renmin Business School",
      author: "Angel Tolentino",
      date: "March 24, 2026",
      img: "https://www.abu.org.my/images/articles/news/PhoenixInfoNews.jpg",
    },
    {
      title: "Navigating Scholarships in China: A Complete Guide for 2026",
      author: "Angel Tolentino",
      date: "March 20, 2026",
      img: "https://resizer-acm.eco.astro.com.my/tr:w-3840,q:75/https://s3-ap-southeast-1.amazonaws.com/ams-astro/production/images/1644X120276.jpg",
    },
    {
      title: "Top 5 Chinese Cities for International Students",
      author: "Angel Tolentino",
      date: "March 18, 2026",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnD8HNnfN7yf56c7mt5E0KiWMgm9UYJraPA&s",
    },
    {
      title: "Life at Tsinghua University: Student Perspectives",
      author: "Angel Tolentino",
      date: "March 15, 2026",
      img: "https://i.ytimg.com/vi/g1-vUOjAGgQ/maxresdefault.jpg",
    },
    {
      title: "The Rise of E-commerce Majors in Modern Universities",
      author: "Angel Tolentino",
      date: "March 10, 2026",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNgW0jK03Z30Qb9LPwfCAVmYJdn1ufkIsPQ&s",
    },
  ];

  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">
          Recent Blog Articles
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }} // Enabled clickable dots
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-14" // Increased padding for pagination dots
        >
          {blogs.map((blog, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-[16px] font-bold text-gray-800 mb-4 line-clamp-3 leading-snug">
                    {blog.title}
                  </h3>
                  <div className="mt-auto">
                    <p className="text-xs text-gray-500 font-medium">
                      {blog.author}
                    </p>
                    <p className="text-xs text-gray-400">{blog.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 text-center md:text-left">
          <button className="text-red-500 font-bold text-sm hover:underline uppercase transition-all">
            See More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
