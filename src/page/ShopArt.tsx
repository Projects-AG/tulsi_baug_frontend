import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Color {
  name: string;
  value: string;
}

const ShopArt = () => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('black');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string>('/images/product-main.jpg');

  const thumbnails: string[] = [
    '/images/sub1.jpg',
    '/images/sub2.jpg',
    '/images/sub3.jpg',
    '/images/sub4.jpg',
    '/images/sub5.jpg'
  ];

  const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];
  const colors: Color[] = [
    { name: 'cyan', value: '#00BCD4' },
    { name: 'black', value: '#000000' },
    { name: 'purple', value: '#9C27B0' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="text-gray-400">/</span>
          <Link to="/women" className="text-blue-600 hover:underline">Women</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Dresses</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="relative">
        {/* Left Background Image */}
        <div className="absolute left-0 top-0 bottom-0 w-[calc((100%-80rem)/2)] hidden xl:block">
          <img 
            src="/images/bg-home.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Background Image */}
        <div className="absolute right-0 top-0 bottom-0 w-[calc((100%-80rem)/2)] hidden xl:block">
          <img 
            src="/images/bg-home.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left - Thumbnail Gallery */}
            <div className="lg:col-span-1">
              <div className="flex lg:flex-col gap-2">
                {thumbnails.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 border rounded cursor-pointer overflow-hidden ${
                      selectedImage === img ? 'border-orange-400 border-2' : 'border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Center - Main Product Image */}
            <div className="lg:col-span-3">
              <div className="w-full h-auto rounded overflow-hidden bg-gray-50">
                <img
                  src="/images/main-sub.jpg"
                  alt="Product Details"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>

            {/* Middle - Product Details */}
            <div className="lg:col-span-4">
              {/* Store Name */}
              <div className="mb-1">
                <Link to="/store/adbuck" className="text-[15px] text-[#75BD4B] hover:underline font-bold">
                  Visit the ADBUCK Store
                </Link>
              </div>

              {/* Product Title */}
              <h1 className="text-lg font-normal text-gray-900 mb-2 leading-tight">
                ADBUCKS Women Denim frock<br />
                Oversized comfort stricedsleeves<br />
                casual
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <span className="text-sm font-medium text-orange-500">4.5</span>
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? 'fill-current' : i === 4 ? 'fill-current opacity-50' : 'fill-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-blue-600">125 reviews</span>
              </div>

              {/* Size Selection */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Size</h3>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 border rounded text-xs font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-gray-500 ring-1 ring-gray-500 bg-gray-50'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Color</h3>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-7 h-7 rounded-full border-0 ${
                        selectedColor === color.name ? '  ' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-3 pb-3 border-b border-gray-200">
                <div className="text-sm text-gray-700">
                  <span className="font-normal">Price: </span>
                  <span className="font-semibold text-gray-900">500.00</span>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-4">
                <div className="text-sm text-gray-700">
                  <span className="font-normal">Available: </span>
                  <span className="text-green-600 font-semibold">In Stock</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-4">
                <button className="px-8 py-2.5 bg-[#75BD4B] text-white rounded-md text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Right Sidebar - Purchase Details */}
            <div className="lg:col-span-4">
              <div className="border border-gray-300 rounded-lg p-4">
                {/* Price */}
                <div className="mb-3">
                  <h2 className="text-xl font-normal text-gray-900">Rs 500.00</h2>
                </div>

                {/* Delivery Info */}
                <div className="mb-3 text-xs">
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Free delivery </span>
                    <span className="font-bold">Thursday, 31 July. </span>
                    <Link to="#" className="text-blue-600 hover:underline font-medium">Details</Link>
                  </p>
                  <p className="text-gray-700">
                    Or Fastest delivery <span className="font-bold">Thursday, 31 July. </span>
                    <Link to="#" className="text-blue-600 hover:underline font-medium">Details</Link>
                  </p>
                </div>

                {/* Location */}
                <div className="mb-3">
                  <Link to="#" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Delivering to pune 411008 Update location
                  </Link>
                </div>

                {/* Stock Status */}
                <div className="mb-3">
                  <p className="text-base text-green-600 font-medium">In stock</p>
                </div>

                {/* Shipping Details */}
                <div className="mb-3 text-xs text-gray-600 space-y-0.5">
                  <p className="flex justify-between">
                    <span className="text-gray-500">Ships from</span>
                    <span className="text-gray-700">Tule Baug</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-500">Sold by</span>
                    <span className="text-gray-700">Z-Platform</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-500">Payment</span>
                    <span className="text-blue-600">Secure transaction</span>
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="mb-3">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Quantity: 1
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-16 px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 bg-gray-50"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className="w-full py-2 bg-[#4CAF50] text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors shadow-sm">
                    Add to Cart
                  </button>
                  <button className="w-full py-2 bg-[#FF5722] text-white rounded-full text-sm font-medium hover:bg-red-600 transition-colors shadow-sm">
                    Buy Now
                  </button>
                  <button className="w-full py-1.5 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-normal hover:bg-gray-50 transition-colors">
                    Add to Wish List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShopArt;
