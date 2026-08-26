import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* ── Newsletter Section ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[420px] relative z-10">
          
          {/* Left Model Image */}
          <div className="hidden lg:block w-1/4 h-[420px] relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Male model with yellow coat"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Newsletter Form Container */}
          <div className="flex-1 max-w-lg mx-auto text-center px-4 py-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-800 tracking-tight mb-3">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-xs md:text-sm text-gray-400 mb-8 leading-relaxed max-w-md mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="michael@ymail.com"
                className="w-full max-w-md px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-gray-400 transition-all shadow-inner"
                required
              />
              <button
                type="submit"
                className="bg-[#AA061B] text-white text-sm font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Right Model Image */}
          <div className="hidden lg:block w-1/4 h-[420px] relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
              alt="Female model with grey blazer"
              className="w-full h-full object-cover object-top"
            />
          </div>

        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <div className="border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-wider text-[#AA061B] uppercase">
              HABESHA
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8 text-xs text-gray-500 font-medium">
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/shop" className="hover:text-black transition-colors">
              Shop
            </Link>
            <Link to="/products" className="hover:text-black transition-colors">
              Products
            </Link>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-black transition-colors">
              <span>Pages</span>
              <span className="text-[10px]">▼</span>
            </div>
          </nav>

        </div>
      </div>

      {/* ── Bottom Copyright ── */}
      <div className="border-t border-gray-100 py-4 text-center text-[10px] text-gray-400">
        Copyright © 2026 HABESHA . All Rights Reserved.
      </div>
    </footer>
  );
}