import React, { useState } from "react";
import { FaStar, FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";

const BestSelling = () => {
  const [active, setActive] = useState("Men");

  const products = [
    {
      category: "Men",
      title: "Streetwear Essentials",
      price: 300,
      image: "/images/men-home.png",
    },
    {
      category: "Women",
      title: "Ethnic Fusion",
      price: 250,
      image: "/images/women-home.png",
    },
    {
      category: "Boy",
      title: "Active Playwear",
      price: 350,
      image: "/images/boy-home.png",
    },
    {
      category: "Girl",
      title: "Festive Wear",
      price: 500,
      image: "/images/girl-home.png",
    },
  ];

  return (
    <section className="bg-[#E84F300A] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Decorations */}
      {/* Top Right */}
      <img 
        src="/images/bg-home.png" 
        alt="" 
        className="absolute object-contain pointer-events-none hidden lg:block"
        style={{ 
          width: '450px',
          height: '420px',
          top: '0px',
          right: '-200px',
          opacity: 0.5
        }}
      />
      {/* Bottom Left */}
      <img 
        src="/images/bg-home.png" 
        alt="" 
        className="absolute object-contain pointer-events-none hidden lg:block"
        style={{ 
          width: '525px',
          height: '525px',
          bottom: '-140px',
          left: '-320px',
          opacity: 0.5
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">
          Best Selling Product
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="bg-green-500 rounded-full p-1 flex gap-1 sm:gap-2 flex-wrap justify-center">
            {["Men", "Women", "Boy", "Girl"].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-4 sm:px-6 py-1.5 rounded-full text-xs sm:text-sm font-medium transition
                ${active === item ? "bg-white text-black" : "text-white"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Wrapper */}
        <div className="relative">

          {/* Left Arrow */}
          <button className="hidden lg:block absolute -left-8 xl:-left-14 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-[100]">
            <FaArrowLeft className="text-gray-700" size={16} />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-visible relative hover:shadow-xl transition-shadow mx-auto w-full max-w-[230px]"
              style={{ height: "352px", position: 'relative', top: '0' }}
            >
             {/* Image Section */}
              <div className="bg-[#efaaac] h-[180px] rounded-t-2xl relative overflow-visible">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute left-1/2 -translate-x-1/2 block object-cover pointer-events-none"
                  style={{ top: '-40px', width: '280px', height: '220px', zIndex: 50 }}
                />
              
              </div>


              {/* Content */}
              <div className="p-5 text-left">
                <p className="text-xs text-gray-500 mb-1">
                  {item.category} Category
                </p>

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                {/* Stars */}
                <div className="flex justify-left gap-1 mb-4 text-[#F6B76F]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base">
                    Rs {item.price}
                  </span>

                  <button className="bg-green-500 w-9 h-9 rounded-full text-white flex items-center justify-center">
                    <FaPlus size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden lg:block absolute -right-8 xl:-right-14 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-[100]">
            <FaArrowRight className="text-gray-700" size={16} />
          </button>
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button className="text-sm font-medium flex items-center gap-2 mx-auto">
            View All <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default BestSelling;
