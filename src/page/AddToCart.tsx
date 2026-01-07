import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const AddToCart = () => {
  const { items, removeItem, updateQty, clear } = useCart()

  const total = items.reduce((s, i) => s + (Number(i.price) || 0) * (Number(i.qty) || 0), 0)

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg p-6 text-center">
          <h2 className="text-lg font-medium mb-2">Your cart is empty</h2>
          <p className="text-sm text-gray-600 mb-4">Browse products and add them to the cart.</p>
          <Link to="/" className="inline-block px-4 py-2 bg-[#75BD4B] text-white rounded">Continue shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

        <div className="space-y-4">
          {items.map((it) => {
            const priceNum = Number(it.price) || 0
            const qtyNum = Number(it.qty) || 0
            const itemKey = `${it.id}|${it.size||''}|${it.color||''}`
            return (
              <div key={itemKey} className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
                {/* Left: image */}
                <div className="w-full md:w-32 h-32 md:h-32 flex-shrink-0 rounded overflow-hidden bg-gray-50 border border-gray-100">
                  {it.image ? (
                    <img src={it.image} alt={it.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full" />
                  )}
                </div>

                {/* Middle: details */}
                <div className="flex-1 w-full">
                  <div className="font-medium text-sm text-gray-900">{it.title || 'Unnamed product'}</div>
                  <div className="text-xs text-gray-500 mt-1">Size: <span className="text-gray-700">{it.size || '-'}</span> • Color: <span className="text-gray-700">{it.color || '-'}</span></div>

                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded px-2 py-1">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => updateQty(itemKey, Math.max(1, qtyNum - 1))}
                        className="w-8 h-8 flex items-center justify-center rounded-full text-sm bg-[#f8faf5] hover:bg-[#eef6e8]"
                      >
                        -
                      </button>
                      <div className="w-10 text-center text-sm font-medium">{qtyNum}</div>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => updateQty(itemKey, qtyNum + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full text-sm bg-[#f8faf5] hover:bg-[#eef6e8]"
                      >
                        +
                      </button>
                    </div>

                    <div className="ml-auto text-sm font-semibold text-gray-900">Rs {(priceNum * qtyNum).toFixed(2)}</div>
                  </div>
                </div>

                {/* Right: price & actions */}
                <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                  <div className="text-sm text-gray-700">Unit: <span className="font-semibold">Rs {priceNum.toFixed(2)}</span></div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => removeItem(itemKey)} className="text-sm text-red-500">Remove</button>
                    <button onClick={() => updateQty(itemKey, qtyNum + 1)} className="px-3 py-1 bg-[#75BD4B] text-white rounded text-sm shadow">Add one</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="px-4 py-2 text-sm bg-white border border-gray-200 rounded">Continue shopping</Link>
            <button onClick={clear} className="px-4 py-2 text-sm bg-gray-100 rounded">Clear cart</button>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-lg font-semibold">Total: Rs {total.toFixed(2)}</div>
            <button className="px-4 py-2 bg-[#75BD4B] text-white rounded shadow">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCart