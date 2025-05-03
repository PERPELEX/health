import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/logo2.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 mr-2"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna volutpat. Ut
            wisi enim adminim veniam,
          </p>
          <div className="flex space-x-4 mt-4 text-black">
            <Link href="#" passHref>
              <span>
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
            </Link>
            <Link href="#" passHref>
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </Link>
            <Link href="#" passHref>
              <span>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </Link>
            <Link href="#" passHref>
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" passHref>
                <span className="hover:text-blue-600">Why Us?</span>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <span className="hover:text-blue-600">How It Works?</span>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <span className="hover:text-blue-600">Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <span className="hover:text-blue-600">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <span className="hover:text-blue-600">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-black" />{" "}
              (+92) 334-555-0120
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-black" />{" "}
              Hey@website.com
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 mt-1 text-black"
              />{" "}
              F8/2, Street 32,
              <br /> Islamabad, Pakistan
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
