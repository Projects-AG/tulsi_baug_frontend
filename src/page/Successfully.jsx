import React from 'react'
import { GoStack } from "react-icons/go";

const Successfully = () => {
  return (
<div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"> 

      {/* Decorative Leaves Background - Left Side */}
      <div className="absolute pointer-events-none hidden lg:block" 
           style={{
             top: '35%',
             left: '42.5%',
             width: '278.64px',
             height: '451.33px',
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
             top: '35%',
             left: '58%',
             width: '278.64px',
             height: '451.33px',
             opacity: 0.4,
             transform: 'translate(280px, -50%) rotate(-180.2deg) scaleX(1)'
           }}>
        <img 
          src="/leaf-img-1.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full max-w-4xl -mt-30">
        <div className="bg-white border border-gray-200 py-16 px-6 sm:px-12 text-center relative overflow-hidden">
          {/* Decorative leaves are rendered as background elements outside the card (see top-level) */}

          <div className="mx-auto flex items-center justify-center -mt-5">
            <img src="/successfull-img.png" alt="success illustration" className="max-w-xs sm:max-w-sm mx-auto" />
          </div>

          <h2 className="mt-8 text-2xl sm:text-3xl font-semibold text-gray-800 font-public-sans">Your order is successfully place</h2>

          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-md mx-auto px-4 sm:px-0 font-public-sans">Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#ff9b9d] text-red-600 rounded hover:bg-red-50 transition">
              <GoStack />
              <span className="font-medium text-sm text-[#e05559] font-public-sans">GO TO DASHBOARD</span>
            </button>

            <button className="inline-flex items-center justify-center px-10 py-3 bg-[#e0555a] hover:bg-red-600 text-white rounded-full transition">
              <span className="font-medium text-sm font-public-sans">View Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Successfully