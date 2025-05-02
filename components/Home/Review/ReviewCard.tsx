import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  role: string;
  image: string;
  des: string;
};

const ReviewCard = ({ name, role, image, des }: Props) => {
  return (
    <div>
      <div className="flex items-center space-x-6">
        {/* user img */}
        <Image
          src={image}
          alt="User"
          height={80}
          width={80}
          className="rounded-full"
        />
        {/* user info */}
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      {/* actual review text */}
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-400 w-[80%]">
        {des}
      </p>
      {/* star */}
      <div className="flex items-center mt-5">
        <FaStar className="text-yellow-500 size-5"/>
        <FaStar className="text-yellow-500 size-5"/>
        <FaStar className="text-yellow-500 size-5"/>
        <FaStar className="text-yellow-500 size-5"/>
        <FaStar className="text-yellow-500 size-5"/>
      </div>
    </div>
  );
};

export default ReviewCard;
