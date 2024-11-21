import { Layout } from "../layout"; // Layout already includes Header
import homePageImage1 from "../assets/images/home_page.png";
import homePageImage2 from "../assets/images/2home_page.png";
import homePageImage3 from "../assets/images/3home_page.png";
import { PrimaryButton } from "../components/Button"; // Import PrimaryButton

import { useEffect, useState } from "react";

export const Home = () => {
  const images = [homePageImage1, homePageImage2, homePageImage3];
  const extendedImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ]; // Duplicate for infinite loop
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedImages.length); // Cycle through images
    }, 4000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [extendedImages.length]);

  // Dynamic height adjustment for different images
  const getImageHeight = (index: number) => {
    const adjustedIndex = index % images.length;
    if (adjustedIndex === 0) return "h-[615px]";
    if (adjustedIndex === 1) return "h-[635px]";
    return "h-[640px]";
  };

  return (
    <Layout>
      <div className="relative w-full overflow-hidden mt-28 mx-auto">
        {/* Fixed text and button container */}
        <div className="fixed inset-0 flex flex-col justify-center items-center z-50">
          {/* Larger Transparent Card */}
          <div className="bg-white bg-opacity-20 text-black text-center rounded-lg p-8 shadow-lg max-w-4xl mb-6">
            <p className="text-xl font-extrabold leading-relaxed">
              Unlock Your Potential with Personalized Physiotherapy & Nutrition
              Plans — Featuring Real-Time Posture Correction for a Healthier
              You!
            </p>
          </div>

          {/* Button Positioned Lower */}
          <div className="mt-6">
            <PrimaryButton className="!px-28 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105">
              Start Now
              <span className="ml-2 text-xl">→</span>
            </PrimaryButton>
          </div>
        </div>

        {/* Image container */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {extendedImages.map((image, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 bg-cover rounded-md shadow-lg ${getImageHeight(
                index
              )}`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
