import React from 'react';
import { FaStar, FaPlus } from 'react-icons/fa';

const ProductGrid = ({ title, products, showViewAll = true }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              {title}
            </h2>
            <div className="w-16 h-1 bg-green-500 mt-2"></div>
          </div>
          {showViewAll && (
            <button className="text-sm sm:text-base font-semibold text-gray-700 hover:text-green-500 transition-colors flex items-center gap-2">
              View All <span>→</span>
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100 aspect-square">
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    -{product.discount}%
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.backgroundColor = '#f3f4f6';
                  }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1 line-clamp-2 min-h-[2.5rem]">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={10}
                      className={i < (product.rating || 5) ? 'text-[#F6B76F]' : 'text-gray-300'}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through mr-2">
                        Rs {product.originalPrice}
                      </span>
                    )}
                    <span className="text-sm sm:text-base font-bold text-gray-900">
                      Rs {product.price}
                    </span>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full text-white flex items-center justify-center transition-colors">
                    <FaPlus size={10} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
