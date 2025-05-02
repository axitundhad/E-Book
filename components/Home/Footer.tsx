import React from "react";
import Logo from "../Helper/Logo";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="contact" className="pt-16 pb-16 dark:bg-gray-950">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div>
          <Logo />
          <p className="mt-5 font-semibold text-gray-700 dark:text-gray-400 text-sm">
            Crafted with care to inspire growth and learning every step of the
            way.
          </p>
          {/* social icons */}
          <div className="flex items-center space-x-4 mt-6">
            <FaLinkedin />
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Services
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Our Customer
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Portfolio
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blog
          </p>
        </div>
        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Resources</h1>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blog
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Webinar & Events
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Podcast
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            E-book & Guides
          </p>
        </div>
        {/* 4th part */}
        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600 dark:text-gray-300">
              Our Mobile Number
            </h1>
            <h1 className="text-base font-bold text-blue-950 dark:text-gray-300 mt-1">
              +91 12345 67857
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600 dark:text-gray-300">
              Our Email Address
            </h1>
            <h1 className="text-base font-bold text-blue-950 dark:text-gray-300 mt-1">
              axit012@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright © 2024 Webdev. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>

          <Link
            href="https://www.linkedin.com/in/axit-undhad-715a4b279"
            className="text-gray-500 hover:text-gray-800"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/axitundhad"
            className="text-gray-500 hover:text-gray-800"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.instagram.com/axit_undhad4?igsh=N3dhamo0ZDEwOG16"
            className="text-gray-500 hover:text-gray-800"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
