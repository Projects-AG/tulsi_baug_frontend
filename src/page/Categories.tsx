import SaleBanner from '../component/SaleBanner';
import ProductGrid from '../component/ProductGrid';
import ProductCard from '../component/ProductCard';
import OderCategories from '../component/OderCategories';

const Categories = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 overflow-x-hidden">
      {/* Hero Section */}
      <SaleBanner />
      
      {/* product grid */}
      <ProductGrid />
      
      {/*product card */}
      <ProductCard />

      {/*order categories section */}
      <OderCategories />
    </div>
  )
}

export default Categories
