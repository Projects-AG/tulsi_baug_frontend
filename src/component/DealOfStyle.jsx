import React from 'react';

const DealOfStyle = () => {
  const categories = [
    { id: 1, image: '/images/category-1.png', title: 'Casual Wear' },
    { id: 2, image: '/images/category-2.png', title: 'Western Wear' },
    { id: 3, image: '/images/category-3.png', title: 'Ethnic Wear' },
    { id: 4, image: '/images/category-4.png', title: 'Kids Wear' },
    { id: 5, image: '/images/category-5.png', title: 'Formal Wear' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Deal Of Show Style
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Image */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.backgroundColor = '#f3f4f6';
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23f3f4f6"/%3E%3C/svg%3E';
                  }}
                />
              </div>
              
              {/* Title */}
              <h3 className="mt-4 text-sm sm:text-base lg:text-lg font-semibold text-gray-800 text-center group-hover:text-green-500 transition-colors">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealOfStyle;
