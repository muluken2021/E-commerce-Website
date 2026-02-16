import React, { useState } from 'react';
import SignInForm from './Auth/SignInForm';
import SignUpForm from './Auth/SignUpForm';


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchForm = () => setIsLogin(!isLogin);

  return (
    <div className="w-full flex items-center justify-center bg-gray-100 min-h-[100vh] p-4">
      <div className="max-w-7xl w-full bg-white flex flex-col md:flex-row  shadow-xl overflow-hidden">

        {/* Left - Form */}
        {isLogin ? <SignInForm switchForm={switchForm} /> : <SignUpForm switchForm={switchForm} />}

        {/* Right - Promo */}
        <div className="hidden md:flex w-1/2 bg-brand-600 text-white p-8 flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center space-y-4">
            <h2 className="text-3xl font-bold">Shop the Best Deals</h2>
            <p className="text-brand-100/70 text-sm leading-relaxed max-w-xs mx-auto">
              Explore trending products, exclusive discounts, and seasonal collections tailored for you.
            </p>
            <button className="bg-white text-brand-500 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
              Explore Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
