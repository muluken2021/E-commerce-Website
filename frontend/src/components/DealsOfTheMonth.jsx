import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const dealsData = [
  {
    id: 1,
    tag: '01 — Spring Sale',
    discount: '30% OFF',
    image: 'https://ethiopian.store/cdn/shop/files/photo_2026-08-03_17-21-56.jpg?v=1785768125&width=533',
    alt: 'Woman in black off-shoulder dress',
  },
  {
    id: 2,
    tag: '02 — Summer Special',
    discount: '25% OFF',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXI0ApZ-xfXYuz9ZfFURX4roUWrN1_jPFqweskqpXZnkrnbUBNJzC72w&s=10',
    alt: 'Woman in blue two-piece set with hat',
  },
  {
    id: 3,
    tag: '03 — Autumn Vibe',
    discount: '40% OFF',
    image: 'https://ethiopianculturalshop.com/wp-content/uploads/2023/08/photo_2023-06-15_11-57-58-2.jpg',
    alt: 'Woman in casual outfit with sunglasses',
  },
  {
    id: 4,
    tag: '04 — Winter Deal',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    alt: 'Woman in stylish jacket',
  },
  {
    id: 5,
    tag: '05 — Urban Collection',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    alt: 'Woman posing in yellow sweater',
  },
  {
    id: 6,
    tag: '06 — Elegant Line',
    discount: '50% OFF',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    alt: 'Man in trendy outfit',
  },
];

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

  // Smooth slide trigger helper
  const triggerTransition = (newIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsAnimating(false);
    }, 300); // Duration matches CSS fade out length
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 3) % dealsData.length;
    triggerTransition(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      activeIndex - 3 < 0 ? dealsData.length - (dealsData.length % 3 || 3) : activeIndex - 3;
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

  // Compute 3 visible items starting from activeIndex
  const visibleDeals = Array.from({ length: 3 }, (_, i) => {
    const index = (activeIndex + i) % dealsData.length;
    return dealsData[index];
  });

  const totalPages = Math.ceil(dealsData.length / 3);
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
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
              <div
                key={`${item.id}-${index}`}
                className={`relative h-[380px] rounded-xl overflow-hidden bg-gray-100 group shadow-sm transition-all duration-500 ease-in-out transform ${
                  isAnimating
                    ? 'opacity-0 scale-95 translate-y-2'
                    : 'opacity-100 scale-100 translate-y-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay Badge for First Card */}
                {index === 0 && (
                  <div className="absolute bottom-6 left-6 bg-white py-3 px-4 rounded-md shadow-md transition-all duration-300">
                    <span className="text-[10px] text-gray-500 font-medium block uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-base font-bold text-gray-800">
                      {item.discount}
                    </span>
                  </div>
                )}
              </div>
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