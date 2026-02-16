import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex items-center justify-center bg-gray-100 min-h-[80vh] p-4">
      <div className="max-w-5xl w-full bg-white overflow-hidden flex flex-col md:flex-row rounded-2xl shadow-xl">
        
        {/* Left Side - Sign In Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-brand-500 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-brand-500 tracking-tight">OnlineShop</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-600 mb-2">Welcome Back</h1>
          <p className="text-gray-400 mb-6 text-sm">
            New to OnlineShop?{' '}
            <a
              href="/register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 font-semibold underline underline-offset-2"
            >
              Create Account
            </a>
          </p>

          {/* Login Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-gray-400 hover:text-brand-500 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-brand-500" />
                Remember me
              </label>
              <a href="#" className="text-brand-500 font-semibold underline underline-offset-2">
                Forgot Password?
              </a>
            </div>

            <button className="w-full bg-brand-500 text-white py-3 rounded-xl font-bold hover:bg-brand-600 transition-colors">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <hr className="border-gray-200" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-gray-400 font-bold uppercase tracking-widest">
              or
            </span>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
                alt="Google"
              />
              <span className="text-sm font-semibold text-gray-600">Continue with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                className="w-5 h-5"
                alt="Facebook"
              />
              <span className="text-sm font-semibold text-gray-600">Continue with Facebook</span>
            </button>
          </div>
        </div>

        {/* Right Side - E-commerce Promo */}
        <div className="hidden md:flex w-1/2 bg-brand-600 text-white p-8 flex-col justify-center items-center relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>

          {/* Promo Content */}
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

export default LoginPage;
