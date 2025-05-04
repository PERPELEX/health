import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col justify-center text-center py-20 px-4 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/grad1.jpg')" }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium">
        Healthcare <span className="text-white">Reimagined</span>
      </h1>
      <p className="mt-4 max-w-xl sm:max-w-2xl md:max-w-3xl text-lg sm:text-xl md:text-2xl mx-auto">
        Level One combines medical expertise, behavioural science, and
        continuous data monitoring to deliver comprehensive support for your
        body, mind, and lifestyle. It’s like having a GP, a coach, and an AI
        health assistant.
      </p>
      <button className="mt-6 w-full sm:w-[50%] md:w-[20%] m-auto px-6 py-2 flex justify-center items-center bg-white text-black font-semibold rounded-full hover:bg-blue-100 transition-colors duration-300">
        <span className="font-semibold text-sm sm:text-normal">
          JOIN OUR WISHLIST
        </span>
        <span className="text-2xl sm:text-3xl ml-4 font-light">+</span>
      </button>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center">
        <Image
          src="/user.png"
          alt="user"
          width={100}
          height={100}
          className="hover:scale-105 transition-transform duration-300"
        />
        <div className="flex flex-col sm:ml-4 relative sm:-top-2 mt-4 sm:mt-0">
          <div className="text-yellow-300 text-lg sm:text-xl mt-2 sm:mt-4">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="text-sm sm:text-lg tracking-wide">
            4.8/5 (700k+ reviews)
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
