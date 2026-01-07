import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

interface WishItem {
  id: string
  title: string
  price: number
  qty: number
  size?: string
  color?: string
  image?: string
}

const AddWishList = () => {
  const [items, setItems] = useState<WishItem[]>([])
  const { addItem } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const raw = localStorage.getItem('wishlist') || '[]'
      const parsed = JSON.parse(raw)
      setItems(Array.isArray(parsed) ? parsed : [])
    } catch (e) {
      setItems([])
    }
  }, [])

  const persist = (next: WishItem[]) => {
    setItems(next)
    localStorage.setItem('wishlist', JSON.stringify(next))
  }

  const removeItem = (id: string) => {
    const updated = items.filter(i => i.id !== id)
    persist(updated)
  }

  const moveToCart = (it: WishItem) => {
    addItem({ id: it.id, title: it.title, price: it.price, qty: it.qty, size: it.size, color: it.color, image: it.image })
    removeItem(it.id)
    navigate('/add-to-cart')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">My Wishlist</h1>
            <p className="text-sm text-gray-600 mt-1">{items.length} item{items.length !== 1 ? 's' : ''} in your wishlist</p>
          </div>
          <div>
            <Link to="/" className="text-sm text-blue-600 hover:underline">Continue shopping</Link>
          </div>
        </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <img src="/images/empty-wishlist.png" alt="Empty wishlist" className="mx-auto w-36 h-36 object-contain mb-6" />
              <h2 className="text-lg font-medium">No items in your wishlist</h2>
              <p className="text-sm text-gray-500 mt-2">Save items that you like and view them later here.</p>
              <div className="mt-4">
                <Link to="/" className="inline-block px-4 py-2 bg-[#75BD4B] text-white rounded-md">Shop now</Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((it) => (
                <div key={`${it.id}-${it.size || ''}-${it.color || ''}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <img src={it.image || '/images/wishlist-1.png'} alt={it.title} className="w-full h-56 sm:h-48 object-cover" />
                    <button aria-label="Remove from wishlist" onClick={() => removeItem(it.id)} className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                      <svg className="w-5 h-5 text-rose-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-6.716-4.294-9.243-6.821C-1.47 9.515 3.157 2 12 7.5 20.843 2 26.47 9.515 21.243 14.179 18.716 16.706 12 21 12 21z"/></svg>
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{it.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">Color: <span className="font-medium">{it.color || '—'}</span> • Size: <span className="font-medium">{it.size || '—'}</span></p>
                    <p className="text-sm text-gray-600 mt-2">{(it as any).description || ''}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-2xl font-bold text-rose-600">₹{it.price}</div>
                      <Link to="/product/:id" className="inline-block px-4 py-2 bg-rose-600 text-white rounded-md">View Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  )
}

export default AddWishList