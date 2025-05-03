import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-20 shadow-md sticky top-0 bg-white z-50 text-black">
      <Link href="/" passHref>
        <Image
          src="/logo.png"
          alt="Health One Logo"
          width={40}
          height={40}
          className="h-8"
        />
      </Link>
      <nav className="flex items-center space-x-24">
        <Link href="#why" passHref>
          <span className="hover:text-blue-600 text-xl font-semibold transition-colors duration-300">
            Why Health One
          </span>
        </Link>
        <Link href="#how" passHref>
          <span className="hover:text-blue-600 text-xl font-semibold transition-colors duration-300">
            How It Works
          </span>
        </Link>
        <Link href="#pricing" passHref>
          <span className="hover:text-blue-600 text-xl font-semibold transition-colors duration-300">
            Pricing
          </span>
        </Link>
        <Link href="#faq" passHref>
          <span className="hover:text-blue-600 text-xl font-semibold transition-colors duration-300">
            FAQs
          </span>
        </Link>
        <Link href="#wishlist" passHref>
          <span className="flex justify-between items-center space-x-4 bg-blue-900 text-white px-4 py-1 rounded-full hover:bg-blue-700 text-sm transition-colors duration-300">
            <span className="font-medium">JOIN OUR WISHLIST</span>
            <span className="text-3xl font-light">+</span>
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
