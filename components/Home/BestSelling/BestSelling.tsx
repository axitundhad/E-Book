import BoxText from "@/components/Helper/BoxText";
import React from "react";
import Slider from "./Slider";

const BestSelling = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100 dark:bg-gray-950">
      <div className="text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="BestSelling" />
        </div>
        {/* heading */}
        <h1 className="text-xl md:text-3xl font-bold">
          Our Best Selling Books
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Explore top-rated titles loved by readers. Handpicked for their
          impact, quality, and inspiration.
        </p>
      </div>
      {/* slider div */}
      <div className="w=[90%] md:w-[80%] mx-auto mt-16">
        {/* slider */}
        <Slider />
      </div>
    </div>
  );
};

export default BestSelling;
