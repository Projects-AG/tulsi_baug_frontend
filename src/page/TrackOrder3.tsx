import { useEffect } from 'react'
import { FiCheckCircle, FiUser } from 'react-icons/fi'
import { BiCheckDouble } from "react-icons/bi";
import { CiLocationOn, CiMap } from "react-icons/ci";
import { PiNotepad, PiNotebook, PiPackage, PiTruck, PiHandshakeLight } from "react-icons/pi";

interface Activity {
  id: number;
  title: string;
  time: string;
  type: string;
}

interface Step {
  key: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const activity: Activity[] = [
  { id: 1, title: 'Your order has been delivered. Thank you for shopping at Clicon!', time: '23 Jan, 2021 at 7:32 PM', type: 'delivered' },
  { id: 2, title: 'Our delivery man (John Wick) Has picked-up your order for delivery.', time: '23 Jan, 2021 at 2:00 PM', type: 'picked' },
  { id: 3, title: 'Your order has reached at last mile hub.', time: '22 Jan, 2021 at 8:00 AM', type: 'hub' },
  { id: 4, title: 'Your order on the way to (last mile) hub.', time: '21, 2021 at 5:32 AM', type: 'onway' },
  { id: 5, title: 'Your order is successfully verified.', time: '20 Jan, 2021 at 7:32 PM', type: 'verified' },
  { id: 6, title: 'Your order has been confirmed.', time: '19 Jan, 2021 at 2:61 PM', type: 'confirmed' },
]

const steps: Step[] = [
  { key: 'placed', label: 'Order Placed', Icon: PiNotebook },
  { key: 'pack', label: 'Packaging', Icon: PiPackage },
  { key: 'road', label: 'On The Road', Icon: PiTruck },
  { key: 'del', label: 'Delivered', Icon: PiHandshakeLight },
]

const TrackOrder3 = () => {
  // derive completed steps from activity (example: first 2 completed)
  const completedSteps = 2
  // map completed steps to positions between first and last step (so 1 => 0%, last => 100%)
  const completedIndex = Math.max(0, completedSteps - 1)
  const filledWidth = steps.length > 1 ? `${(completedIndex / (steps.length - 1)) * 100}%` : '0%'

  // Load Public Sans Google Font for this page only
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;600;700&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <div style={{ fontFamily: "'Public Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }} className="min-h-screen w-full flex items-start justify-center px-4 lg:py-8 mb-10 md:-mb-30 lg:mb-0 bg-white">
      {/* Decorative Leaves - visible lg */}
      <div className="hidden lg:block absolute left-53 top-101 w-50 opacity-40 transform -translate-x-1/2">
        <img src="/leaf-img-1.png" alt="" className="w-full h-auto object-contain" />
      </div>

      <div className="hidden lg:block absolute right-53 top-120 w-50 opacity-40 transform translate-x-1/2 rotate-180">
        <img src="/leaf-img-1.png" alt="" className="w-full h-auto object-contain" />
      </div>

      <div className="w-full max-w-4xl mt-6">
        <div className="bg-white border border-gray-200 ">
          {/* Header */}
          <div className="bg-[#eef7e9] p-6 border-b border-green-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-lg font-semibold text-gray-800">#96459761</div>
              <div className="text-sm text-gray-500 mt-1">2 Products • Order Placed in 17 Jan, 2021 at 7:32 PM</div>
            </div>

            <div className="ml-auto text-right">
              <div className="text-lg sm:text-xl font-semibold text-gray-800">₹ <span className="text-2xl sm:text-3xl font-bold">700.00</span></div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Expected arrival */}
            <div className="mb-4 text-sm text-gray-600">Order expected arrival <span className="font-semibold text-gray-800">23 Jan, 2025</span></div>

            {/* Progress bar */}
            <div className="w-full mb-8">
              <div className="relative px-6">
                <div className="h-2 bg-red-100 rounded-full relative">
                  <div className="h-2 bg-red-400 rounded-full absolute left-0 top-0 transition-all" style={{ width: filledWidth }} />

                  {/* Step markers (small circles) positioned on the track */}
                  {steps.map((step, i) => {
                    const markerLeft = steps.length > 1 ? `${(i / (steps.length - 1)) * 100}%` : '0%'
                    const isDone = i < completedSteps
                    const isLastTwo = i >= steps.length - 2
                    return (
                      <div
                        key={step.key + '-marker'}
                        style={{ left: markerLeft }}
                        className={`absolute top-1 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center ${isDone ? 'bg-red-400 border border-red-400 text-white' : 'bg-white border border-[#e0555a]'} ${isLastTwo ? 'ring-1 ring-[#e0555a]' : ''}`}
                      />
                    )
                  })}
                </div>

                <div className="relative mt-6 grid grid-cols-4 gap-4">
                  {steps.map((step, i) => {
                    const completed = i < completedSteps
                    const Icon = step.Icon
                    return (
                      <div key={step.key} className="flex flex-col items-center text-center">
                        <div className='w-10 h-10 rounded-full flex items-center justify-center text-[#e0555a]'>
                          <Icon className="text-2xl" />
                        </div>
                        <div className={`mt-3 text-sm ${completed ? 'text-[#191c1f] font-medium' : 'text-[#8c8d8f]'}`}>{step.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-[#e4e7e9] pt-6 -mx-6 sm:-mx-8 px-6 sm:px-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Activity</h3>

              <ul className="space-y-4">
                {activity.map(item => (
                  <li key={item.id} className="flex items-start gap-4">
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center ${item.type === 'delivered' || item.type === 'verified' ? 'bg-green-50 border border-green-200 text-green-600' : 'bg-red-50 border border-red-200 text-red-500'}`}>
                      {item.type === 'delivered' ? <BiCheckDouble className="text-lg" /> : item.type === 'picked' ? <FiUser className="text-lg" /> : item.type === 'hub' ? <CiLocationOn className="text-lg" /> : item.type === 'onway' ? <CiMap className="text-lg" /> : item.type === 'verified' ? <FiCheckCircle className="text-lg" /> : <PiNotepad className="text-lg" />}
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-gray-800">{item.title}</div>
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
