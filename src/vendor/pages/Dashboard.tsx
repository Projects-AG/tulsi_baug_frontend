import { FiPackage, FiAlertCircle, FiSearch, FiMic ,FiAlertTriangle } from 'react-icons/fi'
import { MdLocalShipping } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const Dashboard = () => {
  // Sample data for top selling products
  const topProducts = [
    {
      id: 1,
      name: "Red Tape Sports Shoes for Men",
      price: "₹2,999",
      available: true,
      inStock: "124 In stock and buying"
    },
    {
      id: 2,
      name: "Fastrack FS Plus Smartwatch",
      price: "₹4,995",
      available: true,
      inStock: "97 In stock and buying"
    },
    {
      id: 3,
      name: "Levis Fashion Men's Shirt",
      price: "₹1,899",
      available: true,
      inStock: "145 In stock and buying"
    }
  ]

  // Sample data for latest orders
  const orders = [
    {
      id: "#2466L",
      product: "Nike Sportswear",
      date: "Jan 12 , 12:23 pm",
      price: "$154.00",
      payment: "Transfer",
      status: "Processing",
      statusColor: "text-blue-600 bg-blue-50"
    },
    {
      id: "#54350F",
      product: "Acqua di Parma",
      date: "May 01 , 01:13 pm",
      price: "$23.00",
      payment: "Credit Card",
      status: "Completed",
      statusColor: "text-green-600 bg-green-50"
    },
    {
      id: "#9876NC",
      product: "Allen Solly",
      date: "Sep 20 , 09:08 am",
      price: "$443.00",
      payment: "Transfer",
      status: "Completed",
      statusColor: "text-green-600 bg-green-50"
    }
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
     {/* Header Section */}
<div className="mb-8 sm:mt-0">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    
    {/* User profile */}
    <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3 justify-end order-1 sm:order-2 lg:mt-0  -mt-23 lg:ml-0 ml-67">
      <img
        src="/public/avtar.png"
        alt="avatar"
        className="lg:w-10  lg:h-10 w-10 h-9 rounded-full object-cover"
      />
      <div className="text-center sm:text-right">
        <div className="text-sm font-medium ">Tanishka Jagtap</div>
        <div className="text-xs text-gray-400 hidden sm:block">
          tanishkajagtap123@gmail.com
        </div>
      </div>
    </div>

    {/* Search */}
    <div className="relative w-full md:max-w-md order-2 sm:order-1 mt-[7px] sm:mt-0">
      <input
        type="text"
        placeholder="Search..."
        className="lg:w-full w-90 lg:ml-0 -ml-10 pl-10 pr-10 py-3 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-100"
      />
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 lg:ml-0 -ml-9" />
      <FiMic className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 lg:mr-0 -mr-5" />
    </div>

  </div>

  {/* Welcome text */}
  <h1 className="mt-4 sm:mt-6 text-2xl sm:text-4xl font-semibold lg:ml-0 -ml-8">
    Welcome back, <span className="text-gray-900">Tanishka!</span>
  </h1>
  <p className="text-gray-500 text-sm mt-1 lg:ml-0 -ml-7">
    Here's Your Current Sales Overview
  </p>
</div>


      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 lg:ml-0 -ml-8">
        {/* Delivered Card */}
        <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Delivered</span>
            <div className="bg-white/20 p-2 rounded-lg">
              <FiPackage className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold mb-1">150</div>
          <div className="text-xs text-white/80">↑ 12% From last month</div>
        </div>

        {/* Pending Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Pending</span>
            <div className="bg-gray-100 p-2 rounded-lg">
              <FiPackage className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">18</div>
          <div className="text-xs text-red-500">↓ 11% From last month</div>
        </div>

        {/* Shipped Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Shipped</span>
            <div className="bg-gray-100 p-2 rounded-lg">
              <MdLocalShipping className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">9</div>
          <div className="text-xs text-green-500">↑ 7.6% From last month</div>
        </div>

        {/* Canceled Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Canceled</span>
            <div className="bg-gray-100 p-2 rounded-lg">
              <FiAlertCircle className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">1</div>
          <div className="text-xs text-green-500">↓ 2.7% From last month</div>
        </div>
      </div>

      {/* Sales Overtime & Top Selling Product */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 lg:ml-0 -ml-8 lg:w-260 w-85">
        {/* Sales Overtime Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 ">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Sales Overtime</h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Revenue
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Order
              </span>
              <BsThreeDots className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[
                { month: "Jun", revenue: 6000, order: 1000 },
                { month: "Jul", revenue: 9000, order: 1500 },
                { month: "Aug", revenue: 10000, order: 2500 },
                { month: "Sep", revenue: 8000, order: 4000 },
                { month: "Oct", revenue: 5000, order: 11000 },
                { month: "Nov", revenue: 4000, order: 8000 },
                { month: "Dec", revenue: 9000, order: 7000 },
                { month: "Jan", revenue: 18000, order: 11000 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="order" stroke="#ef4444" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

       {/* Top Selling Product */}
<div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2">
    <h2 className="text-base sm:text-lg font-semibold text-gray-900">
      Top Selling Product
    </h2>
    <button className="text-sm text-gray-600 hover:text-gray-900 self-start sm:self-auto transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
      See All Product
    </button>
  </div>

  <div className="space-y-3 sm:space-y-4">
    {topProducts.map((product) => (
      <div
        key={product.id}
        className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
      >
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
          <FiPackage className="w-6 h-6 text-gray-400" />
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-900">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500">
            {product.price}
          </p>
        </div>

        <div className="flex sm:flex-col sm:text-right justify-between sm:justify-start">
          <div className="flex items-center gap-1 text-xs text-green-600 mb-0 sm:mb-1">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            Available
          </div>
          <p className="text-xs text-gray-500">
            {product.inStock}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>  
</div>

    {/* Earnings Section */}
<div className="mb-9">
  <h3 className="text-sm font-medium text-gray-600 mb-4">Earnings</h3>

  <div className="flex flex-col lg:flex-row gap-3">
    
    {/* Card 1 */}
    <div className="flex flex-row gap-19 bg-white border border-gray-200 rounded-lg lg:p-7 p-7 lg:ml-0 -ml-8">
      <p className="text-xl  font-semibold text-black-500 mb-2">Total Earnings</p>
      <p className="text-xl font-semibold text-gray-900">₹ 30,000</p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-row gap-19 bg-white border border-gray-200 rounded-lg lg:p-7 p-7 lg:ml-0 -ml-8">
      <p className="text-xl  font-semibold text-black-500 mb-2">Next Payout</p>
      <p className="text-xl font-semibold text-gray-900">₹ 10,000</p>
    </div>

    {/*  Card 3 */}
    <div className="flex items-center justify-between border border-gray-300 rounded-lg px-9 py-3 gap-9  lg:ml-0 -ml-8 ">
     <div className="flex items-center gap-2">
    <span className="text-lg font-medium text-gray-700 lg:ml-0 -ml-3">
      ₹ Product Alerts
    </span>
    </div>
     <div className="text-sm text-gray-500 flex items-center gap-1">
  <div className="flex flex-col gap-1">
  {/* Low Stock Section */}
  <div className="text-sm text-[#00000] font-semibold flex items-center gap-1 mt-2 ">
    <div className="bg-[#E05559] border border-[#E05559] rounded-lg p-2 flex items-center justify-center">
      <FiAlertTriangle className="lg:text-xl  text-white " />
    </div>
    Low Stock
  </div>

  {/* Span Below */}
  <span className="text-gray-500 text-sm ml-10 lg:-mt-3 ">10 item</span>
</div>
</div>
    </div>
  </div>
</div>

{/* Latest Orders Table */}
<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden lg:ml-0 -ml-8">

  {/* Header */}
  <div className="p-4 sm:p-6 border-b border-gray-200">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <h2 className="text-base sm:text-lg font-semibold text-gray-900">
        Latest Orders
      </h2>

      <div className="flex flex-wrap gap-2">
        <button className="px-3 sm:px-4 py-2 bg-green-500 text-white text-xs sm:text-sm rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg cursor-pointer">
          Customer
        </button>
        <button className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer">
          Filter
        </button>
        <button className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer">
          Export
        </button>
      </div>
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="min-w-[700px] sm:min-w-full w-full">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Order ID
          </th>
          <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Product
          </th>
          <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Order Date
          </th>
          <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Price
          </th>
          <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Payment
          </th>
          <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Status
          </th>
          <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Action
          </th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {orders.map((order) => (
          <tr key={order.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
              {order.id}
            </td>

            <td className="px-4 sm:px-6 py-3 text-sm text-gray-600 whitespace-nowrap">
              {order.product}
            </td>

            <td className="hidden md:table-cell px-6 py-3 text-sm text-gray-600 whitespace-nowrap">
              {order.date}
            </td>

            <td className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
              {order.price}
            </td>

            <td className="hidden lg:table-cell px-6 py-3 text-sm text-gray-600 whitespace-nowrap">
              {order.payment}
            </td>

            <td className="px-4 sm:px-6 py-3 whitespace-nowrap">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${order.statusColor}`}>
                {order.status}
              </span>
            </td>

            <td className="px-4 sm:px-6 py-3 whitespace-nowrap">
              <button className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:scale-125 active:scale-95 cursor-pointer rounded-full p-1 hover:bg-gray-100">
                <BsThreeDots className="w-5 h-5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default Dashboard