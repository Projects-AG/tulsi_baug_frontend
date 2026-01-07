import { FaShoppingCart } from 'react-icons/fa';

interface Product {
  id: number;
  img: string;
  badgeout?: string;
  badge?: string;
  badge1?: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  brand: string;
  price: string;
  oldPrice: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    img: "/images/saree-1.jpg",
    badgeout: "Hot",
    badge: "Sale!",
    badge1:"New",
    badgeColor: "bg-pink-500",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
  {
    id: 2,
    img: "/images/saree2.png",
    badgeout: "Hot",
    badgeColor: "bg-[#44704D]",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
  {
    id: 3,
    img: "/images/saree-3.png",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
  {
    id: 4,
    img: "/images/saree-4.jpg",
    badgeout: "Hot",
    badgeColor: "bg-[#11B196]",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
  {
    id: 5,
    img: "/images/saree-5.png",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
   {
    id: 6,
    img: "/images/kurti1.png",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
   {
    id: 7,
    img: "/images/kurti2.png",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
   {
    id: 8,
    img: "/images/kurti3.jpg",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
   {
    id: 9,
    img: "/images/kurti4.png",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
   {
    id: 10,
    img: "/images/kurti5.png",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
  {
   id: 11,
    img: "/images/shirt1.png",
    badgeout: "Hot",
    badge: "Sale!",
    badge1:"New",
    badgeColor: "bg-pink-500",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
  {
    id: 12,
    img: "/images/shirt2.jpg",
    badgeout: "Hot",
    badgeColor: "bg-[#44704D]",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
  {
    id: 13,
    img: "/images/shirt3.png",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
  {
    id: 14,
    img: "/images/shirt4.jpg",
    badgeout: "Hot",
    badgeColor: "bg-[#11B196]",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
  {
    id: 15,
    img: "/images/shirt5.jpg",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },

     {
    id: 16,
    img: "/images/dress1.png",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
   {
    id: 17,
    img: "/images/dress2.jpg",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
   {
    id: 18,
    img: "/images/dress3.png",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
   {
    id: 19,
    img: "/images/dress4.png",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
   {
    id: 20,
    img: "/images/dress5.jpg",
    badge: "",
    badgeColor: "",
    title: "Zone",
    subtitle: "Sweatshirt",
    brand: "By NextFood",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: 4.0,
  },
];

const ProductCard = () => {
  return (
    <section className="py-6 sm:py-10 lg:py-14 bg-white">
      <div className="max-w-[1300px] mx-auto px-3 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-2xl lg:text-[32px] font-bold text-center sm:text-left">Sare / Ethnic Dress</h2>
          <a className="text-pink-500 font-medium hover:underline mt-4 sm:mt-0">See More →</a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
         {products.filter((p) => p.id >= 1 && p.id <= 5).map((p) => (
            <div
              key={p.id}
              className="transition transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative p-1 sm:p-3 lg:p-4">
                <div className="w-full h-[140px] sm:h-[160px] lg:h-[181px] overflow-hidden rounded-lg sm:rounded-xl">
                  <img
                    src={p.img}
                    alt=""
                    className="w-full h-[140px] sm:h-[180px] lg:h-[220px] object-cover object-top"
                  />
                </div>

                {p.badge && (
                  <span
                    className={`absolute top-[10px] sm:top-[20px] left-[8px] sm:left-[15px] w-[35px] sm:w-[40px] h-[18px] sm:h-[20px] bg-[#2EBB77] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-[3px]`}
                  >
                    {p.badge}
                  </span>
                )}

                {p.badge1 && (
                  <span
                    className="absolute top-[32px] sm:top-[45px] left-[8px] sm:left-[15px] w-[35px] sm:w-[40px] h-[18px] sm:h-[20px] bg-[#B479D9] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-[3px]"
                  >
                    {p.badge1}
                  </span>
                )}

                {p.badgeout && (
                  <span
                    className="absolute top-[-5px] left-[-5px] w-[45px] sm:w-[50px] h-[22px] sm:h-[25px] bg-[#F74B81] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-tl-[10px] rounded-br-[15px] flex items-center justify-center"
                  >
                    {p.badgeout}
                  </span>
                )}
              </div>

              <div className="px-1.5 sm:px-3 lg:px-4 pb-2 sm:pb-3 lg:pb-4">
                <p className="text-[9px] sm:text-xs lg:text-sm text-gray-400 mb-0.5 sm:mb-1">Snack</p>

                <h3 className="font-bold text-[12px] sm:text-base lg:text-lg">{p.title}</h3>
                <p className="text-[11px] sm:text-sm">{p.subtitle}</p>

                <div className="flex items-center gap-1 my-1 sm:my-2 text-yellow-400 text-[9px] sm:text-xs lg:text-sm">
                  ★ <span className="text-gray-500">({p.rating})</span>
                </div>

                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 mb-1.5 sm:mb-2 lg:mb-3">By NestFood</p>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[12px] sm:text-base lg:text-lg">{p.price}</span>
                    <span className="text-[9px] sm:text-xs lg:text-sm line-through text-gray-400 ml-1 sm:ml-2">
                      {p.oldPrice}
                    </span>
                  </div>

                  <button className="bg-[#FF5A5F] hover:bg-[#E94E4E] text-white text-[9px] sm:text-xs lg:text-sm px-1.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md sm:rounded-lg flex items-center gap-0.5 sm:gap-1 lg:gap-2">
                    <FaShoppingCart />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Short Kurti Section */}
      <div className="w-full px-3 sm:px-6 md:px-8 bg-[#75BD4B0F] mt-8 sm:mt-12 lg:mt-16 py-4 sm:py-6 lg:py-8">
        <h3 className="text-lg sm:text-2xl lg:text-[32px] font-bold text-center sm:text-left mb-4 sm:mb-8 lg:mb-10">Short Kurti</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {products.filter((p) => p.id >= 6 && p.id <= 10).map((p) => (
            <div
              key={p.id}
              className="transition transform hover:scale-105"
            >
              <div className="relative p-1 sm:p-3 lg:p-4">
                <div className="w-full h-[140px] sm:h-[160px] lg:h-[181px] overflow-hidden rounded-lg sm:rounded-xl">
                  <img
                    src={p.img}
                    alt=""
                    className="w-full h-[140px] sm:h-[180px] lg:h-[220px] object-cover object-top"
                  />
                </div>

                {p.badge && (
                  <span
                    className={`absolute top-[10px] sm:top-[20px] left-[8px] sm:left-[15px] w-[35px] sm:w-[40px] h-[18px] sm:h-[20px] bg-[#2EBB77] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-[3px]`}
                  >
                    {p.badge}
                  </span>
                )}

                {p.badge1 && (
                  <span
                    className="absolute top-[32px] sm:top-[45px] left-[8px] sm:left-[15px] w-[35px] sm:w-[40px] h-[18px] sm:h-[20px] bg-[#B479D9] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-[3px]"
                  >
                    {p.badge1}
                  </span>
                )}

                {p.badgeout && (
                  <span
                    className="absolute top-[-5px] left-[-5px] w-[45px] sm:w-[50px] h-[22px] sm:h-[25px] bg-[#F74B81] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-tl-[10px] rounded-br-[15px] flex items-center justify-center"
                  >
                    {p.badgeout}
                  </span>
                )}
              </div>

              <div className="px-1.5 sm:px-3 lg:px-4 pb-2 sm:pb-3 lg:pb-4">
                <p className="text-[9px] sm:text-xs lg:text-sm text-gray-400 mb-0.5 sm:mb-1">Snack</p>

                <h3 className="font-bold text-[12px] sm:text-base lg:text-lg">{p.title}</h3>
                <p className="text-[11px] sm:text-sm">{p.subtitle}</p>

                <div className="flex items-center gap-1 my-1 sm:my-2 text-yellow-400 text-[9px] sm:text-xs lg:text-sm">
                  ★ <span className="text-gray-500">({p.rating})</span>
                </div>

                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 mb-1.5 sm:mb-2 lg:mb-3">By NestFood</p>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[12px] sm:text-base lg:text-lg">{p.price}</span>
                    <span className="text-[9px] sm:text-xs lg:text-sm line-through text-gray-400 ml-1 sm:ml-2">
                      {p.oldPrice}
                    </span>
                  </div>

                  <button className="bg-[#FF5A5F] hover:bg-[#E94E4E] text-white text-[9px] sm:text-xs lg:text-sm px-1.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md sm:rounded-lg flex items-center gap-0.5 sm:gap-1 lg:gap-2">
                    <FaShoppingCart />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
      {/* Formal Shirts Section */}
      <div className="max-w-[1300px] mx-auto px-3 sm:px-6 md:px-8 mt-8 sm:mt-12 lg:mt-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-2xl lg:text-[32px] font-bold text-center sm:text-left">Formal Shirts</h2>
          <a className="text-pink-500 font-medium hover:underline mt-4 sm:mt-0">See More →</a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
         {products.filter((p) => p.id >= 11 && p.id <= 15).map((p) => (
            <div
              key={p.id}
              className="transition transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative p-1 sm:p-3 lg:p-4">
                <div className="w-full h-[140px] sm:h-[160px] lg:h-[181px] overflow-hidden rounded-lg sm:rounded-xl">
                  <img
                    src={p.img}
                    alt=""
                    className="w-full h-[140px] sm:h-[180px] lg:h-[220px] object-cover object-top"
                  />
                </div>

                {p.badge && (
                  <span
                    className={`absolute top-[10px] sm:top-[20px] left-[8px] sm:left-[15px] w-[35px] sm:w-[40px] h-[18px] sm:h-[20px] bg-[#2EBB77] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-[3px]`}
                  >
                    {p.badge}
                  </span>
                )}

                {p.badge1 && (
                  <span
                    className="absolute top-[32px] sm:top-[45px] left-[8px] sm:left-[15px] w-[35px] sm:w-[40px] h-[18px] sm:h-[20px] bg-[#B479D9] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-[3px]"
                  >
                    {p.badge1}
                  </span>
                )}

                {p.badgeout && (
                  <span
                    className="absolute top-[-5px] left-[-5px] w-[45px] sm:w-[50px] h-[22px] sm:h-[25px] bg-[#F74B81] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-tl-[10px] rounded-br-[15px] flex items-center justify-center"
                  >
                    {p.badgeout}
                  </span>
                )}
              </div>

              <div className="px-1.5 sm:px-3 lg:px-4 pb-2 sm:pb-3 lg:pb-4">
                <p className="text-[9px] sm:text-xs lg:text-sm text-gray-400 mb-0.5 sm:mb-1">Snack</p>

                <h3 className="font-bold text-[12px] sm:text-base lg:text-lg">{p.title}</h3>
                <p className="text-[11px] sm:text-sm">{p.subtitle}</p>

                <div className="flex items-center gap-1 my-1 sm:my-2 text-yellow-400 text-[9px] sm:text-xs lg:text-sm">
                  ★ <span className="text-gray-500">({p.rating})</span>
                </div>

                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 mb-1.5 sm:mb-2 lg:mb-3">By NestFood</p>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[12px] sm:text-base lg:text-lg">{p.price}</span>
                    <span className="text-[9px] sm:text-xs lg:text-sm line-through text-gray-400 ml-1 sm:ml-2">
                      {p.oldPrice}
                    </span>
                  </div>

                  <button className="bg-[#FF5A5F] hover:bg-[#E94E4E] text-white text-[9px] sm:text-xs lg:text-sm px-1.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md sm:rounded-lg flex items-center gap-0.5 sm:gap-1 lg:gap-2">
                    <FaShoppingCart />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dress Section */}
      <div className="w-full px-3 sm:px-6 md:px-8 bg-[#E84F300A] mt-8 sm:mt-12 lg:mt-16 py-4 sm:py-6 lg:py-8">
        <h3 className="text-lg sm:text-2xl lg:text-[32px] font-bold text-center sm:text-left mb-4 sm:mb-8 lg:mb-10">Dress</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {products.filter((p) => p.id >= 16 && p.id <= 20).map((p) => (
            <div
              key={p.id}
              className="transition transform hover:scale-105"
            >
              <div className="relative p-1 sm:p-3 lg:p-4">
                <div className="w-full h-[140px] sm:h-[160px] lg:h-[181px] overflow-hidden rounded-lg sm:rounded-xl">
                  <img
                    src={p.img}
                    alt=""
                    className="w-full h-[140px] sm:h-[180px] lg:h-[220px] object-cover object-top"
                  />
                </div>

                {p.badge && (
                  <span
                    className={`absolute top-[10px] sm:top-[20px] left-[8px] sm:left-[15px] w-[35px] sm:w-[40px] h-[18px] sm:h-[20px] bg-[#2EBB77] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-[3px]`}
                  >
                    {p.badge}
                  </span>
                )}

                {p.badge1 && (
                  <span
                    className="absolute top-[32px] sm:top-[45px] left-[8px] sm:left-[15px] w-[35px] sm:w-[40px] h-[18px] sm:h-[20px] bg-[#B479D9] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-[3px]"
                  >
                    {p.badge1}
                  </span>
                )}

                {p.badgeout && (
                  <span
                    className="absolute top-[-5px] left-[-5px] w-[45px] sm:w-[50px] h-[22px] sm:h-[25px] bg-[#F74B81] text-white text-[8px] sm:text-[10px] font-semibold px-1 py-0.5 rounded-tl-[10px] rounded-br-[15px] flex items-center justify-center"
                  >
                    {p.badgeout}
                  </span>
                )}
              </div>

              <div className="px-1.5 sm:px-3 lg:px-4 pb-2 sm:pb-3 lg:pb-4">
                <p className="text-[9px] sm:text-xs lg:text-sm text-gray-400 mb-0.5 sm:mb-1">Snack</p>

                <h3 className="font-bold text-[12px] sm:text-base lg:text-lg">{p.title}</h3>
                <p className="text-[11px] sm:text-sm">{p.subtitle}</p>

                <div className="flex items-center gap-1 my-1 sm:my-2 text-yellow-400 text-[9px] sm:text-xs lg:text-sm">
                  ★ <span className="text-gray-500">({p.rating})</span>
                </div>

                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 mb-1.5 sm:mb-2 lg:mb-3">By NestFood</p>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[12px] sm:text-base lg:text-lg">{p.price}</span>
                    <span className="text-[9px] sm:text-xs lg:text-sm line-through text-gray-400 ml-1 sm:ml-2">
                      {p.oldPrice}
                    </span>
                  </div>

                  <button className="bg-[#FF5A5F] hover:bg-[#E94E4E] text-white text-[9px] sm:text-xs lg:text-sm px-1.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md sm:rounded-lg flex items-center gap-0.5 sm:gap-1 lg:gap-2">
                    <FaShoppingCart />
                    Add
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

export default ProductCard;
