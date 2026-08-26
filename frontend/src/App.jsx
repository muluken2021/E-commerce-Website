import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import CheckoutPage from './pages/CheckoutPage';
import ProfilePage from './pages/ProfilePage';

import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import Support from './pages/Support';
import SignUpForm from './pages/Auth/SignUpForm';
import SignInForm from './pages/Auth/SignInForm';
import DealsPage from './pages/DealsPage';
import NewArrivals from './components/PopularProducts';
import ContactUs from './pages/ContactUs';
import ShippingDelivery from './pages/ShippingDelivery';
import ReturnsAndExchanges from './pages/ReturnsAndExchanges';
import FAQ from './pages/FAQ';


const App = () => {
  const location = useLocation();
 const hideLayout = ['/signin', '/signup'].includes(location.pathname);
  return (
    <div>
      {!hideLayout && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/products' element={<CategoryPage />} />
        <Route path='/deals' element={<DealsPage />} />
        <Route path='/new-arrivals' element={<NewArrivals />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/shipping' element={<ShippingDelivery />} />
        <Route path='/returns' element={<ReturnsAndExchanges />} />
        <Route path='/faq' element={<FAQ />} />



 
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/contactus' element={<ContactPage />} />
        <Route path='/support' element={<Support />} />

        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/signin' element={<SignInForm />} />

      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
