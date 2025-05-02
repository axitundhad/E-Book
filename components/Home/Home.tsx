"use client";
import React, { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Benefits from "./Benefits";
import BestSelling from "./BestSelling/BestSelling";
import Price from "./Price/Price";
import Review from "./Review/Review";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <section id="hero" className="scroll-mt-6">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-6">
        <About />
      </section>
      <section id="benefits" className="scroll-mt-6">
        <Benefits />
      </section>
      <section id="courses" className="scroll-mt-6">
        <BestSelling />
      </section>
      <section id="price" className="scroll-mt-6">
        <Price />
      </section>
      <section id="review" className="scroll-mt-6">
        <Review />
      </section>
    </div>
  );
};

export default Home;
