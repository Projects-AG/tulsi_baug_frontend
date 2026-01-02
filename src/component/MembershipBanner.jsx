import React from 'react';

const MembershipBanner = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-green-400 to-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get your membership
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Today!
          </h3>

          {/* Description */}
          <p className="text-white text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Join our community and enjoy exclusive benefits, special discounts, and early access to new collections.
          </p>

          {/* CTA Button */}
          <button className="bg-white hover:bg-gray-100 text-green-500 font-bold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Join Now →
          </button>

          {/* Benefits List */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-2">🎁</div>
              <h4 className="text-white font-semibold text-base sm:text-lg mb-1">
                Exclusive Deals
              </h4>
              <p className="text-white text-xs sm:text-sm opacity-90">
                Get access to members-only discounts
              </p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-2">🚚</div>
              <h4 className="text-white font-semibold text-base sm:text-lg mb-1">
                Free Shipping
              </h4>
              <p className="text-white text-xs sm:text-sm opacity-90">
                Enjoy free delivery on all orders
              </p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-2">⭐</div>
              <h4 className="text-white font-semibold text-base sm:text-lg mb-1">
                Early Access
              </h4>
              <p className="text-white text-xs sm:text-sm opacity-90">
                Shop new arrivals before everyone
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipBanner;
