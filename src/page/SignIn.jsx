import React, { useState } from 'react'

const SignIn = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with:', emailOrPhone)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 relative overflow-hidden bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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

      {/* Sign In Card */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-8 md:p-12 border z-20">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Sign in or create account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Label */}
          <div>
            <label htmlFor="emailOrPhone" className="block text-base md:text-lg font-medium text-gray-800 mb-3">
              Enter mobile number or email
            </label>
            
            {/* Input Field */}
            <input
              type="text"
              id="emailOrPhone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full px-4 py-3 md:py-4 border-2 border-[#75bd4b] focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent transition-all text-gray-900 shadow-xl shadow-[#e0f0d7]"
              placeholder=""
            />
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full bg-[#e0555a] hover:bg-red-600 text-white font-semibold py-3 md:py-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg text-base md:text-lg"
          >
            Continue
          </button>

          {/* Terms Text */}
          <p className="text-sm md:text-base text-[#000000] text-center">
            By continuing, you agree to Tulsi Baug{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600 underline font-semibold">
              Conditions of Use
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600 underline font-semibold">
              Privacy Notices
            </a>
          </p>
        </form>

        {/* Divider */}
        <div className="my-8 border-t border-[#7e7e7e]"></div>

        {/* Seller Login Section */}
        <div className="">
          <p className="text-base md:text-lg text-[#000000] font-medium mb-2">
            Are you a Seller?
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 font-semibold text-base md:text-lg  transition-colors"
          >
            Seller Login
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignIn