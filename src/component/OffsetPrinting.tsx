import { SyntheticEvent } from 'react';

interface PrintingProduct {
  id: number;
  image: string;
  title: string;
  price: string;
}

const OffsetPrinting = () => {
  const printingProducts: PrintingProduct[] = [
    { id: 1, image: '/images/offset-1.png', title: 'Zone Sweatshirt', price: '$25.99' },
    { id: 2, image: '/images/offset-2.png', title: "Zoo Men's t-shirt", price: '$15.99' },
    { id: 3, image: '/images/offset-3.png', title: 'Toddler T-shirt', price: '$12.99' },
    { id: 4, image: '/images/offset-4.png', title: 'Fine Jersey Tee', price: '$18.99' },
    { id: 5, image: '/images/offset-5.png', title: 'Kids Hoodie', price: '$22.99' },
    { id: 6, image: '/images/offset-6.jpg', title: 'Youth Short Sleeve Tee', price: '$14.99' },
    { id: 7, image: '/images/offset-7.png', title: 'Midweight Cotton Tee', price: '$16.99' },
    { id: 8, image: '/images/offset-8.png', title: 'Hooded Sweatshirt', price: '$28.99' },
  ];

  return (
    <section
      className="py-12 md:py-16 lg:py-20 min-h-screen"
      style={{
        backgroundImage: "url('/images/bg-home2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative text-center mb-10 md:mb-14">
          <h2
            className="opacity-100 font-plus-jakarta font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-tight sm:leading-[1.2] md:leading-[1.4] uppercase bg-[linear-gradient(269.27deg,#E84F30_13.42%,#75BD4B_100%)] bg-clip-text text-transparent rotate-0 text-center px-4"
          >
            HIGH-QUALITY OFFSET PRINTING
          </h2>
         
          <p className="font-plus-jakarta font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[46px] text-center mt-6 sm:mt-8 mx-auto px-4">
           Featured products
          </p>
          <span className="text-sm sm:text-base">What's more, we do it right!</span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {printingProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-square bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e: SyntheticEvent<HTMLImageElement>) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                />
              </div>
              {/* Product Title and Price */}
              <div className="p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-sm sm:text-base font-bold text-gray-900 mt-1">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffsetPrinting;
