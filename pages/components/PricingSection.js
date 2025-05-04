import React from "react";
import Image from "next/image";

const PricingSection = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16 sm:mb-28">
        What could cost you $0000 is $000
      </h2>
      {/* Container */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col items-start bg-white p-6 sm:p-10 py-10 sm:py-16 space-y-4 rounded-3xl border-2 border-gray-200 flex-1">
          <div className="space-y-2">
            <Image
              src="/logo2.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h3 className="font-bold text-2xl sm:text-3xl">Lorem ipsum</h3>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetuer.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-x-2">
              <h3 className="text-4xl sm:text-6xl font-semibold mt-4">000</h3>
              <p className="mt-2 text-sm sm:text-base">Lorem ipsum</p>
            </div>
            <p className="text-sm sm:text-base">Lorem ipsum dolor sit</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-3xl hover:bg-blue-700 transition-colors duration-300">
            Lorem ipsum dolor sit
          </button>
        </div>
        {/* Right Section */}
        <div className="flex-1 space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              className="bg-white p-4 sm:p-6 py-6 sm:py-8 border-2 space-y-4 border-gray-200 rounded-2xl"
              key={i}
            >
              <div className="flex space-x-4 items-center">
                <Image
                  src="/i1.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <h4 className="font-semibold text-base sm:text-lg">
                  Lorem ipsum dolor
                </h4>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                volutpat. Ut wisi enim adminim veniam,
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
