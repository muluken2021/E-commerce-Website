import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Heart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    headline: ['Upgrade Your Wardrobe', 'With Our Collection'],
    desc: 'Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est ullamcorper nisl amet non mollis.',
    cta: 'fashion',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop&crop=top',
    badge: { name: 'Green Jacket V2', brand: 'Green Barneys', rating: '4.9', sold: '120 Sold', price: '$49' },
  },
  {
    id: 2,
    headline: ['Premium Tech at', 'Unbeatable Prices'],
    desc: 'Discover the latest smartphones, laptops, and accessories from leading brands. Superior performance meets modern design.',
    cta: 'electronics',
    img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=900&auto=format&fit=crop',
    badge: { name: 'MacBook Air M2', brand: 'Apple', rating: '4.9', sold: '98 Sold', price: '$1,499' },
  },
  {
    id: 3,
    headline: ['Beauty Essentials', 'You Will Love'],
    desc: 'Premium skincare and beauty collections crafted for your daily routine. Glow up with curated products at great value.',
    cta: 'beauty',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop',
    badge: { name: 'Skincare Set', brand: "L'Oreal Paris", rating: '4.8', sold: '200 Sold', price: '$35' },
  },
];

const AUTOPLAY_INTERVAL = 5500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((idx) => {
    setDir(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDir(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section className="mx-4 sm:mx-6 lg:mx-8 my-4 rounded-2xl overflow-hidden bg-[#f4f4f4] shadow-sm">
      <div className="relative flex flex-col md:flex-row items-stretch min-h-[360px] md:min-h-[400px]">

        {/* ── Left: copy ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-14 py-12">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
            >
              <h1 className="text-[2rem] md:text-[2.6rem] font-black text-gray-900 leading-[1.15] tracking-tight mb-5">
                {slide.headline[0]}
                <br />
                {slide.headline[1]}
              </h1>
              <p className="text-[13.5px] text-gray-500 leading-relaxed mb-8 max-w-[360px]">
                {slide.desc}
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link to={`/category/${slide.cta}`}>
                  <button className="bg-brand-800 hover:bg-brand-700 text-white px-8 py-3 rounded-xl font-bold text-[14px] transition-all duration-200 shadow-lg shadow-brand-900/20 hover:shadow-brand-900/30 active:scale-[0.97]">
                    Buy Now
                  </button>
                </Link>
                <Link to={`/category/${slide.cta}`}>
                  <button className="border border-gray-300 bg-white hover:border-brand-700 hover:text-brand-700 text-gray-700 px-8 py-3 rounded-xl font-bold text-[14px] transition-all duration-200 active:scale-[0.97]">
                    View Detail
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Right: image ── */}
        <div className="relative flex-1 overflow-hidden min-h-[240px] md:min-h-0">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.img
              key={`img-${current}`}
              custom={dir}
              variants={{
                enter: (d) => ({ opacity: 0, scale: 1.04 }),
                center: { opacity: 1, scale: 1 },
                exit: (d) => ({ opacity: 0, scale: 0.97 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              src={slide.img}
              alt={slide.headline.join(' ')}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </AnimatePresence>

          {/* Gradient fade into left on desktop */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f4f4f4] to-transparent hidden md:block pointer-events-none" />

          {/* ── Product badge ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="absolute bottom-5 left-5 md:left-8 bg-white rounded-2xl shadow-xl p-3.5 w-[172px] z-10 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[12px] font-bold text-gray-900 leading-tight">{slide.badge.name}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{slide.badge.brand}</p>
                </div>
                <button className="text-gray-300 hover:text-red-400 transition-colors mt-0.5">
                  <Heart size={13} />
                </button>
              </div>
              <div className="flex items-center gap-1.5">
                <Star size={10} fill="#f59e0b" className="text-yellow-400 flex-shrink-0" />
                <span className="text-[11px] font-bold text-gray-800">{slide.badge.rating}</span>
                <span className="text-[10px] text-gray-400">· {slide.badge.sold}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Nav arrows ── */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white hover:shadow-lg transition-all z-10 hidden md:flex"
          >
            <ChevronLeft size={17} className="text-gray-700" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white hover:shadow-lg transition-all z-10"
          >
            <ChevronRight size={17} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* ── Dots ── */}
      <div className="flex justify-center items-center gap-2 py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              current === i
                ? 'w-7 h-2.5 bg-brand-700'
                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
