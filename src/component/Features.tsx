const Features = () => {
  return (
    <section 
      className="relative py-20 md:py-24 lg:py-28 overflow-hidden"
      style={{
        background:"#EFAAACDB"
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Shopping Bags */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Blue bag - top left */}
          <img
            src="/images/bag-blue.png"
            alt=""
            className="
              absolute 
              left-8 md:left-12 
              -top-[30px] md:-top-39 
              w-[249.59px] h-[249.59px]
              opacity-100
              rotate-0
              drop-shadow-2xl
              hidden md:block
            "
          />

          {/* Green bag small - top right */}
<img
  src="/images/bag-green.png"
  alt=""
  className="
    absolute
    top-[-150px]
    right-[170px]
    w-[145.91px]
    h-[188.88px]
    rounded-[12px]
    opacity-100
    rotate-0
    drop-shadow-2xl
    hidden lg:block
  "
/>


          {/* Green bag small - top right */}
<img
  src="/images/bag-green.png"
  alt=""
  className="
    absolute
    top-[150px]
    left-[-60px]
    w-[268.8px]
    h-[189.14px]
    rounded-[12px]
    opacity-100
    rotate-0
    drop-shadow-2xl
    hidden lg:block
  "
/>


         {/* Yellow bag small - middle/bottom left */}
<img
  src="/images/bag-yellow.png"
  alt=""
  className="
    absolute
    top-[150px]
    left-[270px]
    w-[162px]
    h-[210px]
    rounded-[12px]
    opacity-100
    rotate-0
    drop-shadow-2xl
    hidden md:block
  "
/>


          {/* Yellow bag large - right side middle */}
<img
  src="/images/bag-yellow.png"
  alt=""
  className="
    absolute
    top-[20px]
    left-[1100px]
    w-[268.8px]
    h-[189.14px]
    rounded-[12px]
    opacity-100
    rotate-0
    drop-shadow-2xl
    hidden lg:block
  "
/>

          {/* Purple bag - bottom right */}
<img
  src="/images/bag-purple.png"
  alt=""
  className="
    absolute
    top-[200px]
    right-[200px]
    w-[183px]
    h-[183px]
    rounded-[12px]
    opacity-100
    rotate-0
    drop-shadow-2xl
    hidden sm:block
  "
/>

        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
            Cool Cloths, Hot Deals
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            – Only at Tulsi Baug!
          </h2>
          
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            Style Mode: Tulsi Baug
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center">
              Shop Now →
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-gray-200 flex items-center gap-2 w-full sm:w-auto justify-center">
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
