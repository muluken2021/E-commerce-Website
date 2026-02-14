import React from 'react'
import { ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-white border border-b-gray-200 sticky top-0 z-50">
        <div className="md:mx-10 px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-1.5 rounded-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight">OnlineShop</span>
          </div>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#" className="text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">Menu</a>
            <a href="#" className="hover:text-orange-500">Shop</a>
            <a href="#" className="hover:text-orange-500">Products</a>
          </nav>

          <div className="flex gap-4">
            <button className="p-2 bg-gray-100 rounded-full"><User size={20} /></button>
            <button className="p-2 bg-gray-100 rounded-full relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-gray-300 text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>

  )
}

export default Navbar
