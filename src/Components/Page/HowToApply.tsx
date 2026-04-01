import React from "react";

const HowToApply = () => {
  const steps = [
    "Choose the program(s) you want to apply to",
    "Complete the application form and upload your documents (about 12 minutes)",
    "Pay the application fee",
    "Review and submit your application",
    "We will update you on your status regularly",
    "Admissions notice sent to you by email and post",
    "Apply for your visa",
    "Confirm your place and book your flight and accommodation to come to China!",
  ];

  return (
    <section className="bg-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side: YouTube Video Embed */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Wd5LWbs-na4"
              title="Study in China | Best universities in China | Scholarships"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-md border-l-4 border-red-500">
            <p className="text-sm font-bold text-gray-700">
              Video Guide: Study in China
            </p>
            <p className="text-xs text-gray-500">
              By Vedantu Study Abroad - Complete Scholarship & Application Guide
            </p>
          </div>
        </div>

        {/* Right Side: Content & Steps */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How to apply?
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            China Admissions is always available to help you - feel free to
            contact us at any time. Here's how you can apply:
          </p>

          <ol className="space-y-4 mb-10">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="font-bold min-w-[20px]">{index + 1}.</span>
                <span className="text-[15px] leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          {/* Action Button */}
          <button className="bg-[#dc2626] hover:bg-red-700 text-white font-bold py-3 px-8 rounded shadow-lg transition-all uppercase text-sm tracking-wide">
            Choose Your Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
