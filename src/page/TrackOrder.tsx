const TrackOrder = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src="/images/bg-home.png"
        alt="Background Left"
        className="absolute left-[200px] top-[2px] w-[195.31px] h-[456.54px] opacity-40 rotate-[-0.2deg]"
      />
      <img
        src="/images/bg-home.png"
        alt="Background Right"
        className="absolute left-[1010px] top-[-50px] w-[179px] h-[423.36px] opacity-40 rotate-[-179.77deg]"
      />
      <div className="font-sans w-[800px] h-[30=50px] border border-solid border-[#E4E7E9] mx-auto mt-[10px] mb-[30px] relative z-10 bg-white">
        <main className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Track Order</h1>
          <p className="text-sm text-gray-600 mb-6">
            To track your order please enter your order ID in the input field below and press the "Track Order" button. This was given to you on your receipt and in the confirmation email you should have received.
          </p>
          <form className="space-y-4 ">
            <div className="flex justify-between items-center space-x-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="order-id" className="text-sm font-medium text-gray-700">Order ID</label>
                <input
                  type="text"
                  id="order-id"
                  placeholder="ID..."
                  className="mt-1 block w-[300px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="billing-email" className="text-sm font-medium text-gray-700">Billing Email</label>
                <input
                  type="email"
                  id="billing-email"
                  placeholder="Email address"
                  className="mt-1 block w-[300px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="order-id-info"
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="order-id-info" className="ml-2 text-sm text-gray-600">Order ID that we sent to you in your email address.</label>
            </div>
            <button
              type="submit"
              className="w-[283px] h-[47px] bg-[#E0555A] text-white rounded-[30px] shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-6"
            >
              Track Order
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default TrackOrder;
