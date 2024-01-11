import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "This product changed my life!",
    author: "Jane Doe",
    imageUrl: "https://picsum.photos/id/211/700/700",
  },
  {
    id: 2,
    text: "Incredible service and amazing support.",
    author: "John Smith",
    imageUrl: "https://picsum.photos/id/212/700/700",
  },
  // Add more testimonials as needed
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="flex justify-center items-center">
          <button onClick={goToPrevious}>{"<"}</button>
          <div className="w-1/2 mx-4">
            <img
              src={testimonials[activeIndex].imageUrl}
              alt="Testimonial"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600 mb-4">
              {testimonials[activeIndex].text}
            </p>
            <p className="font-bold">{testimonials[activeIndex].author}</p>
          </div>
          <button onClick={goToNext}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
