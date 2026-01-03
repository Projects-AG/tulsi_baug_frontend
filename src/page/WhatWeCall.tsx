import { useState, FormEvent, ChangeEvent } from 'react'

const WhatWeCall = () => {
  const [name, setName] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Name submitted:', name)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="flex items-center justify-center gap-16 max-w-full w-full">
        {/* Left Side - Plant Image */}
        <div className="hidden lg:block w-1/2 max-w-lg">
          <img 
            src="/leave-img.png" 
            alt="Plant decoration" 
            className="w-full h-[800px] object-cover opacity-50"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 max-w-lg">
          {/* Heading */}
          <h1 className="text-xl font-bold text-gray-900 mb-4">
            What should we call you ?
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Input Field */}
            <input
              type="text"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              className="w-[90%] px-3 py-4 border border-[#75bd4b] focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-900 shadow-2xl shadow-green-200"
              placeholder=""
            />

            {/* Continue Button */}
            <button
              type="submit"
              className="w-[90%] bg-[#e0555a] hover:bg-red-600 text-white font-semibold py-2 lg:py-2 lg:px-2 md:py-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg text-base md:text-lg"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WhatWeCall
