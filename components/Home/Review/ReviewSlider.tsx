"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
    >
      <div>
        <ReviewCard
          name="Chency starc"
          role="Student"
          image="/images/user1.jpg"
          des="The writing is engaging and the tips are genuinely useful. I found myself going back to highlight key points throughout."
        />
      </div>
      <div>
        <ReviewCard
          name="John Doe"
          role="Teacher"
          image="/images/user2.jpg"
          des="This ebook exceeded my expectations. Each chapter offered something new, and I could see immediate results in my daily habits."
        />
      </div>
      <div>
        <ReviewCard
          name="Axit Undhad"
          role="Developer"
          image="/images/user3.jpg"
          des="Well-structured, concise, and impactful. It feels like a mentor guiding you step by step toward your goals. Highly recommended!"
        />
      </div>
      <div>
        <ReviewCard
          name="Alexa Morris"
          role="Professor"
          image="/images/user4.jpg"
          des="A must-read for anyone looking to grow. The content is clear, motivating, and full of real-life applications that make a difference."
        />
      </div>
      <div>
        <ReviewCard
          name="Scout Moxly"
          role="Devops Engineer"
          image="/images/user5.jpg"
          des="Absolutely loved this ebook! The insights were practical and easy to apply. It really helped me shift my mindset and take action."
        />
      </div>
    </Carousel>
  );
};

export default ReviewSlider;
