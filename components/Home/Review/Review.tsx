import BoxText from "@/components/Helper/BoxText";
import React from "react";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Reviews" />
        </div>
        {/* heading */}
        <h1 className="text-xl md:text-3xl font-bold">Our Success Stories</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Real experiences from people who achieved their goals. Inspiring
          journeys of growth, progress, and success.
        </p>
      </div>
      {/* Slider */}
      <div className="w-[80%] mx-auto mt-16">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
