import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom' // added useNavigate to route search results
import { FaSearch, FaPhoneAlt, FaMapMarkerAlt, FaHeart, FaShoppingCart, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes, FaQuestionCircle, FaFileAlt, FaShieldAlt, FaTruck } from 'react-icons/fa' 
import { CiLocationOn, CiStar } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiHandbag } from "react-icons/pi";
import { TbUserHexagon, TbLogout2 } from "react-icons/tb";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { HiOutlineArrowTurnDownLeft } from "react-icons/hi2";



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement | null>(null);

  // Search state for header
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();
  const handleSearch = () => {
    const q = searchTerm.trim();
    // close mobile menu when searching from mobile
    setIsMobileMenuOpen(false);
    if (q) navigate(`/deals?q=${encodeURIComponent(q)}`);
    else navigate('/deals');
  }

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsUserMenuOpen(false);
    }
    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleOutside);
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isUserMenuOpen]);

  return (
    <header className="w-full">
      {/* Top Bar */}

      {/* Mobile promo (mobile only) - fixed with 3 scrolling divs */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 overflow-hidden">
        <div className="bg-[#90c84d] py-2.5">
          <div className="flex animate-scroll-horizontal whitespace-nowrap">
            {/* Group A (first set) */}
            <div className="flex flex-nowrap flex-shrink-0 min-w-max">
              <div className="inline-flex items-center px-8 text-white text-sm font-semibold">
                Buy 3 Get 25% Off, Shop Now &gt;&gt;
              </div>
              <div className="inline-flex items-center gap-2 px-8 text-white text-sm font-semibold">
                <FaTruck className="text-white text-lg" />
                FREE shipping on £39.00+ | <HiOutlineArrowTurnDownLeft /> Free Returns
              </div>
              <div className="inline-flex items-center px-8 text-white text-sm font-semibold">
                Cosy Chick Deals, 60-30% Off, Shop Here &gt;&gt;
              </div>
            </div>

            {/* Group B (duplicate set) */}
            <div className="flex flex-nowrap flex-shrink-0 min-w-max">
              <div className="inline-flex items-center px-8 text-white text-sm font-semibold">
                Buy 3 Get 25% Off, Shop Now &gt;&gt;
              </div>
              <div className="inline-flex items-center gap-2 px-8 text-white text-sm font-semibold">
                <FaTruck className="text-white text-lg" />
                FREE shipping on £39.00+ | <HiOutlineArrowTurnDownLeft /> Free Returns  
              </div>
              <div className="inline-flex items-center px-8 text-white text-sm font-semibold">
                Cosy Chick Deals, 60-30% Off, Shop Here &gt;&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Marquee scroll animation */}
      <style>{`
        @keyframes scroll-horizontal {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-100%,0,0); }
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal 5s linear infinite;
          will-change: transform;
          display: flex;
        }
        /* ensure groups don't shrink and preserve exact widths */
        .animate-scroll-horizontal > div {
          flex: 0 0 auto;
          max-width: max-content;
        }
      `}</style>

      {/* Desktop Top Bar */}
      <div className="bg-[#fbe6e6] py-2.5 hidden md:block">
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
      <div className="py-3 sm:py-5 pt-14 md:pt-3">
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
                    placeholder="What are you looking for?" 
                    className="border-none outline-none w-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 pr-16 sm:pr-20"
                  />
                </div>
                <button onClick={handleSearch} className="absolute right-[-4px] sm:right-[-6px] bg-[#e0555a] text-white border-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium cursor-pointer hover:bg-[#d96b5a] transition-colors whitespace-nowrap shadow-lg">
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
                <Link to="/add-to-wishlist">
                <button className="relative bg-transparent border-none text-lg sm:text-xl text-gray-800 cursor-pointer p-1.5 sm:p-2 hover:text-gray-600 transition-colors" aria-label="Wishlist">
                  <CiStar />
                  <span className="absolute top-0 right-0 bg-[#90c84d] text-white text-[9px] sm:text-[10px] font-bold rounded-full w-4 h-4 sm:w-[18px] sm:h-[18px] flex items-center justify-center">
                    0
                  </span>
                </button>
                </Link>
                <Link to="/add-to-cart">
                <button className="relative bg-transparent border-none text-lg sm:text-xl text-gray-800 cursor-pointer p-1.5 sm:p-2 hover:text-gray-600 transition-colors" aria-label="Cart">
                  <PiHandbag />
                  <span className="absolute top-0 right-0 bg-[#90c84d] text-white text-[9px] sm:text-[10px] font-bold rounded-full w-4 h-4 sm:w-[18px] sm:h-[18px] flex items-center justify-center">
                    0
                  </span>
                </button>
                </Link>
                <div className="relative hidden sm:block">
                  <button
                    onClick={() => setIsUserMenuOpen(prev => !prev)}
                    className="relative bg-transparent border-none text-lg sm:text-xl text-gray-800 cursor-pointer p-1.5 sm:p-2 hover:text-gray-600 transition-colors"
                    aria-haspopup="true"
                    aria-expanded={isUserMenuOpen}
                    aria-label="User menu"
                  >
                    <TbUserHexagon />
                    <span className="absolute top-0 right-0 bg-[#90c84d] text-white text-[9px] sm:text-[10px] font-bold rounded-full w-4 h-4 sm:w-[18px] sm:h-[18px] flex items-center justify-center">
                      0
                    </span>
                  </button>

                  {isUserMenuOpen && !isMobileMenuOpen && (
                    <div ref={userMenuRef} role="dialog" aria-label="User menu" className="absolute right-0 mt-2 w-64 sm:w-72 bg-white rounded-xl shadow-xl p-4 border border-gray-100 z-50 transform transition-all duration-150 ease-out" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>

                      <div className="flex items-center gap-3">
                        <TbUserHexagon className="text-3xl text-[#213547]" />
                        <h3 className="text-xl font-bold text-[#0f172a]">User</h3>
                      </div>

                      <hr className="my-3 border-gray-200" />

                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#90c84d] cursor-pointer">
                          <FaQuestionCircle className="text-base" />
                          <span>FAQ's</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#90c84d] cursor-pointer">
                          <FaFileAlt className="text-base" />
                          <span>Terms Of Use</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#90c84d] cursor-pointer">
                          <MdOutlinePrivacyTip className="text-base" />
                          <span>Privacy Policy</span>
                        </li>
                      </ul>

                      <a href="/signin" className="block mt-4">
                        <button className="w-full bg-[#90c84d] text-white rounded-xl py-2 text-sm font-bold shadow-xl flex items-center justify-between px-4">
                          <span className="font-bold">LOGIN / SIGNUP</span>
                          <TbLogout2 className="ml-2 lg:-ml-5 text-lg" aria-hidden="true" />
                        </button>
                      </a>
                    </div>
                  )}
                </div>
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
              <NavLink to="/" end className={({ isActive }) => `no-underline text-sm font-bold flex items-center gap-1 transition-colors ${isActive ? 'text-[#90c84d]' : 'text-gray-600 hover:text-[#90c84d]'}`}>
                Home <span className="text-[10px]"><RiArrowDropDownLine className="lg:mt-0.5 h-5 w-4"/></span>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink to="/categories" className={({ isActive }) => `no-underline text-sm font-bold flex items-center gap-1 transition-colors ${isActive ? 'text-[#90c84d]' : 'text-gray-600 hover:text-[#90c84d]'}`}>
                Categories <span className="text-[10px]"><RiArrowDropDownLine className="lg:mt-0.5 h-5 w-4"/></span>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink to="/deals" className={({ isActive }) => `no-underline text-sm font-bold flex items-center gap-1 transition-colors ${isActive ? 'text-[#90c84d]' : 'text-gray-600 hover:text-[#90c84d]'}`}>
                Deals <span className="text-[10px]"><RiArrowDropDownLine className="lg:mt-0.5 h-5 w-4"/></span>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink to="/new-arrivals" className={({ isActive }) => `no-underline text-sm font-bold flex items-center gap-1 transition-colors ${isActive ? 'text-[#90c84d]' : 'text-gray-600 hover:text-[#90c84d]'}`}>
                New Arrivals <span className="text-[10px]"><RiArrowDropDownLine className="lg:mt-0.5 h-5 w-4"/></span>
              </NavLink>
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
              {/* Mobile Profile Toggle (moved to top) */}
              <li>
                <button
                  onClick={() => setIsUserMenuOpen(prev => !prev)}
                  className="w-full flex items-center justify-between py-2 text-gray-600 text-sm font-bold hover:text-[#90c84d] transition-colors"
                  aria-expanded={isUserMenuOpen}
                  aria-controls="mobile-user-menu"
                >
                  <div className="flex items-center gap-2">
                    <TbUserHexagon />
                    <span>Profile</span>
                  </div>
                  <RiArrowDropDownLine className={`h-5 w-4 transform transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {isUserMenuOpen && (
                  <div id="mobile-user-menu" ref={userMenuRef} className="mt-2 bg-white rounded-lg shadow p-4 border border-gray-100">

                    <div className="flex items-center gap-3">
                      <TbUserHexagon className="text-3xl text-[#213547]" />
                      <h3 className="text-lg font-bold text-[#0f172a]">User</h3>
                    </div>

                    <hr className="my-3 border-gray-200" />

                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#90c84d] cursor-pointer">
                        <FaQuestionCircle className="text-base" />
                        <span>FAQ's</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#90c84d] cursor-pointer">
                        <FaFileAlt className="text-base" />
                        <span>Terms Of Use</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#90c84d] cursor-pointer">
                        <MdOutlinePrivacyTip className="text-base" />
                        <span>Privacy Policy</span>
                      </li>
                    </ul>

                    <Link to="/signin" className="block mt-4">
                      <button className="w-full bg-[#90c84d] text-white rounded-xl py-2 text-sm font-bold shadow-xl flex items-center justify-between px-4">
                        <span className="font-bold">LOGIN / SIGNUP</span>
                        <TbLogout2 className="ml-2 lg:-ml-5 text-lg" aria-hidden="true" />
                      </button>
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <NavLink
                  to="/"
                  end
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `no-underline text-sm font-bold flex items-center justify-between py-2 transition-colors ${isActive ? 'text-[#90c84d]' : 'text-gray-600 hover:text-[#90c84d]'}`}
                >
                  Home <RiArrowDropDownLine className="h-5 w-4"/>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/categories"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `no-underline text-sm font-bold flex items-center justify-between py-2 transition-colors ${isActive ? 'text-[#90c84d]' : 'text-gray-600 hover:text-[#90c84d]'}`}
                >
                  Categories <RiArrowDropDownLine className="h-5 w-4"/>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/deals"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `no-underline text-sm font-bold flex items-center justify-between py-2 transition-colors ${isActive ? 'text-[#90c84d]' : 'text-gray-600 hover:text-[#90c84d]'}`}
                >
                  Deals <RiArrowDropDownLine className="h-5 w-4"/>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/new-arrivals"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `no-underline text-sm font-bold flex items-center justify-between py-2 transition-colors ${isActive ? 'text-[#90c84d]' : 'text-gray-600 hover:text-[#90c84d]'}`}
                >
                  New Arrivals <RiArrowDropDownLine className="h-5 w-4"/>
                </NavLink>
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
