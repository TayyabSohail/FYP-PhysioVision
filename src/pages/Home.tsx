import { Layout } from "../layout"; // Layout already includes Header
import homePageImage1 from "../assets/images/home_page.png";
import homePageImage2 from "../assets/images/2home_page.png";
import homePageImage3 from "../assets/images/3home_page.png";
import whatWeOfferWhite from "../assets/images/what_we_offer_white.png";
import whatWeOfferBlack from "../assets/images/what_we_offer_black.png";
import whiteBackground from "../assets/images/white_background.png"; // Background for white image
import backToTop from "../assets/images/back_to_Top.png"; // Background for back to top button

import "@fortawesome/fontawesome-free/css/all.min.css";

import { PrimaryButton } from "../components/Button";

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
    ...images,
    ...images,
    ...images,
  ]; // Duplicate for infinite loop
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedImages.length); // Cycle through images
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [extendedImages.length]);

  // Dynamic height adjustment for different images
  const getImageHeight = (index: number) => {
    const adjustedIndex = index % images.length;
    if (adjustedIndex === 0) return "h-[635px]";
    if (adjustedIndex === 1) return "h-[635px]";
    return "h-[640px]";
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToBottom = () => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };
  return (
<Layout className="overflow-x-hidden">
{/* Hero Section */}
      <div className="relative w-full mt-48 mx-auto">
        {/* Fixed text and button container */}
        <div className="absolute inset-x-0 top-[20vh] flex flex-col justify-center items-center z-10">
          <div className="bg-white bg-opacity-20 text-black text-center rounded-lg p-8 shadow-lg max-w-4xl mb-6">
            <p className="text-xl font-extrabold leading-relaxed">
              Unlock Your Potential with Personalized Physiotherapy & Nutrition
              Plans — Featuring Real-Time Posture Correction for a Healthier
              You!
            </p>
          </div>
          <div className="mt-6">
            <PrimaryButton
              className="!px-32 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover: hover:scale-105"
              onClick={() => scrollToBottom()} // Call the scrollToBottom function when clicked
            >
              Start Now
            </PrimaryButton>
          </div>
        </div>

        {/* Image slider */}
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
                backgroundPosition: "center top", // Crop from the top
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Fancy Design with Images Below */}
      <div className="relative w-full">
        {/* White background image (No margin top) */}
        <div className="relative w-full">
          <img
            src={whiteBackground}
            alt="White Background"
            className="w-full h-72"
          />
          <img
            src={whatWeOfferWhite}
            alt="What We Offer - White"
            className="w-[100%] max-w-[800px] mx-auto mt-[-288px] relative z-10"
          />
        </div>

        {/* Black background image */}
        <div className="relative w-full bg-cover bg-center">
          <img
            src={backToTop}
            alt="Back to Top Background"
            className="w-full h-auto object-cover"
          />
          <img
            src={whatWeOfferBlack}
            alt="What We Offer - Black"
            className="w-[80%] max-w-[800px] mx-auto mt-[-336px] relative z-10"
          />
        </div>
      </div>

      {/* New Background and Button Section */}
      <div className="relative w-full">
        <img
          src={whiteBackground}
          alt="Background"
          className="w-full h-96 object-cover"
        />

        <div className="absolute inset-x-0 top-[30%] flex flex-col justify-center items-center z-10">
          <p className="text-xl font-bold text-black text-center mb-6">
            Start the session now
          </p>
          <div className="flex space-x-4 mb-6">
            <PrimaryButton className="!px-12 bg-black text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105">
              Chatbot
            </PrimaryButton>
            <PrimaryButton className="!px-12 bg-black text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:bg-orange-700 hover:scale-105">
              Exercise
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Back to Top Section with Follow Us */}
      <div className="bg-black text-white py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6 mb-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-purple-600 transition duration-300"
            >
              <i className="fab fa-instagram"></i> {/* Instagram Icon */}
            </a>

            {/* WhatsApp */}
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-green transition duration-300"
            >
              <i className="fab fa-whatsapp"></i> {/* WhatsApp Icon */}
            </a>

            {/* Twitter (X) */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-twitter"></i> {/* Twitter Icon */}
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-rose-600 transition duration-300"
            >
              <i className="fab fa-youtube"></i> {/* YouTube Icon */}
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-full py-6 text-center font-semibold bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${backToTop})`, // Apply full-width background image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-center ">
            <span className="text-4xl font-bold">^</span> {/* Upwards arrow */}
            <span className="text-sm uppercase tracking-wide">Back to top</span>
            {/* Text below the arrow */}
          </div>
        </button>
      </div>
    </Layout>
  );
};
