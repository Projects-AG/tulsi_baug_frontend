import React from 'react'

const FeatureProduct = () => {
  const products = [
    {
      id: 1,
      name: 'Zone Sweatshirt',
      price: '$19.95',
      originalPrice: '$159.95',
      image: '/feature-img-1.png',
      badges: [],
      colors: ['#111827', '#FDE68A', '#FBCFE8', '#60A5FA']
    },
    {
      id: 2,
      name: "Zoo Men's t-shirt",
      price: '$14.95',
      originalPrice: '$119.95',
      image: '/feature-img-2.png',
      badges: [],
      colors: ['#000000', '#F7E7CE']
    },
    {
      id: 3,
      name: 'Toddler T-shirt',
      price: '$26.00',
      image: '/feature-img-3.jpg',
      badges: [{ text: 'Hot', color: 'bg-orange-500' }],
      colors: ['#F97316', '#111827', '#FBCFE8']
    },
    {
      id: 4,
      name: 'Fine Jersey Tee',
      price: '$28.00',
      originalPrice: '$31.00',
      image: '/feature-img-4.png',
      badges: [
        { text: '-10%', color: 'bg-emerald-500' },
        { text: 'Hot', color: 'bg-orange-500' }
      ],
      colors: ['#10B981', '#34D399']
    },
    {
      id: 5,
      name: 'Premium Cotton Tee',
      price: '$22.00',
      originalPrice: '$35.00',
      image: '/feature-img-5.png',
      badges: [
        { text: 'Sale!', color: 'bg-emerald-500' },
        { text: 'New', color: 'bg-purple-500' }
      ],
      colors: ['#7C3AED', '#FDE68A', '#FBCFE8', '#60A5FA', '#111827']
    },
    {
      id: 6,
      name: 'Classic Polo Shirt',
      price: '$32.00',
      originalPrice: '$45.00',
      image: '/feature-img-6.png',
      badges: [
        { text: 'Sale!', color: 'bg-emerald-500' },
        { text: 'New', color: 'bg-purple-500' }
      ],
      colors: ['#111827', '#FDE68A']
    },
    {
      id: 7,
      name: 'Summer Collection',
      price: '$29.00',
      originalPrice: '$42.00',
      image: '/feature-img-7.jpg',
      badges: [
        { text: 'Sale!', color: 'bg-emerald-500' },
        { text: 'New', color: 'bg-purple-500' }
      ],
      colors: ['#F59E0B', '#FB7185', '#34D399']
    },
    {
      id: 8,
      name: 'Designer Shirt',
      price: '$38.00',
      image: '/feature-img-8.png',
      badges: [{ text: 'Hot', color: 'bg-orange-500' }],
      colors: ['#111827', '#EAB308']
    }
  ]

  return (
    <section className="py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Featured products
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            What's more, we do it right!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Card (image only) */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 w-full">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badges */}
                  {product.badges.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.badges.map((badge, index) => (
                        <span 
                          key={index}
                          className={`${badge.color} text-white text-xs font-semibold px-3 py-1 rounded`}
                        >
                          {badge.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info (outside the card) */}
              <div className="p-4 text-center mt-3 w-full">
                <h3 className="text-gray-800 font-bold text-base mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-bold text-sm text-gray-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Color swatches (two radio buttons + +N) */}
                <div className="flex items-center justify-center gap-3 mt-3">
                  <div className="flex items-center gap-2">
                    {product.colors?.slice(0,2).map((c, i) => (
                      <label key={i} className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={`color-${product.id}`}
                          className="sr-only peer"
                          defaultChecked={i === 0}
                          aria-label={`Choose color ${i + 1} for ${product.name}`}
                        />
                        <span
                          className="w-4 h-4 rounded-full border border-white shadow-sm block peer-checked:ring-2 peer-checked:ring-offset-1 peer-checked:ring-emerald-500"
                          style={{ backgroundColor: c }}
                        />
                      </label>
                    ))}

                    {product.colors && product.colors.length > 2 && (
                      <button
                        type="button"
                        className="text-xs text-gray-500 ml-2"
                        aria-label={`Show ${product.colors.length - 2} more colors for ${product.name}`}
                      >
                        +{product.colors.length - 2}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">1</button>
          <button className="text-gray-700">2</button>
          <button aria-label="next" className="text-gray-700">»</button>
        </div>
      </div>
    </section>
  )
}

export default FeatureProduct