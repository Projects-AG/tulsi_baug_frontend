interface Card {
  id: number;
  img: string;
  title: string;
  count: number;
}

const cards: Card[] = [
  { id: 1, img: '/images/categ-girl1.jpg', title: 'Saree', count: 15 },
  { id: 2, img: '/images/categ-girl2.png', title: 'Girl Dress', count: 8 },
  { id: 3, img: '/images/categ-girl3.png', title: 'Shirt', count: 18 },
  { id: 4, img: '/images/categ-girl4.png', title: 'Festival', count: 9 },
  { id: 5, img: '/images/categ-girl5.png', title: 'Kurti', count: 6 },
];

const ProductGrid = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6">
        <h2
          className="mx-auto max-w-full sm:max-w-[544px] text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black"
          style={{ fontFamily: 'Plus Jakarta Sans' }}
        >
          Cloth's of Every Style
        </h2>

        <span
          className="mx-auto block max-w-full sm:max-w-[260px] text-base sm:text-lg md:text-xl font-medium text-center text-black mt-2"
          style={{ fontFamily: 'Plus Jakarta Sans' }}
        >
          What's more, we do it right!
        </span>

        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
          {cards.map((c) => (
            <div key={c.id} className="flex flex-col items-center">
              <img src={c.img} alt={c.title} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] rounded-full object-cover" />
              <h3 
                className="text-base sm:text-lg md:text-xl font-bold text-center text-black mt-2 sm:mt-3"
                style={{ fontFamily: 'Plus Jakarta Sans' }}
              >
                {c.title} <sup className="text-[8px] sm:text-[10px] text-[#7e7e7e]">{c.count}</sup>
              </h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative mt-6 sm:mt-8">
        <div
          className="w-full h-[6px] sm:h-[8px] absolute top-[20px] left-0 right-0 z-10 opacity-100"
          style={{
            background: "linear-gradient(90deg, #EAC645 0%, #F2A173 17.57%, #97DEC0 49.15%, #6C87E6 59.32%, #CE4EEE 78.05%, #EF5B2C 100%)",
          }}
        ></div>
       
      </div>
    </section>
  );
};

export default ProductGrid;
