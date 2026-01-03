const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] md:min-h-[600px] lg:h-[665px]">
      {/* Background image layer aligned to the right, enlarged and faded */}
     <div
  className="absolute inset-0 -z-20"
  style={{
    backgroundImage: "url('/images/bg-1.jpg')",
    backgroundSize: "100% auto",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    filter: "blur(4px)",
    transform: "scale(1.0)"
  }}
/>


      {/* White translucent overlay with moderate blur (30% opacity) */}
     <div className="absolute inset-0 bg-white/70 -z-10" />


      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">

          {/* LEFT IMAGE */}
          <div className="relative hidden lg:flex justify-center lg:justify-start items-end">
            {/* Geometric red/pink parallelogram shape behind models */}
            <div 
              className="absolute left-0 top-40 lg:top-60 w-[300px] lg:w-[560px] h-[200px] lg:h-[300px] bg-gradient-to-br from-red-400 to-pink-400 -z-20"
              style={{
                clipPath: 'polygon(21% 2%, 98% 24%, 101% 111%, 23% 107%)',
                boxShadow: '-20px 0 40px rgba(255, 192, 203, 0.6)'
              }}
            ></div>
            
            {/* Models Images */}
            <div className="relative w-full h-[500px] lg:h-[760px] z-10">
              <img
                src="/images/boy-h.png"
                alt="Boy Model"
                className="absolute left-[20%] lg:left-[126px] top-[-15px] w-[300px] lg:w-[586px] h-auto lg:h-[675px] rotate-0 opacity-100 object-contain z-[9999]"
              />
              <img
                src="/images/girl-h.png"
                alt="Girl Model"
                className="absolute left-[30%] lg:left-[170px] top-[7px] w-[250px] lg:w-[469px] h-auto lg:h-[750px] rotate-0 opacity-100 object-contain z-[9999]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left mt-0 lg:-mt-70">
            <span className="inline-block bg-[#F9E2E3] text-pink-600 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
              Create your own
            </span>

            <h1 className="font-plus-jakarta font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[68px] leading-tight sm:leading-[1.2] lg:leading-[81.6px] text-gray-900 mb-4 sm:mb-6">
              Affordable Street Finds <br className="hidden sm:block" />
              <span className="relative">
                Delivered
                
              </span>{" "}
              to Your Door!
            </h1>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Discover unique items from local vendors, all at unbeatable prices.
              Shop from the comfort of your home and enjoy the thrill of street shopping.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-[12px] font-semibold shadow-md transition w-full sm:w-auto">
                Shop Now →
              </button>

              <button className="flex items-center justify-center gap-2 text-black-700 font-semibold w-full sm:w-auto">
              
                How We Work
                 <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded-full text-black">
                  ▶
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
