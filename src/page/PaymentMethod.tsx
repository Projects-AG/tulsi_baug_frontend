import { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  address: string;
  country: string;
  region: string;
  city: string;
  zipCode: string;
  email: string;
  phoneNumber: string;
  shipToDifferentAddress: boolean;
}

const PaymentMethod = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    country: '',
    region: '',
    city: '',
    zipCode: '',
    email: '',
    phoneNumber: '',
    shipToDifferentAddress: false
  })

  // selected payment method state
  const [selectedPayment, setSelectedPayment] = useState<string>('card')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = type === 'checkbox' ? target.checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Decorative Leaves - Left Side (top-left) */}
      <div className="absolute left-0 top-0 hidden lg:block" style={{ width: '220px', height: '635.7413787144791px', top: '-40px', left: '-4px' }}>
        <img src="leaf-img-1.png" alt="" className="w-full h-full object-contain" style={{ transform: 'rotate(-180.67deg)', opacity: 0.4 }} />
      </div>

      {/* Main Content */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section - Form */}
          <div className="lg:col-span-2">
            {/* Delivery Info */}
            <div className="p-6 mb-6 border border-gray-300">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Delivering to Tanishka Jagtap</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    123, XYZ Building, demo road, near Abc chowk, Pune,<br />
                    Maharashtra, 41414, India
                  </p>
                </div>
                <button className="text-blue-500 hover:text-blue-600 font-semibold text-sm transition-colors">
                  Change
                </button>
              </div>
            </div>

            {/* Payment Method Form */}
            <div className="p-6 border border-gray-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Row - Desktop: First small, Last small, Company large */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
                  <div className="lg:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="lg:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="lg:col-span-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name <span className="text-gray-400">(Optional)</span></label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div> 

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                  />
                </div>

                {/* Location Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <div className="relative">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                      </select>
                      <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Region/State</label>
                    <div className="relative">
                      <select
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="delhi">Delhi</option>
                      </select>
                      <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <div className="relative">
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="pune">Pune</option>
                        <option value="mumbai">Mumbai</option>
                      </select>
                      <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="shipToDifferentAddress"
                    checked={formData.shipToDifferentAddress}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-green-500 border-gray-300  focus:ring-green-400"
                  />
                  <label className="text-sm text-gray-600">Ship into different address</label>
                </div>

                {/* Payment Option */}
                <div className="mt-8">
                  <div className='border border-gray-300 rounded-lg p-6'>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Option</h3>

                    {/* Payment Methods - boxed */}
                    <div className="mb-6 -mx-6 px-6 pb-6 border-t lg:mt-2 border-gray-300">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {/* Cash on Delivery */}
                        <div className="border-r border-gray-300 p-4 text-center">
                          <div className="text-3xl mb-2">
                            <img src="dollar-img.png" alt="Dollar" className="h-8 mx-auto" />
                          </div>
                          <p className="text-xs text-gray-700 mb-3">Cash on Delivery</p>
                          <div className="flex justify-center">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="cod"
                              checked={selectedPayment === 'cod'}
                              onChange={() => setSelectedPayment('cod')}
                              className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                            />
                          </div>
                        </div>

                        {/* Google Pay */}
                        <div className="p-4 text-center md:border-r md:border-gray-300 hover:border-orange-500 cursor-pointer transition-colors">
                          <div className="text-3xl mb-2">
                            <img src="googlepay-img.png" alt="Google Pay" className="h-8 mx-auto" />
                          </div>
                          <p className="text-xs text-gray-700 mb-3">Google Pay</p>
                          <div className="flex justify-center">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="google"
                              checked={selectedPayment === 'google'}
                              onChange={() => setSelectedPayment('google')}
                              className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                            />
                          </div>
                        </div>

                        {/* Paypal */}
                        <div className="p-4 text-center md:border-r md:border-gray-300 hover:border-orange-500 cursor-pointer transition-colors">
                          <div className="text-3xl mb-2">
                            <img src="paypal-img.png" alt="Paypal" className="h-8 mx-auto" />
                          </div>
                          <p className="text-xs text-gray-700 mb-3">Paypal</p>
                          <div className="flex justify-center">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="paypal"
                              checked={selectedPayment === 'paypal'}
                              onChange={() => setSelectedPayment('paypal')}
                              className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                            />
                          </div>
                        </div>

                        {/* Phone Pay */}
                        <div className="p-4 text-center border-r border-gray-300">
                          <div className="text-purple-600 text-3xl mb-2">
                            <img src="phonepay-img.png" alt="Phone Pay" className="h-8 mx-auto" />
                          </div>
                          <p className="text-xs text-gray-700 mb-3">Phone Pay</p>
                          <div className="flex justify-center">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="phone"
                              checked={selectedPayment === 'phone'}
                              onChange={() => setSelectedPayment('phone')}
                              className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                            />
                          </div>
                        </div>

                        {/* Debit/Credit Card */}
                        <div className='p-4 text-center'>
                          <div className="text-3xl mb-2">
                            <img src="creditcard-img.png" alt="Dollar" className="h-8 mx-auto" />
                          </div>
                          <p className="text-xs text-gray-700 mb-3">Debit/Credit Card</p>
                          <div className="flex justify-center">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="card"
                              checked={selectedPayment === 'card'}
                              onChange={() => setSelectedPayment('card')}
                              className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Details - show when Google Pay or Card selected */}
                    {(selectedPayment === 'google' || selectedPayment === 'card') && (
                      <div className="space-y-4 border-t border-gray-300 -mx-6 px-6 pt-6">
                        {/* Name on Card */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                          />
                        </div>

                        {/* Card Number */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                          />
                        </div>

                        {/* Expire Date and CVC */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Expire Date</label>
                            <input
                              type="text"
                              placeholder="DD/YY"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order Notes <span className="text-gray-400">(Optional)</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Notes about your order, e.g. special notes for delivery"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=100&fit=crop" 
                    alt="Product" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 mb-1">KOTTY Women Polyester Blend Solid Trousers</h3>
                    <p className="text-xs text-blue-500">1 x 500</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=100&h=100&fit=crop" 
                    alt="Product" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 mb-1">Crop Top women</h3>
                    <p className="text-xs text-blue-500">1 x 350</p>
                  </div>
                </div>
              </div>

              {/* Price Details */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sub-total</span>
                  <span className="text-gray-900">₹ 850</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-500">₹ 150</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">₹ 700</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between text-lg font-bold mb-6">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">₹ 700</span>
              </div>

              {/* Buy Now Button */}
              <button
                type="button"
                onClick={() => handleSubmit(new Event('submit') as any)}
                className="w-full bg-[#e0555a] hover:bg-red-600 text-white font-semibold py-2 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg text-base"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Leaves - Right Side (bottom-right) */}
      <div className="absolute right-0 bottom-0 hidden lg:block" style={{ width: '320px', height: '635.7413787144791px', bottom: '70px', top: '800px' , right: '-30px' }}>
        <img src="leaf-img-1.png" alt="" className="w-[600px] h-full object-contain" style={{ opacity: 0.4 }} />
      </div>
    </div>
  )
}

export default PaymentMethod
