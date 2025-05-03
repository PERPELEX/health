import React from "react";

const JoinUs = () => {
  return (
    <div
      className="text-white py-10 mx-10 rounded-3xl "
      style={{
        backgroundImage: "url('/grad2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-12 pt-6 flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-5xl tracking-wider font-bold mb-4 md:mb-0">
          Join Our Wishlist
        </h3>
        <button className="bg-white text-2xl font-semibold text-[#0d448c] px-6 py-3 rounded-full hover:bg-blue-100 flex items-center">
          Join Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-6"
            className="w-6 h-6 ml-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
