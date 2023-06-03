import React from "react";
import { GiFlowerPot } from "react-icons/gi";
import { Fraunces } from "next/font/google";

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Best quality",
    description: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    title: "Exclusive benefits",
    description: "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    title: "Free shipping",
    description: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

const WhyUs: React.FC = () => {
  return (
    <section className="bg-deepBlue   px-6 sm:px-12 lg:px-0">
    <div className="container mx-auto">
    <div className="text-center py-12">
      <h2 className={inter.className + " text-6xl lg:text-7xl text-platinum font-bold mb-6"}>
            Why choose us?
          </h2>
          <p className={inter.className + " text-xl lg:text-2xl text-platinum leading-relaxed mb-10"}>
            We have over 15 years of experience in the cannabis industry...
          </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
        {features.map(({ title, description }, index) => (
          <div
            key={index}
            className="bg-gold rounded-lg p-6 flex flex-col items-center justify-center shadow-lg mb-10 lg:mb-12"
            >
            <GiFlowerPot className="text-6xl text-deepBlue mb-4" />
              <h3 className={inter.className + " text-3xl text-deepBlue font-bold mb-2"}>{title}</h3>
              <p className={inter.className + " text-deepBlue text-center"}>{description}</p>
            </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default WhyUs;
