import Image from "next/image";
import React from "react";
import BoxText from "../Helper/BoxText";
import { BiCheck } from "react-icons/bi";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100 dark:bg-gray-950">
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-center">
        {/* Image content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="lg:col-span-2"
        >
          <Image
            src="/images/about.jpg"
            alt="image"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        {/* Text content */}
        <div className="lg:col-span-3">
          {/* Box Text */}
          <BoxText text="About Us" />
          {/* heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-6 mb-6 text-gray-800 dark:text-gray-200 font-semibold">
            About This Best Selling Book
          </h1>
          {/* description */}
          <p className="text-sm md:text-base font-semibold text-gray-600 dark:text-gray-400">
            Discover why this book has captivated readers worldwide with its
            powerful insights, practical strategies, and transformative impact.
            A must-read for anyone seeking inspiration and lasting change.
          </p>
          {/* Lists */}
          <div className="mt-8 space-y-5">
            {/* 1st item */}
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 size-7" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                This book offers deep insights that inspire growth.
              </p>
            </div>
            {/* 2nd item */}
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 size-7" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                Packed with practical advice for everyday success.
              </p>
            </div>
            {/* 3rd item */}
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 size-7" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                A transformative guide that&apos;s changed countless lives.
              </p>
            </div>
            {/* 4th item */}
            <div className="flex items-center space-x-2">
              <BiCheck className="text-orange-500 size-7" />
              <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base">
                Perfect for readers seeking motivation and clarity.
              </p>
            </div>
          </div>
          {/* Button */}
          <div className="mt-14">
            <a
              href="#_"
              className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="relative">Read More &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
