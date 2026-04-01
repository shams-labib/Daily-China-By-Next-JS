import React from "react";
import { CheckCircle2 } from "lucide-react";

const WhyApply = () => {
  const features = [
    {
      title: "Free Service",
      description: (
        <span>
          Free Service applying to{" "}
          <span className="text-red-500 cursor-pointer hover:underline">
            partner universities
          </span>
          , you can read more about our services{" "}
          <span className="text-red-500 cursor-pointer hover:underline">
            here
          </span>
          .
        </span>
      ),
    },
    {
      title: "Easy Online Application",
      description:
        "Apply in one simple online application to any university in China",
    },
    {
      title: "Award Winning Support",
      description: (
        <span>
          Find everything you need on our{" "}
          <span className="text-red-500 cursor-pointer hover:underline">
            comprehensive support center
          </span>
          , and support team.
        </span>
      ),
    },
    {
      title: "4.9 Rated out of 5",
      description:
        "Successfully helped 3,832 Students Study in China from 192 Countries since 2015",
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Title & Illustration */}
        <div className="w-full md:w-1/3 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8 leading-tight">
            Why Apply on China Admissions?
          </h2>
          <div className="flex justify-center">
            {/* Illustration Image */}
            <img
              src="https://img.freepik.com/free-vector/partnership-concept-illustration_114360-4929.jpg"
              alt="Illustration"
              className="w-72 h-auto mix-blend-multiply"
            />
          </div>
        </div>

        {/* Right Side: Features Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Green Check Icon */}
              <div className="mt-1">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {/* Specific Red text for the last title as per image */}
                  {index === 3 ? (
                    <span className="text-red-600 font-bold">
                      {feature.title}
                    </span>
                  ) : (
                    feature.title
                  )}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyApply;
