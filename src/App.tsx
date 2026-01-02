import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import SignIn from './page/SignIn.jsx'
import WhatWeCall from './page/WhatWeCall.jsx'
import PaymentMethod from './page/PaymentMethod.jsx'
import NewArrival from './page/NewArrival.jsx'
import Deals from './page/Deals.jsx'
import Home from './page/Home'
import Categories from './page/Categories'
import Successfully from './page/Successfully.jsx'
import TrackOrder3 from './page/TrackOrder3.jsx'

function AppContent() {
  const location = useLocation()
  const isSignInPage = location.pathname === '/signin' || location.pathname === '/whatwecall'

  return (
    <>
      {!isSignInPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/new-arrivals' element={<NewArrival />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/whatwecall' element={<WhatWeCall />} />
        <Route path='/paymentmethod' element={<PaymentMethod />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/successfully" element={<Successfully />} />
        <Route path="/track-order-3" element={<TrackOrder3 />} />
      </Routes>
      {!isSignInPage && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
