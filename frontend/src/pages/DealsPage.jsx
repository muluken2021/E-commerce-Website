import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Timer, 
  Flame, 
  Tag, 
  Percent, 
  ArrowRight, 
  Filter,
  Package,
  Sparkles
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import {bundleDeals, flashProducts, carouselDeals} from '../utils/newArrivalsData.js'


// --- Main Deals Page Component ---
const DealsPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(flashProducts);

  // Filter products handler
  useEffect(() => {
    if (activeTab === 'All') {
      setFilteredProducts(flashProducts);
    } else {
      setFilteredProducts(flashProducts.filter(p => p.category === activeTab));
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* ── SECTION 1: Dynamic Top Banner ── */}
      <section className="bg-black text-white py-12 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#AA061B_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AA061B] text-xs font-semibold uppercase tracking-widest text-white mb-4">
            <Flame size={14} /> Flash Sales Live
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4">
            Exclusive Deals & Discounts
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl font-light mb-6">
            Up to 50% off on handpicked handcrafted wear, accessories, and seasonal bundles. Limited stock available.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-gray-400 font-mono border-t border-gray-800 pt-4 w-full max-w-md">
            <span>✓ Verified Authenticity</span>
            <span>✓ Express Shipping</span>
            <span>✓ Easy Returns</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Deals Of The Month Slider ── */}
      <DealsOfTheMonthSection />

      {/* ── SECTION 3: Category Filterable Flash Deals ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#AA061B] text-xs font-bold uppercase tracking-wider mb-1">
              <Tag size={14} /> Daily Steals
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gray-900">
              Limited-Time Flash Deals
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {['All', 'Traditional', 'Accessories', 'Men'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={(p) => alert(`Added ${p.title} to cart!`)}
              onQuickView={(p) => alert(`Quick view: ${p.title}`)}
            />
          ))}
        </div>
      </section>

      {/* ── SECTION 4: Bundle & Save (Grid Banner) ── */}
      <section className="bg-white py-16 px-6 md:px-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[#AA061B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 mb-2">
              <Package size={15} /> Curated Packages
            </span>
            <h2 className="text-3xl font-serif font-medium text-gray-900">
              Bundle & Save Extra
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Combine items together in one purchase and save up to an additional $130 instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bundleDeals.map((bundle) => (
              <div 
                key={bundle.id} 
                className="group border border-gray-200 rounded-2xl overflow-hidden bg-gray-50 flex flex-col sm:flex-row hover:shadow-lg transition-shadow duration-300"
              >
                <div className="sm:w-1/2 h-64 sm:h-auto overflow-hidden relative">
                  <img 
                    src={bundle.image} 
                    alt={bundle.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#AA061B] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                    {bundle.savings}
                  </span>
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-gray-900 mb-2">
                      {bundle.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">
                      {bundle.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xl font-bold font-serif text-gray-900">{bundle.price}</span>
                      <span className="text-xs text-gray-400 line-through">{bundle.origPrice}</span>
                    </div>
                    <button className="w-full py-2.5 bg-black hover:bg-[#AA061B] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      Claim Bundle Deal <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: VIP Club / Early Access ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-lg">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 mb-2">
              <Sparkles size={14} /> VIP Deal Alerts
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium">
              Never Miss A Flash Sale
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Subscribe to get immediate notification 2 hours before our promotional discounts go live to the public.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-lg bg-gray-800 text-white text-sm border border-gray-700 focus:outline-none focus:border-amber-400 min-w-[260px]"
              required
            />
            <button className="px-6 py-3 bg-[#AA061B] hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              Get Early Access
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

// --- Sub-Component: Deals Of The Month Slider ---
const DealsOfTheMonthSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 6, minutes: 5, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerTransition = (newIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 3) % carouselDeals.length;
    triggerTransition(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeIndex - 3 < 0 ? carouselDeals.length - 1 : activeIndex - 3;
    triggerTransition(prevIndex);
  };

  const formatNumber = (num) => String(num).padStart(2, '0');

  const visibleDeals = Array.from({ length: 3 }, (_, i) => {
    const index = (activeIndex + i) % carouselDeals.length;
    return carouselDeals[index];
  });

  return (
    <section className="w-full bg-white py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Timer Column */}
        <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-6">
          <span className="text-[#AA061B] text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1">
            <Timer size={14} /> Spotlight Deal
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 font-medium tracking-tight mb-4">
            Deals Of The Month
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            Save up to 40% on curated seasonal collections. Updated monthly with fresh handwoven and custom designs.
          </p>

          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Hurry, Offer Ends In:
          </h3>

          <div className="flex items-center gap-3 mb-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hr', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Sec', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center mb-1">
                  <span className="font-mono text-xl font-bold text-gray-800">
                    {formatNumber(item.value)}
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 font-medium uppercase">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Carousel Cards */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {visibleDeals.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`relative h-[360px] rounded-xl overflow-hidden bg-gray-100 group shadow-sm transition-all duration-300 ${
                  isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-gray-300 block">
                    {item.tag}
                  </span>
                  <span className="text-lg font-bold">
                    {item.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DealsPage;