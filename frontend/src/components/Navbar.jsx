import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart(); 

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const links = [
    { name: "Home", to: "/" },
    { name: "Menu", to: "/menu" },
    { name: "Shop", to: "/category/all" },
    { name: "Products", to: "/products" }
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="md:mx-10 px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 p-1.5 rounded-lg">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl tracking-tight">OnlineShop</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex gap-4 items-center">
          <Link to="/profile">
            <button className="cursor-pointer p-2 bg-gray-100 rounded-full hover:bg-orange-300">
              <User size={20} />
            </button>
          </Link>
          <Link to="/cart">
            <button className="cursor-pointer p-2 bg-gray-100 rounded-full relative hover:bg-orange-300">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-orange-300 text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalQuantity} {/* ✅ dynamic cart number */}
              </span>
            </button>
          </Link>

          {/* Hamburger menu for mobile */}
          <button 
            className="md:hidden p-2 rounded-md bg-gray-100 hover:bg-orange-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t border-gray-200">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "text-orange-500 font-bold block" : "hover:text-orange-500 block"}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
