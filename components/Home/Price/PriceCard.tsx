import React from "react";

type Props = {
  type: string;
  price: string;
};

const PriceCard = ({ type, price }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Plan type */}
      <h1 className="mt-6 text-3xl text-gray-700 font-bold text-center">
        {type} Plan
      </h1>
      {/* Price */}
      <div className="mt-10 text-center text-lg font-semibold dark:text-black">
        <span className="font-bold text-4xl text-orange-500 text-center">
          {price}
        </span>{" "}
        / month
      </div>
      {/* features */}
      <div className="mt-14 text-center">
        <h1 className="text-gray-400 pb-3 mb-4 border-b-2 border-gray-200">
          crm auto cync
        </h1>
        <h1 className="text-gray-400 pb-3 mb-4 border-b-2 border-gray-200">
          click to call back
        </h1>
        <h1 className="text-gray-400 pb-3 mb-4 border-b-2 border-gray-200">
          track energy costs
        </h1>
        <h1 className="text-gray-400 pb-3 mb-4 border-b-2 border-gray-200">
          predictive dialing
        </h1>
      </div>
      {/* Buttons */}
      <div className="mt-6 text-center">
        <a
          href="#_"
          className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
          <span className="relative">Download</span>
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
