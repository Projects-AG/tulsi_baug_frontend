import { useState } from 'react'
import {
  FaThLarge,
  FaBoxOpen,
  FaClipboardList,
  FaTruck,
  FaWarehouse,
  FaChartBar,
  FaUserCog,
  FaBars
} from "react-icons/fa"

const navItems = [
  { id: 'overview', label: 'Overview', icon: <FaThLarge />, active: true },
  { id: 'products', label: 'Products', icon: <FaBoxOpen /> },
  { id: 'orders', label: 'Orders', icon: <FaClipboardList /> },
  { id: 'deliveries', label: 'Deliveries', icon: <FaTruck /> },
  { id: 'inventory', label: 'Inventory Management', icon: <FaWarehouse /> },
  { id: 'reports', label: 'Reports & Analytics', icon: <FaChartBar /> },
  { id: 'profile', label: 'Profile & Settings', icon: <FaUserCog /> }
]

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('overview')

  return (
    <>
      {/* Mobile hamburger */}
      <div className="md:hidden p-3 ">
        <button
          aria-label="Toggle sidebar"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white/70 backdrop-blur-lg p-6 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        {/* Decorative faint leaves/background - SVG pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <g fill="#8BC34A">
              <ellipse cx="40" cy="60" rx="28" ry="42" />
              <ellipse cx="120" cy="140" rx="18" ry="32" />
              <ellipse cx="70" cy="240" rx="36" ry="54" />
              <ellipse cx="150" cy="320" rx="22" ry="36" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-8">
            {/* <div className="text-lg font-semibold">Vendor</div> */}
          </div>

          <nav className="flex-1 mt-6">
            <ul className="space-y-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    onClick={() => setActiveItem(item.id)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-150
                      ${
                        activeItem === item.id
                          ? 'bg-[#DF555A] text-white'
                          : 'text-gray-700 hover:bg-[#DF555A] hover:text-white'
                      }
                    `}
                  >
                    <span className="flex items-center justify-center w-5 h-5">{item.icon}</span>
                    <span className="text-xl md:text-sm font-medium">{item.label}</span>

                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-4">
            {/* <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM2 22c0-4 4-6 10-6s10 2 10 6v0H2z" fill="currentColor"/>
              </svg>
              <span className="text-sm">Sign out</span>
            </a> */}
          </div>
        </div>
      </aside>

      {/* Overlay for mobile when open */}
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-black/20 md:hidden" />}
    </>
  )
}

export default Sidebar