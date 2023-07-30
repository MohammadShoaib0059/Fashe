import React from 'react'
import Navigation from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import CartItems from '../Components/CartItems'
import Newslatter from '../Components/Newslatter'
import Footer from '../Components/Footer'

const Cart = () => {
  return (
    <div>
      <Navigation/>
      <Announcement/>
      <img src='../Images/master-slide-02.jpg.webp' width="100%"/>
      <CartItems/>
      <Newslatter/>
      <Footer/>
    </div>
  )
}

export default Cart
