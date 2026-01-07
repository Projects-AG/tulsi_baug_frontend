import { useState, ChangeEvent, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom' // sync search with URL param
import { RiArrowLeftLine } from 'react-icons/ri' // back arrow for mobile
import ProductCard2 from './ProductCard2'
import { HiOutlineSquares2X2, HiOutlineBars3 } from "react-icons/hi2";
import { BiSortAlt2 } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: number;
  isNew?: boolean;
  rating: number;
  reviews: number;
  image: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Saree',
    price: '26.00',
    originalPrice: '29.00',
    discount: 10,
    isNew: true,
    rating: 4.5,
    reviews: 12,
    image: '/filter-img-1.png',
  },
  {
    id: 2,
    name: 'Saree',
    price: '26.00',
    originalPrice: '29.00',
    discount: 15,
    isNew: true,
    rating: 4.8,
    reviews: 8,
    image: '/filter-img-2.png',
  },
  {
    id: 3,
    name: 'AOP Cut & Sew Tee',
    price: '26.00',
    originalPrice: '29.00',
    discount: 12,
    isNew: true,
    rating: 4.4,
    reviews: 9,
    image: '/filter-img-3.png',
  },
  {
    id: 4,
    name: 'Casual Summer Dress',
    price: '35.00',
    originalPrice: '40.00',
    discount: 12,
    rating: 4.6,
    reviews: 7,
    image: '/filter-img-4.png',
  },
  {
    id: 5,
    name: 'Striped Midi Dress',
    price: '29.00',
    originalPrice: '34.00',
    discount: 15,
    rating: 4.3,
    reviews: 5,
    image: '/filter-img-5.png',
  },
  {
    id: 6,
    name: 'Classic White Shirt',
    price: '26.00',
    originalPrice: '29.00',
    discount: 10,
    rating: 4.2,
    reviews: 6,
    image: '/filter-img-6.jpg',
  },
  {
    id: 7,
    name: 'Minimal Shift Dress',
    price: '32.00',
    originalPrice: '36.00',
    discount: 11,
    rating: 4.1,
    reviews: 4,
    image: '/filter-img-7.png',
  },
  {
    id: 8,
    name: 'Casual Linen Shirt',
    price: '28.00',
    originalPrice: '32.00',
    discount: 12,
    rating: 4.0,
    reviews: 6,
    image: '/filter-img-8.png',
  },
  {
    id: 9,
    name: 'Summer Jersey Tee',
    price: '22.00',
    originalPrice: '25.00',
    discount: 12,
    rating: 4.2,
    reviews: 3,
    image: '/filter-img-9.png',
  },
  {
    id: 10,
    name: 'Relaxed Fit Shirt',
    price: '30.00',
    originalPrice: '35.00',
    discount: 14,
    rating: 4.3,
    reviews: 9,
    image: '/filter-img-10.png',
  },
  {
    id: 11,
    name: 'High-Waist Skirt',
    price: '27.00',
    originalPrice: '31.00',
    discount: 13,
    rating: 4.4,
    reviews: 5,
    image: '/filter-img-11.png',
  },
  {
    id: 12,
    name: 'Classic Polo Tee',
    price: '24.00',
    originalPrice: '28.00',
    discount: 14,
    rating: 4.2,
    reviews: 8,
    image: '/filter-img-12.png',
  },
]

const MIN = 10
const MAX = 160

const DealsFilter = () => {
  const [query, setQuery] = useState<string>('')
  // read and write query param 'q' so header can link to filtered results
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const q = searchParams.get('q') || '';
    setQuery(q);
  }, [searchParams]);

  const onSidebarQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim()) {
      setSearchParams({ q: val });
    } else {
      setSearchParams({});
    }
  }

  const handleBack = () => {
    // if there is browser history, go back; otherwise go home
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  }
  const [sort, setSort] = useState<string>('default')
  const [minVal, setMinVal] = useState<number>(MIN)
  const [maxVal, setMaxVal] = useState<number>(MAX)
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(x => x !== cat) : [...prev, cat])
  }

  // Age sheet state
  const [isAgeOpen, setIsAgeOpen] = useState<boolean>(false)
  const [selectedAges, setSelectedAges] = useState<string[]>([])
  const toggleAge = (age: string) => {
    setSelectedAges(prev => prev.includes(age) ? prev.filter(x => x !== age) : [...prev, age])
  }
  const [viewMode, setViewMode] = useState<'double' | 'single'>('double')
  const [activeFilterTab, setActiveFilterTab] = useState<string>('Category');

  // Prevent background scrolling when either sheet is open
  useEffect(() => {
    const locked = isSortOpen || isFilterOpen || isCategoryOpen || isAgeOpen;
    if (locked) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isSortOpen, isFilterOpen, isCategoryOpen, isAgeOpen]);

  const filtered = sampleProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Mobile quick-controls: edge-to-edge bar */}
      <div className="md:hidden max-w-full mb-1">
        <div className="flex items-center gap-0 bg-white border border-gray-200 divide-x divide-gray-200 text-sm h-11">
          {searchParams.get('q') ? (
            <button onClick={handleBack} aria-label="Back" className="flex-1 h-full flex items-center justify-center gap-2 px-3 text-sm">
              <RiArrowLeftLine className="text-lg" />
              <span>Back</span>
            </button>
          ) : (
            <button onClick={() => setIsSortOpen(true)} aria-label="Sort" className="flex-1 h-full flex items-center justify-center gap-2 px-3 text-sm">
              <BiSortAlt2 className="text-lg" />
              <span>Sort</span>
            </button>
          )}

          <button onClick={() => { setIsFilterOpen(true); setActiveFilterTab('Category'); }} aria-label="Category" className="flex-1 h-full flex items-center justify-center gap-2 px-3 text-sm">
            <span>Category</span>
            <RiArrowDropDownLine />
          </button>

          <button onClick={() => { setIsFilterOpen(true); setActiveFilterTab('Age'); }} aria-label="Age" className="flex-1 h-full flex items-center justify-center gap-2 px-3 text-sm">
            <span>Age</span>
            <RiArrowDropDownLine />
          </button>

          <button onClick={() => setIsFilterOpen(true)} aria-label="Filter" className="flex-1 h-full flex items-center justify-center gap-2 px-3 text-sm">
            <FiFilter className="text-lg" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Controls */}
        <div className="hidden md:flex flex-col sm:flex-row items-center justify-end gap-4 mb-6">
          <div className="flex items-center gap-3">
            {/* Filters button hidden on mobile (replaced by quick-controls) */}
            <button
              type="button"
              className="hidden"
              onClick={() => setIsFilterOpen(true)}
            >
              Filters
            </button>
            <label className="sr-only">Sort</label>
            <select
              value={sort}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setSort(e.target.value)}
              className="rounded-md px-4 py-2 text-sm bg-[#f5f5f5] text-[#000000]"
            >
              <option value="default">Default sorting</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="popular">Most popular</option>
            </select>

            <div className="flex items-center text-gray-500">
              {/* Grid icon - set single column */}
              <button
                title="Single column"
                onClick={() => setViewMode('single')}
                aria-pressed={viewMode === 'single'}
                className={`p-2 rounded-md ${viewMode === 'single' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                <HiOutlineSquares2X2 className='h-6 w-6 text-black'/>
              </button>
              {/* List icon - set double column */}
              <button
                title="Two columns"
                onClick={() => setViewMode('double')}
                aria-pressed={viewMode === 'double'}
                className={`p-2 rounded-md ${viewMode === 'double' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                <HiOutlineBars3 className='h-6 w-6 text-black' />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="bg-white p-4 -mt-20">
              <h3 className="font-bold text-lg mb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={onSidebarQueryChange}
                  placeholder="Search products..."
                  className="w-full rounded-md py-3 pl-4 pr-12 text-sm bg-[#f5f5f5]"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute right-4 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
                </svg>
              </div>

              <h3 className="font-bold text-lg mt-6 mb-3">Product categories</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex justify-between items-center"><span>Hoodie</span><span className="text-sm">11</span></li>
                <li className="flex justify-between items-center"><span>Kids</span><span className="text-sm">4</span></li>
                <li className="flex justify-between items-center"><span>Long Sleeves</span><span className="text-sm">0</span></li>
                <li className="flex justify-between items-center"><span>Product Designer</span><span className="text-sm">2</span></li>
                <li className="flex justify-between items-center"><span>Sweater</span><span className="text-sm">2</span></li>
                <li className="flex justify-between items-center"><span>T-Shirt</span><span className="text-sm">5</span></li>
              </ul>
            </div>

            <div className="p-4 mt-6">
              <h3 className="font-bold text-lg mb-3">Filter by price</h3>

              {/* Double ended range slider (green track with filled circular handles) */}
              <div className="relative mt-3">
                {/* Full green track */}
                <div className="h-2 bg-green-500 rounded-full"></div>

                {/* Active track between handles (overlaid, same color to match image) */}
                <div
                  className="absolute h-2 bg-green-600 rounded-full"
                  style={{
                    left: `${((minVal - MIN) / (MAX - MIN)) * 100}%`,
                    right: `${100 - ((maxVal - MIN) / (MAX - MIN)) * 100}%`,
                  }}
                />

                {/* Invisible range inputs (handles control positions) */}
                <input
                  type="range"
                  min={MIN}
                  max={MAX}
                  value={minVal}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setMinVal(Math.min(Number(e.target.value), maxVal - 1))}
                  className="absolute left-0 top-0 w-full h-2 appearance-none pointer-events-auto bg-transparent"
                  aria-label="Minimum price"
                />

                <input
                  type="range"
                  min={MIN}
                  max={MAX}
                  value={maxVal}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setMaxVal(Math.max(Number(e.target.value), minVal + 1))}
                  className="absolute left-0 top-0 w-full h-2 appearance-none pointer-events-auto bg-transparent"
                  aria-label="Maximum price"
                />

                {/* Left handle (green filled circle with white border) */}
                <div
                  className="absolute -translate-y-1/2 top-1/2"
                  style={{ left: `calc(${((minVal - MIN) / (MAX - MIN)) * 100}% - 12px)` }}
                >
                  <div className="w-6 h-6 bg-green-600 rounded-full border-2 border-white shadow-md" />
                </div>

                {/* Right handle (green filled circle with white border) */}
                <div
                  className="absolute -translate-y-1/2 top-1/2"
                  style={{ left: `calc(${((maxVal - MIN) / (MAX - MIN)) * 100}% - 12px)` }}
                >
                  <div className="w-6 h-6 bg-green-600 rounded-full border-2 border-white shadow-md" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">Price: ${minVal} — ${maxVal}</div>
                <button className="bg-[#f5f5f5] rounded-md py-2 px-4 text-sm text-[#010101]">Filter</button>
              </div>
            </div>

            {/* Additional Filters: Color, Size, Material */}
            <div className="p-4 mt-6">
              <h3 className="font-bold text-lg mb-4">Filter by Color</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-black rounded-full border" />
                    <span>Black</span>
                  </div>
                  <span className="text-sm">14</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-[#e9cdb7] rounded-full border" />
                    <span>Brown</span>
                  </div>
                  <span className="text-sm">13</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-red-500 rounded-full border" />
                    <span>Red</span>
                  </div>
                  <span className="text-sm">13</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-white rounded-full border" />
                    <span>White</span>
                  </div>
                  <span className="text-sm">13</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-yellow-300 rounded-full border" />
                    <span>Yellow</span>
                  </div>
                  <span className="text-sm">13</span>
                </li>
              </ul>
            </div>

            <div className="p-4 mt-6">
              <h3 className="font-bold text-lg mb-4">Filter by Size</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex justify-between items-center"><span>2XL</span><span className="text-sm">14</span></li>
                <li className="flex justify-between items-center"><span>3XL</span><span className="text-sm">14</span></li>
                <li className="flex justify-between items-center"><span>L</span><span className="text-sm">14</span></li>
                <li className="flex justify-between items-center"><span>M</span><span className="text-sm">14</span></li>
                <li className="flex justify-between items-center"><span>S</span><span className="text-sm">14</span></li>
                <li className="flex justify-between items-center"><span>XL</span><span className="text-sm">14</span></li>
              </ul>
            </div>

            <div className="p-4 mt-6">
              <h3 className="font-bold text-lg mb-4">Filter by Material</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px]">G</div>
                    <span>Glass</span>
                  </div>
                  <span className="text-sm">14</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px]">M</div>
                    <span>Metal</span>
                  </div>
                  <span className="text-sm">14</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px]">C</div>
                    <span>Cloth</span>
                  </div>
                  <span className="text-sm">14</span>
                </li>
              </ul>
            </div>

            {/* Price ranges */}
            <div className="p-4 mt-6">
              <h3 className="font-bold text-lg mb-4">Price filter</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="text-sm">All</li>
                <li className="text-sm">$0.00 - $40.00</li>
                <li className="text-sm">$40.00 - $80.00</li>
                <li className="text-sm">$80.00 - $120.00</li>
                <li className="text-sm">$120.00 - $160.00</li>
              </ul>
            </div>

            {/* Sort by */}
            <div className="p-4 mt-6">
              <h3 className="font-bold text-lg mb-4">Sort by</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="text-sm">Popularity</li>
                <li className="text-sm">Average rating</li>
                <li className="text-sm">Latest</li>
                <li className="text-sm">Price: low to high</li>
                <li className="text-sm">Price: high to low</li>
              </ul>
            </div>

            {/* Stock status */}
            <div className="p-4 mt-6">
              <h3 className="font-bold text-lg mb-4">Stock status</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center gap-3 text-sm"><input type="checkbox" className="form-checkbox" /> <span>On sale</span></li>
                <li className="flex items-center gap-3 text-sm"><input type="checkbox" className="form-checkbox" /> <span>In stock</span></li>
                <li className="flex items-center gap-3 text-sm"><input type="checkbox" className="form-checkbox" /> <span>Out of stock</span></li>
                <li className="flex items-center gap-3 text-sm"><input type="checkbox" className="form-checkbox" /> <span>On back order</span></li>
              </ul>
            </div>

            {/* Product tags */}
            <div className="p-4 mt-6">
              <h3 className="font-bold text-lg mb-4">Product tags</h3>
              <div className="flex flex-wrap gap-1">
                <button className="bg-[#f5f5f5] text-[#7e7e7e] text-sm px-3 py-1 rounded-sm">Designer</button>
                <button className="bg-[#f5f5f5] text-[#7e7e7e] text-sm px-3 py-1 rounded-sm">Kids</button>
                <button className="bg-[#f5f5f5] text-[#7e7e7e] text-sm px-3 py-1 rounded-sm">T-Shirt</button>
                <button className="bg-[#f5f5f5] text-[#7e7e7e] text-sm px-3 py-1 rounded-sm">Woman</button>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="lg:col-span-3">
            <div className="relative">
              <div className="hidden md:block absolute -top-5 sm:-top-12 md:-top-12 left-0 text-sm text-black bg-white px-2 rounded z-10">
                {`Showing 1–${Math.min(12, filtered.length)} of ${sampleProducts.length} results`}
              </div>

            <div className={`grid ${viewMode === 'single' ? 'grid-cols-1' : 'grid-cols-2'} sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
              {filtered.map((product) => (
                <div key={product.id} className="pb-4">
                  <Link to="/product/:id" className="block">
                    <ProductCard2
                      product={{
                        name: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        discount: product.discount,
                        rating: product.rating,
                        reviews: product.reviews,
                        image: product.image,
                      }}
                    />
                  </Link>
                </div>
              ))}
            </div>
            </div>

            {/* Pagination (centered) */}
            <div className="flex justify-center mt-6">
              <nav className="inline-flex items-center gap-4" aria-label="Pagination">
                <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center" aria-current="page">1</button>
                <button className="text-sm text-gray-600 hover:text-black">2</button>
                <button className="text-sm text-gray-600 hover:text-black" aria-label="Next page">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </main>

          {/* Mobile Sort sheet (slides up from bottom) */}
          {isSortOpen && (
            <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsSortOpen(false)} />

              <div className="fixed left-0 right-0 bottom-0 mx-auto w-full max-w-xl rounded-t-xl bg-white p-4 shadow-lg transform transition duration-300" style={{ maxHeight: '70vh' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Sort</h3>
                  <button onClick={() => setIsSortOpen(false)} aria-label="Close sort" className="p-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <div className="text-sm">Relevance</div>
                    <input type="radio" name="sort" checked={sort === 'default'} onChange={() => { setSort('default'); setIsSortOpen(false); }} />
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="text-sm">New Arrivals</div>
                    <input type="radio" name="sort" checked={sort === 'new'} onChange={() => { setSort('new'); setIsSortOpen(false); }} />
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="text-sm">Price (High To Low)</div>
                    <input type="radio" name="sort" checked={sort === 'high'} onChange={() => { setSort('high'); setIsSortOpen(false); }} />
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="text-sm">Price (Low To High)</div>
                    <input type="radio" name="sort" checked={sort === 'low'} onChange={() => { setSort('low'); setIsSortOpen(false); }} />
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="text-sm">Rating</div>
                    <input type="radio" name="sort" checked={sort === 'rating'} onChange={() => { setSort('rating'); setIsSortOpen(false); }} />
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="text-sm">Discount</div>
                    <input type="radio" name="sort" checked={sort === 'discount'} onChange={() => { setSort('discount'); setIsSortOpen(false); }} />
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Mobile Category sheet (slides up from bottom) */}
          {isCategoryOpen && (
            <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsCategoryOpen(false)} />

              <div className="fixed left-0 right-0 bottom-0 mx-auto w-full max-w-xl rounded-t-xl bg-white p-4 shadow-lg transform transition duration-300 overflow-auto" style={{ maxHeight: '70vh' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Category</h3>
                  <button onClick={() => setIsCategoryOpen(false)} aria-label="Close category" className="p-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Gradient divider under Category header (full-bleed) */}
                <div aria-hidden="true" className="mb-4">
                  <div style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw' }}>
                    <div className="h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #EAC645 0%, #F2A173 17.57%, #97DEC0 49.15%, #6C87E6 59.32%, #CE4EEE 78.05%, #EF5B2C 100%)' }} />
                  </div>
                </div>

                <ul className="space-y-3 mb-3">
                  {['Sarees','Lehenga Choli','Salwar Kameez','Anarkali Suits','Kurti & Kurta Sets','Indo-Western Ethnic Wear','Ethnic Gowns','Bridal Ethnic Wear','Festive Ethnic Wear','Traditional Maharashtrian Wear','Ethnic Co-Ord Sets','Sharara & Gharara Sets','Handloom Ethnic Wear'].map((cat) => (
                    <li key={cat} className="flex items-center gap-3">
                      <input id={cat} type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => toggleCategory(cat)} className="w-4 h-4 accent-black" />
                      <label htmlFor={cat} className="text-sm">{cat}</label>
                    </li>
                  ))}
                </ul>

                {/* Full-bleed gradient divider above sticky footer */}
                <div aria-hidden="true" className="mb-0">
                  <div style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw' }}>
                    <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #EAC645 0%, #F2A173 17.57%, #97DEC0 49.15%, #6C87E6 59.32%, #CE4EEE 78.05%, #EF5B2C 100%)' }} />
                  </div>
                </div>

                <div className="bottom-0 left-0 right-0 bg-white p-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">1000+ Products</span>
                  <button onClick={() => setIsCategoryOpen(false)} className="bg-[#75bd4b] text-white px-8 py-2 rounded-lg">Done</button>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Age sheet (slides up from bottom) */}
          {isAgeOpen && (
            <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsAgeOpen(false)} />

              <div className="fixed left-0 right-0 bottom-0 mx-auto w-full max-w-xl rounded-t-xl bg-white p-4 shadow-lg transform transition duration-300 overflow-auto" style={{ maxHeight: '70vh' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Age</h3>
                  <button onClick={() => setIsAgeOpen(false)} aria-label="Close age" className="p-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Gradient divider under Age header (full-bleed) */}
                <div aria-hidden="true" className="mb-4">
                  <div style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw' }}>
                    <div className="h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #EAC645 0%, #F2A173 17.57%, #97DEC0 49.15%, #6C87E6 59.32%, #CE4EEE 78.05%, #EF5B2C 100%)' }} />
                  </div>
                </div>

                <ul className="space-y-3 mb-3">
                  {[
                    '0-5 Yrs (Infants & Toddlers)',
                    '6-12 Yrs (Kids Ethnic Wear)',
                    '13-18 Yrs (Teen Collection)',
                    '19-30 Yrs (Young Women)',
                    '31-45 Yrs (Women)',
                    '46-60 Yrs (Mature Women)',
                    '60+ Yrs (Senior Collection)'
                  ].map((age) => (
                    <li key={age} className="flex items-center gap-3">
                      <input id={age} type="checkbox" checked={selectedAges.includes(age)} onChange={() => toggleAge(age)} className="w-4 h-4 accent-black" />
                      <label htmlFor={age} className="text-sm">{age}</label>
                    </li>
                  ))}
                </ul>

                {/* Full-bleed gradient above Done */}
                <div aria-hidden="true" className="mb-0">
                  <div style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw' }}>
                    <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #EAC645 0%, #F2A173 17.57%, #97DEC0 49.15%, #6C87E6 59.32%, #CE4EEE 78.05%, #EF5B2C 100%)' }} />
                  </div>
                </div>

                <div className="bottom-0 left-0 right-0 bg-white p-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">1000+ Products</span>
                  <button onClick={() => setIsAgeOpen(false)} className="bg-[#75bd4b] text-white px-8 py-2 rounded-lg">Done</button>
                </div>
              </div>
            </div>
          )}

          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />

              <div className="fixed left-0 right-0 bottom-0 mx-auto w-full max-w-xl rounded-t-xl bg-white p-4 shadow-lg transform transition duration-300 overflow-auto" style={{ maxHeight: '80vh' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <button onClick={() => setIsFilterOpen(false)} aria-label="Close filters" className="p-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Gradient divider under Filters header */}
                <div aria-hidden="true" className="mb-4">
                  <div style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw' }}>
                    <div className="h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #EAC645 0%, #F2A173 17.57%, #97DEC0 49.15%, #6C87E6 59.32%, #CE4EEE 78.05%, #EF5B2C 100%)' }} />
                  </div>
                </div>

                {/* Two-column inside mobile filter: left tabs, right content */}
                <div className="flex gap-4">
                  {/* Left navigation tabs (vertical) */}
                  <nav className="w-36 shrink-0 bg-[#f7d3d4] rounded-md overflow-auto" aria-label="Filter sections">
                    {['Category','Age','Color','Fabric','Size','Price','Rating','Occasion','Discount'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveFilterTab(tab)}
                        className={`w-full text-left px-4 py-3 border-b ${activeFilterTab === tab ? 'bg-pink-200 font-semibold' : ''}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </nav>

                  {/* Right content panel */}
                  <div className="flex-1 overflow-auto pr-2">


                    {/* Conditional content based on active tab */}
                    <div>
                      {(typeof activeFilterTab === 'undefined' || activeFilterTab === 'Category') && (
                        <div>
                          <h3 className="font-bold text-lg mt-2 mb-3">Product categories</h3>
                          <ul className="text-gray-600 space-y-3">
                            <li className="flex items-center gap-3"><input id="cat-hoodie" type="checkbox" checked={selectedCategories.includes('Hoodie')} onChange={() => toggleCategory('Hoodie')} className="w-4 h-4 accent-black" /><label htmlFor="cat-hoodie" className="text-sm">Hoodie</label></li>
                            <li className="flex items-center gap-3"><input id="cat-kids" type="checkbox" checked={selectedCategories.includes('Kids')} onChange={() => toggleCategory('Kids')} className="w-4 h-4 accent-black" /><label htmlFor="cat-kids" className="text-sm">Kids</label></li>
                            <li className="flex items-center gap-3"><input id="cat-long" type="checkbox" checked={selectedCategories.includes('Long Sleeves')} onChange={() => toggleCategory('Long Sleeves')} className="w-4 h-4 accent-black" /><label htmlFor="cat-long" className="text-sm">Long Sleeves</label></li>
                            <li className="flex items-center gap-3"><input id="cat-designer" type="checkbox" checked={selectedCategories.includes('Product Designer')} onChange={() => toggleCategory('Product Designer')} className="w-4 h-4 accent-black" /><label htmlFor="cat-designer" className="text-sm">Product Designer</label></li>
                            <li className="flex items-center gap-3"><input id="cat-sweater" type="checkbox" checked={selectedCategories.includes('Sweater')} onChange={() => toggleCategory('Sweater')} className="w-4 h-4 accent-black" /><label htmlFor="cat-sweater" className="text-sm">Sweater</label></li>
                            <li className="flex items-center gap-3"><input id="cat-tshirt" type="checkbox" checked={selectedCategories.includes('T-Shirt')} onChange={() => toggleCategory('T-Shirt')} className="w-4 h-4 accent-black" /><label htmlFor="cat-tshirt" className="text-sm">T-Shirt</label></li>
                          </ul>
                        </div>
                      )}

                      {activeFilterTab === 'Age' && (
                        <div>
                          <h3 className="font-bold text-lg mt-2 mb-3">Age</h3>
                          <ul className="space-y-3">
                            {[
                              '0-5 Yrs (Infants & Toddlers)',
                              '6-12 Yrs (Kids Ethnic Wear)',
                              '13-18 Yrs (Teen Collection)',
                              '19-30 Yrs (Young Women)',
                              '31-45 Yrs (Women)',
                              '46-60 Yrs (Mature Women)',
                              '60+ Yrs (Senior Collection)'
                            ].map((age) => (
                              <li key={age} className="flex items-center gap-3">
                                <input id={age} type="checkbox" checked={selectedAges.includes(age)} onChange={() => toggleAge(age)} className="w-4 h-4 accent-black" />
                                <label htmlFor={age} className="text-sm">{age}</label>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {activeFilterTab === 'Color' && (
                        <div>
                          <h3 className="font-bold text-lg mt-2 mb-3">Filter by Color</h3>
                          <ul className="text-gray-600 space-y-3">
                            <li className="flex items-center gap-3"><span className="w-4 h-4 bg-black rounded-full border" /> <span>Black</span></li>
                            <li className="flex items-center gap-3"><span className="w-4 h-4 bg-[#e9cdb7] rounded-full border" /> <span>Brown</span></li>
                            <li className="flex items-center gap-3"><span className="w-4 h-4 bg-red-500 rounded-full border" /> <span>Red</span></li>
                            <li className="flex items-center gap-3"><span className="w-4 h-4 bg-white rounded-full border" /> <span>White</span></li>
                            <li className="flex items-center gap-3"><span className="w-4 h-4 bg-yellow-300 rounded-full border" /> <span>Yellow</span></li>
                          </ul>
                        </div>
                      )}

                      {activeFilterTab === 'Fabric' && (
                        <div>
                          <h3 className="font-bold text-lg mt-2 mb-3">Filter by Material</h3>
                          <ul className="text-gray-600 space-y-3">
                            <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px]">G</div> <span>Glass</span></li>
                            <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px]">M</div> <span>Metal</span></li>
                            <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px]">C</div> <span>Cloth</span></li>
                          </ul>
                        </div>
                      )}

                      {activeFilterTab === 'Size' && (
                        <div>
                          <h3 className="font-bold text-lg mt-2 mb-3">Filter by Size</h3>
                          <ul className="text-gray-600 space-y-3">
                            <li className="flex justify-between items-center"><span>2XL</span><span className="text-sm">14</span></li>
                            <li className="flex justify-between items<center"><span>3XL</span><span className="text-sm">14</span></li>
                            <li className="flex justify-between items-center"><span>L</span><span className="text-sm">14</span></li>
                            <li className="flex justify-between items-center"><span>M</span><span className="text-sm">14</span></li>
                            <li className="flex justify-between items-center"><span>S</span><span className="text-sm">14</span></li>
                            <li className="flex justify-between items-center"><span>XL</span><span className="text-sm">14</span></li>
                          </ul>
                        </div>
                      )}

                      {activeFilterTab === 'Price' && (
                        <div>
                          <h3 className="font-bold text-lg mt-2 mb-3">Price filter</h3>
                          <div className="relative mt-3">
                            <div className="h-2 bg-green-500 rounded-full"></div>
                            <div className="absolute h-2 bg-green-600 rounded-full" style={{ left: `${((minVal - MIN) / (MAX - MIN)) * 100}%`, right: `${100 - ((maxVal - MIN) / (MAX - MIN)) * 100}%` }} />
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-600">Price: ${minVal} — ${maxVal}</div>
                          </div>
                        </div>
                      )}

                      {activeFilterTab === 'Rating' && (
                        <div>
                          <h3 className="font-bold text-lg mt-2 mb-3">Rating</h3>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li>4 stars & up</li>
                            <li>3 stars & up</li>
                            <li>2 stars & up</li>
                            <li>1 star & up</li>
                          </ul>
                        </div>
                      )}

                      {activeFilterTab === 'Occasion' && (
                        <div>
                          <h3 className="font-bold text-lg mt-2 mb-3">Occasion</h3>
                          <div className="flex flex-wrap gap-2">
                            <button className="bg-[#f5f5f5] px-3 py-1 text-sm rounded">Party</button>
                            <button className="bg-[#f5f5f5] px-3 py-1 text-sm rounded">Formal</button>
                            <button className="bg-[#f5f5f5] px-3 py-1 text-sm rounded">Casual</button>
                          </div>
                        </div>
                      )}

                      {activeFilterTab === 'Discount' && (
                        <div>
                          <h3 className="font-bold text-lg mt-2 mb-3">Discount</h3>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>10% & up</li>
                            <li>20% & up</li>
                            <li>30% & up</li>
                            <li>50% & up</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Sticky footer for mobile filters */}
                <div className="sticky bottom-0 left-0 right-0 bg-white p-4 border-t flex items-center justify-between">
                  <button onClick={() => { setSelectedCategories([]); setSelectedAges([]); setMinVal(MIN); setMaxVal(MAX); }} className="text-sm text-gray-600">Reset</button>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">1000+ Products</span>
                    <button onClick={() => setIsFilterOpen(false)} className="bg-[#75bd4b] text-white px-4 py-2 rounded">Done</button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default DealsFilter
