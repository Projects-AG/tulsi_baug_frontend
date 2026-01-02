import React from 'react'
import { FiCheckCircle, FiBox, FiTruck, FiThumbsUp, FiClock, FiUser } from 'react-icons/fi'

const activity = [
  { id: 1, title: 'Your order has been delivered. Thank you for shopping at Clicon!', time: '23 Jan, 2021 at 7:32 PM', type: 'delivered' },
  { id: 2, title: 'Our delivery man (John Wick) Has picked-up your order for delivery.', time: '23 Jan, 2021 at 2:00 PM', type: 'picked' },
  { id: 3, title: 'Your order has reached at last mile hub.', time: '22 Jan, 2021 at 8:00 AM', type: 'hub' },
  { id: 4, title: 'Your order on the way to (last mile) hub.', time: '21, 2021 at 5:32 AM', type: 'onway' },
  { id: 5, title: 'Your order is successfully verified.', time: '20 Jan, 2021 at 7:32 PM', type: 'verified' },
  { id: 6, title: 'Your order has been confirmed.', time: '19 Jan, 2021 at 2:61 PM', type: 'confirmed' },
]

const TrackOrder3 = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 relative overflow-hidden bg-white">
      {/* Decorative Leaves Background - Left Side */}
      <div className="absolute pointer-events-none hidden lg:block" 
           style={{
             top: '50%',
             left: '50%',
             width: '278.64px',
             height: '651.33px',
             opacity: 0.4,
             transform: 'translate(-560px, -50%) rotate(-0.2deg)'
           }}>
        <img 
          src="/leaf-img-1.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Decorative Leaves Background - Right Side */}
      <div className="absolute pointer-events-none hidden lg:block" 
           style={{
             top: '50%',
             left: '50%',
             width: '278.64px',
             height: '651.33px',
             opacity: 0.4,
             transform: 'translate(280px, -50%) rotate(-180.2deg) scaleX(1)'
           }}>
        <img 
          src="/leaf-img-1.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full max-w-4xl mt-12">
        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
          <div className="bg-green-50 border-b border-green-200 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-lg font-semibold text-gray-800 font-public-sans">#96459761</div>
              <div className="text-sm text-gray-500 mt-1">2 Products • Order Placed in 17 Jan, 2021 at 7:32 PM</div>
            </div>

            <div className="ml-auto text-right">
              <div className="text-xl sm:text-2xl font-semibold text-gray-800">₹ <span className="text-2xl sm:text-3xl font-bold">700.00</span></div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Progress / Timeline */}
            <div className="mb-6">
              <div className="text-sm text-gray-600 mb-4">Order expected arrival <span className="font-semibold text-gray-800">23 Jan, 2025</span></div>

              <div className="w-full">
                {/* Steps */}
                <div className="relative py-6 px-4 sm:px-8">
                  {/* background track */}
                  <div className="absolute left-0 right-0 top-5 h-2 bg-red-100 rounded-full"></div>
                  {/* filled portion (2 of 4 steps completed => 50%) */}
                  <div className="absolute left-0 top-5 h-2 bg-red-400 rounded-full" style={{ width: '50%' }}></div>

                  <div className="relative z-10 flex items-center justify-between">
                    {[
                      { key: 'placed', label: 'Order Placed', icon: <FiCheckCircle size={18} /> },
                      { key: 'pack', label: 'Packaging', icon: <FiBox size={18} /> },
                      { key: 'road', label: 'On The Road', icon: <FiTruck size={18} /> },
                      { key: 'del', label: 'Delivered', icon: <FiThumbsUp size={18} /> },
                    ].map((step, i) => {
                      const completed = i <= 1 // first two are completed as in image
                      return (
                        <div key={step.key} className="flex flex-col items-center w-1/4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${completed ? 'bg-red-500 text-white shadow' : 'bg-white border border-red-200 text-red-300'}`}>
                            {step.icon}
                          </div>
                          <div className={`mt-3 text-sm ${completed ? 'text-red-600 font-medium' : 'text-gray-400'}`}>{step.label}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 font-public-sans mb-4">Order Activity</h3>

              <ul className="space-y-4">
                {activity.map(item => (
                  <li key={item.id} className="flex items-start gap-4">
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center ${item.type === 'delivered' || item.type === 'verified' ? 'bg-green-50 border border-green-200 text-green-600' : 'bg-red-50 border border-red-200 text-red-500'}`}>
                      {item.type === 'delivered' ? <FiCheckCircle /> : item.type === 'picked' ? <FiUser /> : item.type === 'hub' ? <FiBox /> : item.type === 'onway' ? <FiTruck /> : item.type === 'verified' ? <FiCheckCircle /> : <FiClock />}
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-gray-800 font-public-sans">{item.title}</div>
                      <div className="text-xs text-gray-400 mt-1">{item.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackOrder3