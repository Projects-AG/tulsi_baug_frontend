import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Information Section */}
          <div className="font-plus-jakarta lg:mt-1 -mt-10 md:mt-20">
            <div className="flex flex-col gap-2">
              {/* <a href="/" className="inline-block" aria-label="TeeSpace home">
                <img src="/logo-img.png" alt="TeeSpace logo" className="h-60 w-auto" />
              </a> */}
              <a href="mailto:hello@teespace.io" className="text-gray-500 hover:text-gray-800 transition-colors text-sm">
                hello@teespace.io
              </a>
              <p className="text-gray-800 font-bold text-md">
                +02 036 038 3996
              </p>
              <address className="text-gray-500 not-italic leading-relaxed text-sm">
                3665 Paseo Place, Suite 0960<br />
                San Diego
              </address>
            </div>
          </div>

          {/* Useful Links Section 1 */}
          <div className="font-plus-jakarta">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Information</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Start a Return
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Shipping FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section 2 */}
          <div className="font-plus-jakarta">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Useful links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Print Provider
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Custom Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Make your own shirt
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="font-plus-jakarta">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Newsletter</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Get the latest news, events & more delivered to your inbox.
            </p>
            <div className="flex items-center shadow-sm hover:shadow-xl transition-shadow rounded-xl px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-[#90c84d]/30">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-500 placeholder-gray-400"
              />
              <button 
                className="bg-transparent border-none cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Subscribe"
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center items-center gap-3 mb-6 flex-wrap">
          <div className="bg-white rounded px-3 py-2 shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-6 w-auto" />
          </div>
          <div className="bg-white rounded px-3 py-2 shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6 w-auto" />
          </div>
          <div className="bg-white rounded px-3 py-2 shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-6 w-auto" />
          </div>
          <div className="bg-white rounded px-3 py-2 shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-auto" />
          </div>
          <div className="bg-white rounded px-3 py-2 shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Shop_Pay_logo.svg" alt="Shop Pay" className="h-6 w-auto" />
          </div>
          <div className="bg-white rounded px-3 py-2 shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 w-auto" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          © 2022 TeeSpace. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
