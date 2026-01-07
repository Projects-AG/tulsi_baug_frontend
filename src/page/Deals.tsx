import { useSearchParams } from 'react-router-dom'
import DealsSection from '../component/DealsSection'
import DealsFilter from '../component/DealsFilter'

const Deals = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');

  return (
    <div>
        {!q && <DealsSection />}
        <DealsFilter />
    </div>
  )
}

export default Deals
