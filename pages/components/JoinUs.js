import React from "react";

const JoinUs = () => {
  return (
    <div
      className="text-white py-10 px-4 sm:px-10 mx-4 lg:mx-10 rounded-3xl"
      style={{
        backgroundImage: "url('/grad2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-6 sm:p-12 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <h3 className="text-3xl sm:text-5xl tracking-wider font-bold mb-6 md:mb-0">
          Join Our Wishlist
        </h3>
        <button className="bg-white text-lg sm:text-2xl font-semibold text-[#0d448c] px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-100 flex items-center justify-center">
          Join Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6 ml-3 sm:ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
