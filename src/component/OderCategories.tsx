const OderCategories = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh] relative">
      <div className="max-w-md text-left relative lg:left-[-250px] lg:top-[42px]">
        <h1
          className="text-[30px]  text-justify  font-bold mb-4 leading-[46px] tracking-normal align-middle"
          style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700 }}
        >
          Order Now at <br /> Tulsi Baug
        </h1>
        <p className="text-xs mb-6 text-gray-600">
          Get the latest news, Ethnic, designer Cloth from Tulsi Baug.
        </p>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full  lg:max-w-[500px] h-[40px] bg-[#F5F5F5] border border-gray-200 rounded-[12px] p-2"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Subscribe
          </button>
        </div>
      </div>
      <div className="overflow-hidden max-h-[90%] mt-6">
        <img
          src="/public/images/order-girl.png"
          alt="Tulsi Baug Model"
          className="max-w-xs rounded-lg"
        />
      </div>
      <img
        src="/public/images/order-sy.png"
        alt="Arrow pointing to Subscribe button"
        className="absolute w-[67px] h-[67px] top-[14px] left-[50%] transform rotate-[-90deg] scale-x-[-1] opacity-100"
      />
      <div className="absolute bottom-0 right-0 w-[238px] h-[339px] transform rotate-[23deg] z-[9999]">
        <img
          src="/images/order-bag.png"
          alt="Green Bag"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default OderCategories;
