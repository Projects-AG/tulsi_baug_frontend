const WishList = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-[20px] shadow-lg w-[450px] h-[450px] left-[200px] p-6 relative" >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Close"
        >
          ✖
        </button>
        <div className="flex items-center space-x-4">
          <img
            src="/images/wishlist-1.png"
            alt="Product"
            className="w-[150px] h-[150px] object-cover rounded-md"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-800">KOTTY Women Polyester Blend Solid Trousers</h2>
            <p className="text-sm text-gray-600">Color: Black</p>
            <a href="#" className="text-sx font-bold  text-blue-500 hover:underline">See all item Details</a>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 ml-[140px]">Size:</label>
          <select
            id="size"
            className="mt-1 ml-[140px] block w-[60px] px-3 bg-[#F0F2F1] py-2 border-2 border-[#D7D7D7] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
          >
            <option>34</option>
            <option>36</option>
            <option>38</option>
          </select>
        </div>
        <div className="mt-4 ml-[140px]">
           <p
        className="w-[100px] h-[30px]  font-[Plus Jakarta Sans] font-semibold text-[36px] leading-[35px] tracking-[0px] text-black"
        style={{ top: '1036px', left: '860px' }}
      >
        ₹300
      </p>
        <p
        className="w-[360px] h-[35px]font-[Plus Jakarta Sans] font-semibold text-[16px] leading-[35px] tracking-[0px] text-gray-600"
        style={{ top: '1048px', left: '1008px' }}
        >
        M.R.P: <span className="line-through">₹1,999</span> <span className="text-black">(85% OFF)</span>
        </p>
        <p
        className="w-[360px] h-[35px] font-[Plus Jakarta Sans] font-semibold text-[16px] leading-[35px] tracking-[0px] text-black"
        style={{ top: '1088px', left: '1008px' }}
        >
        FREE Delivery by Tulsi Baug
        </p>
        </div>
        <div className="mt-4 flex justify-between space-x-1">
          <button
            className="w-[120px] h-[40px] text-gray-800 ml-[140px] rounded-[30px] border border-gray-300 shadow-md hover:bg-gray-300 focus:outline-none"
            style={{ top: '1212px', boxShadow: '0px 4px 4px 0px #00000040' }}
          >
            Cancel
          </button>
          <button
            className="w-[120px] h-[40px] bg-[#E0555A] text-white rounded-[30px] shadow-md hover:bg-red-600 focus:outline-none"
            style={{ top: '1212px', left: '1127px', boxShadow: '0px 4px 4px 0px #00000040' }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="font-[Plus Jakarta Sans] font-semibold text-[32px] leading-[35px] tracking-[0px]" style={{ width: '487px', height: '210px', top: '594px', left: '841px' }}>
        {/* Additional content can go here */}
      </div>
      <hr className="absolute bg-[#D9D9D9]" style={{ width: '774px', height: '1px', top: '858px', left: '594px' }} />
     
    </div>
  );
};

export default WishList;
