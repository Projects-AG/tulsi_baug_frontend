import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
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

function App() {
  const location = useLocation()
  const isSignInPage = location.pathname === '/whatwecall'

  return (
    <>
      {!isSignInPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
       <Route path="/track-order" element={<TrackOrder />} />
       <Route path="/wishlist" element={<WishList />} />
       <Route path="/product/:id" element={<ShopArt />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/new-arrivals' element={<NewArrival />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/whatwecall' element={<WhatWeCall />} />
        <Route path='/paymentmethod' element={<PaymentMethod />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/successfully" element={<Successfully />} />
        <Route path="/track-order-3" element={<TrackOrder3 />} />
      </Routes>
      {!isSignInPage && <Footer />}
    </>
  )
}

export default App;
