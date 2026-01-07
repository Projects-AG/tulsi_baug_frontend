import { FaStar, FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";

interface Product {
  vendor: string;
  title: string;
  price: number;
  image: string;
}

const BestSelling = () => {
  const products: Product[] = [
    {
      vendor: "By Rock",
      title: "Saree",
      price: 300,
      image: "/public/women-home1.png",
    },
    {
      vendor: "By Rock",
      title: "Saree",
      price: 250,
      image: "/public/women-home2.png",
    },
    {
      vendor: "By Rock",
      title: "Saree",
      price: 350,
      image: "/public/women-home3.png",
    },
    {
      vendor: "Girl Category",
      title: "Festive Wear",
      price: 500,
      image: "/public/women-home4.png",
    },
  ];

  return (
    <section className="bg-[#E84F300A] py-12 sm:py-16 lg:py-20 relative overflow-hidden over lg:mt-0 -mt-60">
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
          backgroundPosition: 'top center',
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
        <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 lg:pl-19">
          Best Selling Product
        </h2>

        {/* Cards Wrapper */}
        <div className="relative">

          {/* Left Arrow */}
           <button className="hidden lg:block absolute left-33 xl:left-34 top-30 -translate-y-1/2 
            w-7 h-7 bg-white rounded-[15px] border-none 
            flex items-center justify-center shadow-md z-[100] pl-1.5 ">
            
            <FaArrowLeft className="text-black" size={16} />
          </button>


        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 justify-center">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl relative transition-shadow mx-auto w-full"
              style={{ maxWidth: "220px", marginLeft: window.innerWidth >= 1024 ? "140px" : "0px" }}
            >
              {/* Image Section */}
            <div className="bg-[#efaaac] h-[120px] sm:h-[180px] lg:h-[170px] 
                        rounded-t-2xl 
                        flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <p className="text-xs text-gray-500 mb-1">
                  {item.vendor}
                </p>

                <h3 className="font-semibold text-base mb-2">
                  {item.title}
                </h3>

                {/* Stars */}
                <div className="flex justify-left gap-0.5 mb-3 text-[#F6B76F]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={10} className="sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base">
                    Rs {item.price}
                  </span>

                  <button className="bg-green-500 w-9 h-9 rounded-full text-white flex items-center justify-center hover:bg-green-600 transition-colors">
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>

         {/* Right Arrow */}
        <button className="hidden lg:block absolute -right-8 xl:right-30 top-30 -translate-y-1/2 
          w-7 h-7 bg-white rounded-[15px] border-none 
          flex items-center justify-center shadow-md z-[100] pl-1.5">

          <FaArrowRight className="text-black" size={16} />
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
