import React from 'react'
// import {  Carousel,  initTWE } from "tw-elements";
import shopping from '../../assets/Shopping.jpeg';


function HeroSection() {

  return (
    <div>
        {/* <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" /> */}
        <img src={shopping} alt="Online Shopping Banner" className="container mx-auto px-4 mt-5" />
    </div>


  )
}
// initTWE({ Carousel });

export default HeroSection



