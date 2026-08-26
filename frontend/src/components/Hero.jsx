import React from 'react';
import { ShoppingCart, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const brands = [
    { name: 'CHANEL', fontClass: 'font-serif font-black tracking-widest' },
    { name: 'LOUIS VUITTON', fontClass: 'font-serif tracking-widest uppercase' },
    { name: 'PRADA', fontClass: 'font-serif font-black tracking-widest' },
    { name: 'Calvin Klein', fontClass: 'font-sans font-light tracking-wide' },
    { name: 'DENIM', fontClass: 'font-sans font-black tracking-wider' },
  ];

  return (
    <section className="relative w-full bg-white md:pb-25 py-8 px-4 md:px-10 max-w-7xl mx-auto">
      {/* ── Grid Container ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* Left Column (Male Model on Wooden Box) */}
        <div className="bg-[#E5E5E5] rounded-xl overflow-hidden min-h-[420px] flex items-end justify-center">
          <img
            src="https://ethiopianculturalshop.com/wp-content/uploads/2023/08/photo_2023-08-31_12-56-22.jpg"
            alt="Male Model Left"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Center Column (Text Content & Mini Banners) */}
        <div className="flex flex-col justify-between items-center space-y-4">
          {/* Top Banner (Group of Women) */}
          <div className="w-full h-24 rounded-xl overflow-hidden bg-gray-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXI0ApZ-xfXYuz9ZfFURX4roUWrN1_jPFqweskqpXZnkrnbUBNJzC72w&s=10"
              alt="Women Collection Top"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hero Text Content */}
          <div className="text-center py-4 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-black text-[#AA061B] tracking-tight leading-none uppercase">
              Ultimate
            </h1>
            <span className="text-5xl md:text-6xl font-extralight text-transparent [-webkit-text-stroke:1px_#374151] tracking-widest block uppercase my-1">
              Sale
            </span>
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
              New Collection
            </p>
            <Link to="/products">
            <button className="cursor-pointer bg-[#AA061B] text-white text-xs font-medium uppercase px-8 py-3 rounded-md shadow-lg hover:bg-[#8d0517] transition-colors">
              Shop Now
            </button>
            </Link>
          </div>

          {/* Bottom Banner (Two Women Pink Background) */}
          <div className="w-full h-24 rounded-xl overflow-hidden bg-rose-200">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHlOH2y6ygXno9kMB6Uo1UEPJ_QJSclnn7czhboMXpnkD5_LENl8L9cc&s=10"
              alt="Women Collection Bottom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column (Male Model on Stool) */}
        <div className="bg-[#E5E5E5] rounded-xl overflow-hidden min-h-[420px] flex items-end justify-center">
          <img
            src="https://ethiopianclothing.net/cdn/shop/files/Fikadu_Habesha_Men_s_Clothes2_2000x.jpg?v=1747502256"
            alt="Male Model Right"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* ── Brand Logos Bar ── */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 px-4 py-4 border-t border-gray-50">
        {brands.map((brand) => (
          <span
            key={brand.name}
            className={`text-xl md:text-2xl text-gray-900 ${brand.fontClass}`}
          >
            {brand.name}
          </span>
        ))}
      </div>

      {/* ── Floating Action Buttons (Bottom Right) ── */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          aria-label="View Cart"
          className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
        >
          <ShoppingCart size={18} />
        </button>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="w-10 h-10 bg-white border border-gray-200 text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;