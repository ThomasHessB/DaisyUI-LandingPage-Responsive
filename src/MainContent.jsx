import React from "react";

const MainContent = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Welcome to Our Site!
        </h2>
        <p className="text-gray-700 mb-4">
          {/* Introductory text or a brief description of your site or product. */}
        </p>

        {/* Additional rich content sections */}
        <div className="my-8">
          {/* For example, a grid of features or services */}
        </div>

        {/* Glassmorphism effect image */}
        <div className="parallax-container">
          <img
            src="https://picsum.photos/id/43/1920/1080"
            className="parallax-image"
          />
          {/* Content on top of the parallax image */}
        </div>

        {/* Further content */}
      </div>
    </div>
  );
};

export default MainContent;
