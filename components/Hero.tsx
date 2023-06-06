import React from "react";
import { Fraunces } from "next/font/google";

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

const Hero: React.FC = () => {
  return (
    <div className="flex bg-deepBlue flex-col items-center justify-center h-screen space-y-8">
      <h1
        className={
          inter.className + " text-7xl font-bold text-platinum text-center"
        }
      >
        Velvet Hammer
      </h1>
      <p className={inter.className + " text-2xl text-platinum underline"}>
        Luxury &amp; Cannabis
      </p>
      <button className="px-8 py-3 text-2xl text-deepBlue bg-gold rounded-lg shadow-lg font-semibold">
        Our Products
      </button>
      <button className=" z-0 w-12 h-12 mt-6 border-2 border-platinum rounded-full animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-6 h-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
