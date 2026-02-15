import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PopularProducts from '../components/PopularProducts'
import Categories from '../components/Categories'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import ReadyToShop from '../components/ReadyToShop'
import ProductDetail from '../components/ProductDetail'
import ReviewsSection from '../components/ReviewSection'
import TrustedSection from '../components/TrustedSection'


const Home = () => {
  return (
    <div>
    
      <Hero />
      <PopularProducts />
      <Categories />
      <TrustedSection />
      <Reviews />
      <ReadyToShop />     
     
    </div>
  )
}

export default Home
