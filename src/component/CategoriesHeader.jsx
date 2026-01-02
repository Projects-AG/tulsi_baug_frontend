import React from 'react'

const CategoriesHeader = () => {
  const banner = '/categories-header-img.png' // put your image at public/images/categories-banner.jpg
  const fallback = 'https://via.placeholder.com/1400x600.png?text=Fashion+Sale'

  return (
    <section className="w-full lg:mt-5">
        <div className="">
          <img
            src={banner}
            alt="Categories banner"
            onError={(e) => { e.currentTarget.src = fallback }}
            className="w-full h-full object-cover"
          />
        </div>
    </section>
  )
}

export default CategoriesHeader