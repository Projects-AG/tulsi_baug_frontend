import { SyntheticEvent } from 'react'

interface ProductProps {
  name?: string;
  price?: string;
  originalPrice?: string;
  discount?: number;
  image?: string;
  isNew?: boolean;
  rating?: number;
  reviews?: number;
}

interface ProductCard2Props {
  product?: ProductProps;
}

const ProductCard2 = ({ product = {} }: ProductCard2Props) => {
    const { name, price, originalPrice, discount, image, isNew } = product;

  return (
    <div className="group cursor-pointer text-center">
      {/* Product Image */}
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden mb-4 aspect-[3/4] flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e: SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = "https://via.placeholder.com/300x400?text=Product+Image";
          }}
        />
        {discount && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            Sale!
          </span>
        )}
        {isNew && (
          <span className="absolute top-10 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
            New
          </span>
        )}
      </div>

      {/* Product Info - centered below image */}
      <div className="px-1">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 truncate">{name}</h3>
        <div className="text-sm text-gray-800 font-bold mb-3">
          {originalPrice ? `$${price} – $${originalPrice}` : `$${price}`}
        </div>

        {/* Color options */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 bg-black rounded-full border" />
          <span className="w-3 h-3 bg-[#e9cdb7] rounded-full border" />
          <span className="text-sm text-gray-600">+3</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard2
