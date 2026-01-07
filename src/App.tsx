import './App.css'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import SignIn from './page/SignIn'
import WhatWeCall from './page/WhatWeCall'
import PaymentMethod from './page/PaymentMethod'
import NewArrival from './page/NewArrival'
import Deals from './page/Deals'
import Home from './page/Home'
import Categories from './page/Categories'
import Successfully from './page/Successfully'
import TrackOrder3 from './page/TrackOrder3'
import TrackOrder from './page/TrackOrder'
import WishList from './page/WishList'
import ShopArt from './page/ShopArt'
import AddWishList from './page/AddWishList'

// Vendor-panel import

import Dashboard from './vendor/pages/Dashboard'
import VendorLayout from './vendor/layout/VendorLayout'
import AddToCart from './page/AddToCart'
import Hii from './vendor/pages/Hii'


function App() {
  const location = useLocation()
  const isVendorRoute = location.pathname.startsWith('/vendor')
  const isSignInPage = location.pathname === '/whatwecall'

  return (
    <>
      {!isSignInPage && !isVendorRoute && <Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
       <Route path="/track-order" element={<TrackOrder />} />
       <Route path="/wishlist" element={<WishList />} />
       <Route path="/product/:id" element={<ShopArt />} />
       <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/new-arrivals' element={<NewArrival />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/whatwecall' element={<WhatWeCall />} />
        <Route path='/paymentmethod' element={<PaymentMethod />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/successfully" element={<Successfully />} />
        <Route path="/track-order-3" element={<TrackOrder3 />} />
        <Route path='/add-to-wishlist' element={<AddWishList />} />

        {/* Vendor-panel routes */}
        <Route path="/vendor" element={<VendorLayout />}>
          <Route index element={<Navigate to="/vendor/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="hii" element={<Hii />} />
        </Route>
      </Routes>
      {!isSignInPage && !isVendorRoute && <Footer />}
    </>
  )
}

export default App;
