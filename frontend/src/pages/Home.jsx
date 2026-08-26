import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import PopularProducts from '../components/PopularProducts';
import ArticlesSection from '../components/ArticlesSection';
import Reviews from '../components/Reviews';
import DealsOfTheMonth from '../components/DealsOfTheMonth';
import InstagramGallery from '../components/InstagramGallery';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <DealsOfTheMonth/>
      {/* <Categories /> */}
      <PopularProducts />
      <InstagramGallery/>
      <ArticlesSection />
      <Reviews />
    </div>
  );
};

export default Home;
