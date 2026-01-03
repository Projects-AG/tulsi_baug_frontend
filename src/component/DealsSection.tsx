const DealsSection = () => {
  return (
    <section className="py5 px-4 md:py-10 lg:py-16 sm:px-6 lg:px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-5 items-center">
        {/* Left - Text */}
        <div className="order-1 md:order-1 lg:order-1 lg:-mt-30">
          <p className="text-sm tracking-wider text-red-500 font-semibold uppercase mb-4">Special Offer</p>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 font-public-sans">Extra Sale 30% off</h2>

          <p className="text-gray-500 text-base md:text-lg max-w-xl mb-6">Bucket toy with a contrast colored handle. <br /> Perfect for playing on the beach.</p>

          {/* Countdown */}
          <div className="flex items-center gap-6 text-3xl md:text-4xl font-semibold mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 md:w-16 text-center">00</div>
              <div className="text-2xl text-gray-400">:</div>
              <div className="w-12 md:w-16 text-center">00</div>
              <div className="text-2xl text-gray-400">:</div>
              <div className="w-12 md:w-16 text-center">00</div>
              <div className="text-2xl text-gray-400">:</div>
              <div className="w-12 md:w-16 text-center">00</div>
            </div>
          </div>

          <button className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md transition font-medium">
            Get only $29.00
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Right - Images (side-by-side on sm+) */}
        <div className="order-2 md:order-2 lg:order-2 flex justify-center lg:justify-end lg:-mr-10">
          <div className="relative w-full max-w-4xl">
            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 items-center justify-center">
              <img src="/dealsec-img-1.jpg" alt="product" className="rounded-2xl w-full md:w-64 lg:w-80 h-auto object-cover shadow-lg border" />
              <img src="/dealsec-img-2.jpg" alt="product" className="rounded-2xl w-full md:w-64 lg:w-80 h-auto object-cover shadow-lg border transform lg:translate-y-8" />
            </div>

            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e05659] text-white rounded-full md:w-24 md:h-24 lg:w-32 lg:h-32 flex-col items-center justify-center shadow-lg z-10">
              <span className="md:text-sm lg:text-2xl opacity-80 font-semibold">Save</span>
              <span className="md:text-xl lg:text-4xl font-bold">30%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DealsSection
