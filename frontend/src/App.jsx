import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetail' element={<ProductDetail />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />


      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
