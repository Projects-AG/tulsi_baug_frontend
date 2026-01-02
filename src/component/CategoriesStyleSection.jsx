import React from 'react'

const CategoriesStyleSection = () => {
  const categories = [
    { name: 'Saree', count: 15, image: '/categories-img-1.jpg' },
    { name: 'Girl Dress', count: 8, image: '/categories-img-2.png' },
    { name: 'Shirt', count: 18, image: '/categories-img-3.png' },
    { name: 'Festival', count: 9, image: '/categories-img-4.png' },
    { name: 'Kurati', count: 6, image: '/categories-img-5.png' }
  ];

  return (
    <section className="max-w-[1600px] py-8 sm:py-12 md:py-16 lg:py-10 px-3 sm:px-4 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        Cloth's of Every Style
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-10 md:mb-12 lg:mb-14" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        What's more, we do it right!
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105"
          >
            <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full overflow-hidden mb-2 sm:mb-3 md:mb-4">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 m-0">
                {category.name}
              </h3>
              <span className="text-xs sm:text-sm text-gray-400 font-normal lg:-mt-4">
                {category.count}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient Line */}
      <div 
        className="w-full h-1 sm:h-1.5 mt-6 sm:mt-8 md:mt-10"
        style={{
          background: 'linear-gradient(90deg, #EAC645 0%, #F2A173 17.57%, #97DEC0 49.15%, #6C87E6 59.32%, #CE4EEE 78.05%, #EF5B2C 100%)'
        }}
      ></div>
    </section>
  )
}

export default CategoriesStyleSection