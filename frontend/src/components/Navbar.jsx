import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/deals', label: 'Deals' },
    { to: '/new-arrivals', label: 'New Arrivals' },
    { to: '/Cart', label: 'cart' },
   ,
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-serif text-3xl font-medium tracking-wider text-[#AA061B] uppercase">
            HABESHA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#AA061B] font-semibold'
                    : 'text-gray-500 hover:text-black'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className='flex gap-2'>
          <Link
            to="/signin"
            className="bg-transparent border border-[#AA061B] text-[#AA061B] text-sm font-medium px-6 py-2.5 rounded-lg shadow-sm hover:bg-[#AA061B] hover:text-white transition-all duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-[#AA061B] text-white text-sm font-medium px-6 py-2.5 rounded-lg shadow-sm hover:bg-[#970316] transition-all duration-200"
          >
            Sign Up
          </Link>
          
          </div>
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-6 pt-2 flex flex-col space-y-3 bg-white border-t border-gray-100">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 text-base font-medium transition-colors ${
                  isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center bg-black text-white text-base font-medium py-2.5 rounded-lg shadow-sm hover:bg-gray-800 transition-all duration-200 mt-2"
          >
            Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;