import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import CheckoutPage from './pages/CheckoutPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import Support from './pages/Support';


const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname === '/login'; // hide navbar/footer for login

  return (
    <div>
      {!hideLayout && <Navbar />}
      {!hideLayout && <Header />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/category/:id' element={<CategoryPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/contactus' element={<ContactPage />} />
        <Route path='/support' element={<Support />} />

        <Route path='/login' element={<AuthPage />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
