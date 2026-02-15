import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react'; // Optional: for a modern touch

const ReadyToShop = () => {
  return (
    <div className="flex justify-center px-6">
      {/* Container with a subtle gradient and glow effect */}
      <div className="relative max-w-5xl w-full bg-white rounded-[3rem] py-16 lg:py-14 text-center mb-24 border border-orange-400  overflow-hidden">
        
        
        <div className="relative z-10 px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6 tracking-tight">
            Ready to Level Up  Your Style?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10  md:text-lg leading-relaxed text-md">
            Discover our curated collection of premium essentials designed for the modern lifestyle. Quality meets comfort in every piece.
          </p>

          <Link to="/category/all" className="inline-block group">
            <button className="flex items-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#d37a4e] active:scale-95 transition-all duration-300 ">
              <ShoppingBag size={20} />
              <span>Explore Collection</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadyToShop;