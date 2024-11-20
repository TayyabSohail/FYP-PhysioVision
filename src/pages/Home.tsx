import { Layout } from "../layout"; // Layout already includes Header
import homePageImage1 from "../assets/images/home_page.png";
import homePageImage2 from "../assets/images/2home_page.png";
import homePageImage3 from "../assets/images/3home_page.png";
import { useEffect, useState } from "react";

export const Home = () => {
  const images = [homePageImage1, homePageImage2, homePageImage3];
  const extendedImages = [...images, ...images]; // Duplicate the images array for infinite loop
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedImages.length); // Cycle through images
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [extendedImages.length]);

  // Dynamic height adjustment for different images
  const getImageHeight = (index: number) => {
    const adjustedIndex = index % images.length; // Adjust to original images length
    if (adjustedIndex === 0) return "h-[615px]"; // First image keeps default height
    if (adjustedIndex === 1) return "h-[635px]"; // Second image is slightly taller
    return "h-[640px]"; // Third image is slightly taller
  };

  return (
    <Layout>
      <div className="relative w-full overflow-hidden mt-28 mx-auto">
        {/* Image container to hold all images in individual slides */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Slide container based on currentIndex
          }}
        >
          {extendedImages.map((image, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 bg-cover rounded-md shadow-lg ${getImageHeight(
                index
              )}`}
              style={{
                backgroundImage: `url(${image})`, // Dynamic image
                backgroundPosition: index === 0 ? "bg-top" : "bg-center", // Adjust position
              }}
            ></div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
