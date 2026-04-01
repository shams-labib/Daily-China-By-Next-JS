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
    <section className="bg-white py-10 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid Layout: Top Row (3 items) & Bottom Row (4 items) */}
        <div className="grid grid-cols-12 gap-4">
          {/* প্রথম ৩টি বড় কার্ড (প্রতিটি ৪ কলাম করে ১২ কলাম পূর্ণ করবে) */}
          {cities.slice(0, 3).map((city, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-4 relative group overflow-hidden rounded-md cursor-pointer h-[200px] border border-gray-100 shadow-sm"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <h3 className="absolute top-3 left-4 text-white text-2xl font-bold italic drop-shadow-md">
                {city.name}
              </h3>
            </div>
          ))}

          {/* পরের ৪টি ছোট কার্ড (প্রতিটি ৩ কলাম করে ১২ কলাম পূর্ণ করবে) */}
          {cities.slice(3, 7).map((city, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 md:col-span-3 relative group overflow-hidden rounded-md cursor-pointer h-[180px] border border-gray-100 shadow-sm"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <h3 className="absolute top-3 left-4 text-white text-2xl font-bold italic drop-shadow-md">
                {city.name}
              </h3>
            </div>
          ))}
        </div>

        {/* See More Link */}
        <div className="mt-5">
          <button className="text-[#c54b4b] hover:text-red-700 text-sm font-medium transition-colors">
            See More Cities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Places;
