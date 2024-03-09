"use client";
import React, { useState } from "react";

const Home = () => {
  const mainItems = [
    {
      slide: "slide",
      item: "fashion",
      src: "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    },
    {
      slide: "slide",
      item: "fashion",
      src: "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    },
    {
      slide: "slide",
      item: "fashion",
      src: "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
    },
    {
      slide: "slide",
      item: "fashion",
      src: "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % mainItems.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? mainItems.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div className="carousel w-full mt-5">
        {mainItems.map((item, key) => {
          const isVisible = key === currentSlide;
          return (
            <div
              key={key}
              id={item.slide + (key + 1)}
              className={`carousel-item relative w-full ${
                isVisible ? "block" : "hidden"
              }`}
            >
              <img src={item.src} className="w-full" alt={`Slide ${key + 1}`} />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button onClick={handlePrevSlide} className="btn btn-circle">
                  ❮
                </button>
                <button onClick={handleNextSlide} className="btn btn-circle">
                  ❯
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
