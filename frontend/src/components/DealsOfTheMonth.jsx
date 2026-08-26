import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { flashProducts } from '../utils/newArrivalsData.js';

const DealsOfTheMonth = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 6,
    minutes: 5,
    seconds: 30,
  });

  // Countdown timer logic
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

  // Transition trigger helper
  const triggerTransition = (newIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 3) % flashProducts.length;
    triggerTransition(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      activeIndex - 3 < 0 ? flashProducts.length - (flashProducts.length % 3 || 3) : activeIndex - 3;
    triggerTransition(prevIndex);
  };

  // Auto-play interval
  useEffect(() => {
    const autoSlider = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(autoSlider);
  }, [activeIndex]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  // Compute visible items safely
  const visibleDeals = Array.from({ length: Math.min(3, flashProducts.length) }, (_, i) => {
    const index = (activeIndex + i) % flashProducts.length;
    return flashProducts[index];
  });

  const totalPages = Math.ceil(flashProducts.length / 3);
  const activePage = Math.floor(activeIndex / 3);

  return (
    <section className="w-full bg-white py-10 md:py-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ── Left Content (Heading & Timer) ── */}
        <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-6">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 font-medium tracking-tight mb-4">
            Deals Of The Month
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            Discover limited-time discounts on our exclusive flash sale collection. Grab yours before stocks run out!
          </p>

          <Link to="/deals">
            <button className="bg-[#AA061B] text-white text-sm font-semibold px-8 py-3.5 rounded-lg shadow-md hover:bg-[#8d0517] transition-colors mb-10 cursor-pointer">
              Buy Now
            </button>
          </Link>

          <h3 className="text-base font-semibold text-gray-700 mb-4">
            Hurry, Before It’s Too Late!
          </h3>

          {/* Countdown Boxes */}
          <div className="flex items-center gap-3 mb-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hr', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Sec', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center mb-2">
                  <span className="font-mono text-xl font-bold text-gray-800">
                    {formatNumber(item.value)}
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide Set"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide Set"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-sm transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Right Content (Cards Carousel) ── */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
            {visibleDeals.map((item, index) => (
              <Link
                to={`/productdetail/${item.id}`}
                key={`${item.id}-${index}`}
                className={`relative h-[380px] rounded-xl overflow-hidden bg-gray-100 group shadow-sm transition-all duration-500 ease-in-out transform block ${
                  isAnimating
                    ? 'opacity-0 scale-95 translate-y-2'
                    : 'opacity-100 scale-100 translate-y-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Stock Status Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md">
                  <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">
                    {item.stockStatus}
                  </span>
                </div>

                {/* Bottom Product Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] text-gray-200 font-medium block uppercase tracking-wider mb-1">
                    {item.brand}
                  </span>
                  <h4 className="text-sm font-semibold truncate mb-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white">
                      {item.price}
                    </span>
                    {item.origPrice && (
                      <span className="text-xs text-gray-300 line-through">
                        {item.origPrice}
                      </span>
                    )}
                    {item.discount && (
                      <span className="ml-auto text-xs bg-[#AA061B] font-bold text-white px-2 py-0.5 rounded">
                        -{item.discount}%
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Dot Pagination */}
          <div className="flex items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => triggerTransition(idx * 3)}
                aria-label={`Go to slide set ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                  activePage === idx ? 'w-6 bg-black' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DealsOfTheMonth;