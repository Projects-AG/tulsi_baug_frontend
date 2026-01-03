import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaPhoneAlt, FaMapMarkerAlt, FaHeart, FaShoppingCart, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa'
import { CiLocationOn, CiStar } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiHandbag } from "react-icons/pi";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#fbe6e6] py-2.5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-black font-plus-jakarta">
              <CiLocationOn className="text-black text-base sm:text-lg" />
              <span>Find a Store</span>
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="text-gray-800 text-base hover:text-gray-600 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-800 text-sm sm:text-base hover:text-gray-600 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-800 text-sm sm:text-base hover:text-gray-600 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-800 text-sm sm:text-base hover:text-gray-600 transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-3 sm:py-5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
          <div className="flex items-center justify-between gap-4 lg:gap-8 flex-wrap">
            {/* Hamburger Menu - Mobile Only */}
            <button 
              className="lg:hidden text-2xl text-gray-800 order-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Search Section */}
            <div className="flex-1 order-1 lg:order-1 w-full lg:w-auto lg:max-w-[500px] mx-auto lg:mx-0 lg:ml-65 lg:mr-8">
              <div className="relative flex items-center">
                <div className="flex items-center flex-1 border border-white rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 bg-white shadow-sm">
                  <FaSearch className="text-gray-400 text-base sm:text-lg mr-2" />
                  <input 
                    type="text" 
                    placeholder="What are you looking for?" 
                    className="border-none outline-none w-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 pr-16 sm:pr-20"
                  />
                </div>
                <button className="absolute right-[-4px] sm:right-[-6px] bg-[#e0555a] text-white border-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium cursor-pointer hover:bg-[#d96b5a] transition-colors whitespace-nowrap shadow-lg">
                  Search
                </button>
              </div>
            </div>

            {/* Contact & Actions */}
            <div className="flex justify-end gap-2 sm:gap-4 lg:gap-6 order-3 lg:order-2">
              {/* Phone - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-2.5">
                <TbPhoneCall className="text-xl lg:text-2xl text-gray-800" />
                <div className="flex flex-col leading-snug">
                  <span className="text-xs text-black">Hotline: <span className="text-sm text-black">19008188</span></span>
                  <span className="text-[11px] text-gray-600 hidden lg:block">Pickup your order for free</span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button className="hidden sm:block bg-transparent border-none text-lg sm:text-xl text-gray-800 cursor-pointer p-1.5 sm:p-2 hover:text-gray-600 transition-colors" aria-label="Location">
                  <CiLocationOn className="text-black text-base sm:text-lg" />
                </button>
                <button className="relative bg-transparent border-none text-lg sm:text-xl text-gray-800 cursor-pointer p-1.5 sm:p-2 hover:text-gray-600 transition-colors" aria-label="Wishlist">
                  <CiStar />
                  <span className="absolute top-0 right-0 bg-[#90c84d] text-white text-[9px] sm:text-[10px] font-bold rounded-full w-4 h-4 sm:w-[18px] sm:h-[18px] flex items-center justify-center">
                    0
                  </span>
                </button>
                <Link to="/track-order-3">
                <button className="relative bg-transparent border-none text-lg sm:text-xl text-gray-800 cursor-pointer p-1.5 sm:p-2 hover:text-gray-600 transition-colors" aria-label="Cart">
                  <PiHandbag />
                  <span className="absolute top-0 right-0 bg-[#90c84d] text-white text-[9px] sm:text-[10px] font-bold rounded-full w-4 h-4 sm:w-[18px] sm:h-[18px] flex items-center justify-center">
                    0
                  </span>
                </button>
                </Link>
              </div>

              <Link to="/signin">
              <button className="hidden sm:block bg-[#90c84d] text-white border-none px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer hover:bg-[#7fb23d] transition-colors whitespace-nowrap shadow-xl">
                Sign Up
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white py-3 sm:py-4 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center list-none gap-4 flex-wrap justify-start">
            <li className="relative">
              <Link to="/" className="no-underline text-[#90c84d] text-sm font-bold flex items-center gap-1 hover:text-[#90c84d] transition-colors">
                Home <span className="text-[10px]"><RiArrowDropDownLine className="lg:mt-0.5 h-5 w-4"/></span>
              </Link>
            </li>
            <li className="relative">
              <Link to="/categories" className="no-underline text-gray-600 text-sm font-bold flex items-center gap-1 hover:text-[#90c84d] transition-colors">
                Categories <span className="text-[10px]"><RiArrowDropDownLine className="lg:mt-0.5 h-5 w-4"/></span>
              </Link>
            </li>
            <li className="relative">
              <Link to="/deals" className="no-underline text-gray-600 text-sm font-bold flex items-center gap-1 hover:text-[#90c84d] transition-colors">
                Deals <span className="text-[10px]"><RiArrowDropDownLine className="lg:mt-0.5 h-5 w-4"/></span>
              </Link>
            </li>
            <li className="relative">
              <Link to="/new-arrivals" className="no-underline text-gray-600 text-sm font-bold flex items-center gap-1 hover:text-[#90c84d] transition-colors">
                New Arrivals <span className="text-[10px]"><RiArrowDropDownLine className="lg:mt-0.5 h-5 w-4"/></span>
              </Link>
            </li>
            <li className="ml-auto hidden lg:block whitespace-nowrap">
              <span className="text-gray-800 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-medium">
                🔥 <span className="font-bold">Extra</span> <span className="text-green-500">Sale 30%</span> <span className="font-bold">off</span>
              </span>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col list-none gap-3 py-2">
              <li>
                <Link 
                  to="/" 
                  className="no-underline text-[#90c84d] text-sm font-bold flex items-center justify-between py-2 hover:text-[#90c84d] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home <RiArrowDropDownLine className="h-5 w-4"/>
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories" 
                  className="no-underline text-gray-600 text-sm font-bold flex items-center justify-between py-2 hover:text-[#90c84d] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories <RiArrowDropDownLine className="h-5 w-4"/>
                </Link>
              </li>
              <li>
                <Link 
                  to="/deals" 
                  className="no-underline text-gray-600 text-sm font-bold flex items-center justify-between py-2 hover:text-[#90c84d] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Deals <RiArrowDropDownLine className="h-5 w-4"/>
                </Link>
              </li>
              <li>
                <Link 
                  to="/new-arrivals" 
                  className="no-underline text-gray-600 text-sm font-bold flex items-center justify-between py-2 hover:text-[#90c84d] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  New Arrivals <RiArrowDropDownLine className="h-5 w-4"/>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/signin">
                <button className="w-full bg-[#90c84d] text-white border-none px-6 py-3 rounded-lg text-sm font-semibold cursor-pointer hover:bg-[#7fb23d] transition-colors">
                  Sign Up
                </button>
                </Link>
              </li>
              <li className="mt-2 py-2 text-center">
                <span className="text-gray-800 px-4 py-2 rounded-full text-xs font-medium inline-block">
                  🔥 <span className="font-bold">Extra</span> <span className="text-green-500">Sale 30%</span> <span className="font-bold">off</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
