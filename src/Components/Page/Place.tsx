import React from "react";

const Places = () => {
  const cities = [
    {
      name: "Beijing",
      image: "https://i.ibb.co.com/8L52x9xB/beijing-photo-for-pc-banner.webp",
    },
    {
      name: "Shanghai",
      image: "https://i.ibb.co.com/BH6yC76t/Shanghai-Night-HEADER-MOBILE.webp",
    },
    {
      name: "Hangzhou",
      image: "https://i.ibb.co.com/5bH5PtV/Hangzhou-City-China.avif",
    },
    {
      name: "Online",
      image: "https://i.ibb.co.com/hJ5SB75D/arten-von-online-plattformen.jpg",
    },
    {
      name: "Hong Kong",
      image: "https://i.ibb.co.com/Css5M3RZ/Hong-Kong-Scenery.webp",
    },
    {
      name: "Shenzhen",
      image:
        "https://i.ibb.co.com/JW7f1xFw/Commercial-area-of-futian-to-east2020.jpg",
    },
    {
      name: "Wuhan",
      image: "https://i.ibb.co.com/1YrQ5LqH/4631.webp",
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-10 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-2 md:gap-4">
          {/* প্রথম ৩টি কার্ড: মোবাইলে ৩টা (col-span-4), ডেস্কটপে ৩টা (md:col-span-4) */}
          {cities.slice(0, 3).map((city, index) => (
            <div
              key={index}
              className="col-span-4 md:col-span-4 relative group overflow-hidden rounded-md cursor-pointer h-[120px] md:h-[200px] border border-gray-100 shadow-sm"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <h3 className="absolute top-2 left-2 md:top-3 md:left-4 text-white text-sm md:text-2xl font-bold italic drop-shadow-md leading-tight">
                {city.name}
              </h3>
            </div>
          ))}

          {/* পরের ৪টি কার্ড: মোবাইলে ৩টা (col-span-4), ডেস্কটপে ৪টা (md:col-span-3) */}
          {cities.slice(3, 7).map((city, index) => (
            <div
              key={index}
              className="col-span-4 md:col-span-3 relative group overflow-hidden rounded-md cursor-pointer h-[120px] md:h-[180px] border border-gray-100 shadow-sm"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <h3 className="absolute top-2 left-2 md:top-3 md:left-4 text-white text-sm md:text-2xl font-bold italic drop-shadow-md leading-tight">
                {city.name}
              </h3>
            </div>
          ))}
        </div>

        {/* See More Link */}
        <div className="mt-5">
          <button className="text-[#c54b4b] hover:text-red-700 text-xs md:text-sm font-medium transition-colors">
            See More Cities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Places;
