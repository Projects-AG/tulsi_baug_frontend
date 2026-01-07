import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] md:min-h-[600px] lg:h-[665px]">
      {/* Background image layer aligned to the right, enlarged and faded */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/public/bg-home-n.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.0)"
        }}
      />

      {/* Left Arrow */}
      <button className="hidden lg:flex absolute left-4 lg:left-25 top-1/2 -translate-y-1/2 
        w-8 h-8 lg:w-10 lg:h-10 bg-[#E05559] rounded-full border-none 
        items-center justify-center shadow-lg z-10 hover:bg-gray-100 transition-colors">
        <FaArrowLeft className="text-white" size={20} />
      </button>

      {/* Right Arrow */}
      <button className="hidden lg:flex absolute right-4 lg:right-25 top-1/2 -translate-y-1/2 
        w-10 h-10 lg:w-10 lg:h-10 bg-[#E05559] rounded-full border-none 
        items-center justify-center shadow-lg z-10 hover:bg-gray-100 transition-colors">
        <FaArrowRight className="text-white" size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
