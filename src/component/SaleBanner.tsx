import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SaleBanner = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images: string[] = [
    "/images/sale-banner1.png",
    "/images/sale-banner2.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play carousel (only for mobile/tablet)
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Mobile & Tablet Carousel (below lg) */}
      <div className="relative w-full mt-[2px] overflow-hidden group lg:hidden">
        {/* Carousel Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <img
                src={image}
                alt={`Sale Banner ${index + 1}`}
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-gray-700" size={16} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-gray-700" size={16} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                currentSlide === index 
                  ? "bg-white w-6 sm:w-8" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View (lg and above) - Side by Side */}
      <div className="hidden lg:flex mt-[2px] justify-start">
        <img
          src="/images/sale-banner1.png"
          alt="Sale Banner"
          className="w-[960px] h-[500px] object-cover"
        />

        <img
          src="/images/sale-banner2.png"
          alt="Sale Banner 2"
          className="w-[960px] h-[500px] object-cover"
        />
      </div>
    </>
  );
};

export default SaleBanner;
