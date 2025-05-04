import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-6 sm:px-20 shadow-md sticky top-0 bg-white z-50 text-black">
      {/* Logo */}
      <Link href="/" passHref>
        <Image
          src="/logo.png"
          alt="Health One Logo"
          width={40}
          height={40}
          className="h-8"
        />
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button
        className="sm:hidden flex items-center text-3xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "flex items-start space-y-6 py-6" : "hidden items-center"
        } sm:flex flex-col sm:flex-row  sm:space-x-8 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none z-40`}
      >
        <Link href="#why" passHref>
          <span className="hover:text-blue-600 text-lg font-semibold transition-colors duration-300 px-6 py-2">
            Why Health One
          </span>
        </Link>
        <Link href="#how" passHref>
          <span className="hover:text-blue-600 text-lg font-semibold transition-colors duration-300 px-6 py-2">
            How It Works
          </span>
        </Link>
        <Link href="#pricing" passHref>
          <span className="hover:text-blue-600 text-lg font-semibold transition-colors duration-300 px-6 py-2">
            Pricing
          </span>
        </Link>
        <Link href="#faq" passHref>
          <span className="hover:text-blue-600 text-lg font-semibold transition-colors duration-300 px-6 py-2">
            FAQs
          </span>
        </Link>
        <Link href="#wishlist" passHref>
          <span className="flex justify-between items-center space-x-4 bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm transition-colors duration-300 mx-6 sm:mx-0">
            <span className="font-medium">JOIN OUR WISHLIST</span>
            <span className="text-3xl font-light">+</span>
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
