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

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularProducts />
      <Categories />
      <Reviews />
      <ReadyToShop />
      <Footer />
      <ProductDetail />
     
    </div>
  )
}

export default Home
