interface CardProps {
  img: string;
  label: string;
  alt: string;
  className?: string;
}

const Card = ({ img, label, alt, className = '' }: CardProps) => (
  <div className={`relative rounded-xl overflow-hidden group shadow-sm h-40 sm:h-56 lg:h-48 ${className}`}>
    <img
      src={img}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
      <button
        type="button"
        className="pointer-events-auto bg-white px-4 py-2 rounded-full text-sm font-medium shadow text-gray-800"
      >
        {label}
      </button>
    </div>
  </div>
)

const NewArrivalSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 lg:py-8">
      {/* Top grid: left stacked, center hero, right stacked */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[30%_40%_30%] gap-2 justify-center">
        {/* Left column - two stacked cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-2 md:gap-1 lg:gap-2">
          <Card
            img="/newarrival-img-1.png"
            alt="Shop Hoodies"
            label="Shop Hoodies"
            className="h-56 md:h-[280px] lg:h-[290px] md:w-full lg:w-[300px] opacity-100 lg:rotate-0 object-cover"
          />

          <Card
            img="/newarrival-img-2.png"
            alt="Shop Tanktop"
            label="Shop Tanktop"
            className="h-56 md:h-[280px] lg:h-[290px] md:w-full lg:w-[300px] opacity-100 lg:rotate-0"
          />
        </div>

        {/* Center hero card (large) */}
        <div className="relative overflow-hidden group shadow-sm h-96 md:h-[500px] lg:h-[590px] opacity-100 lg:rotate-0 rounded-[12px] w-full md:w-full md:mx-0 lg:mx-0">
          <img
            src="/newarrival-img-3.jpg"
            alt="Shop T-Shirt"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
            <button type="button" className="pointer-events-auto bg-white px-5 py-3 rounded-full text-base font-medium shadow text-gray-800">
              Shop T-Shirt
            </button>
          </div>
        </div>

        {/* Right column - two stacked cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-2 md:gap-1 lg:gap-2">
          <Card
            img="/newarrival-img-4.jpg"
            alt="Shop Sweater"
            label="Shop Sweater"
            className="h-56 md:h-[280px] lg:h-[290px] md:w-full lg:w-[300px] xl:ml-9 opacity-100 lg:rotate-0"
          />

          <Card
            img="/newarrival-img-5.png"
            alt="Shop Designer"
            label="Shop Designer"
            className="h-56 md:h-[280px] lg:h-[290px] md:w-full lg:w-[300px] xl:ml-9 opacity-100 lg:rotate-0"
          />
        </div>
      </div>

      {/* Bottom row - three equal cards: mobile horizontal scroll (1 per view), desktop grid */}
      <div className="mt-6">
        {/* Mobile: horizontal scroll, 1 per view (hidden on md+) */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4">
            <div className="flex-shrink-0 w-[calc(100%-32px)] snap-center snap-always mx-auto">
              <Card
                img="/newarrival-img-6.jpg"
                alt="Men's Collection"
                label="Men's Collection"
                className='h-64 sm:h-72'
              />
            </div>

            <div className="flex-shrink-0 w-[calc(100%-32px)] snap-center snap-always mx-auto">
              <Card
                img="/newarrival-img-7.jpg"
                alt="Kid's Collection"
                label="Kid's Collection"
                className='h-64 sm:h-72'
              />
            </div>

            <div className="flex-shrink-0 w-[calc(100%-32px)] snap-center snap-always mx-auto">
              <Card
                img="/newarrival-img-8.jpg"
                alt="Women's Collection"
                label="Women's Collection"
                className='h-64 sm:h-72'
              />
            </div>
          </div>
        </div>

        {/* Tablet / Desktop: grid (3 columns) */}
        <div className="hidden md:grid mt-4 grid-cols-3 gap-6">
          <Card
            img="/newarrival-img-6.jpg"
            alt="Men's Collection"
            label="Men's Collection"
            className='lg:h-[350px] lg:-ml-2'
          />

          <Card
            img="/newarrival-img-7.jpg"
            alt="Kid's Collection"
            label="Kid's Collection"
            className='lg:h-[350px]'
          />

          <Card
            img="/newarrival-img-8.jpg"
            alt="Women's Collection"
            label="Women's Collection"
            className='lg:h-[350px]'
          />
        </div>
      </div>
    </section>
  )
}

export default NewArrivalSection
