import React, { useState } from 'react';
import { Star } from 'lucide-react';

const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

const newArrivalsData = [
  {
    id: 1,
    title: 'Shiny Dress',
    brand: 'Al Karam',
    rating: 5,
    reviews: '(4.1k) Customer Reviews',
    price: '$95.50',
    stockStatus: 'Almost Sold Out',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Long Dress',
    brand: 'Al Karam',
    rating: 5,
    reviews: '(4.1k) Customer Reviews',
    price: '$95.50',
    stockStatus: 'Almost Sold Out',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Full Sweater',
    brand: 'Al Karam',
    rating: 5,
    reviews: '(4.1k) Customer Reviews',
    price: '$95.50',
    stockStatus: 'Almost Sold Out',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'White Dress',
    brand: 'Al Karam',
    rating: 5,
    reviews: '(4.1k) Customer Reviews',
    price: '$95.50',
    stockStatus: 'Almost Sold Out',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Colorful Dress',
    brand: 'Al Karam',
    rating: 5,
    reviews: '(4.1k) Customer Reviews',
    price: '$95.50',
    stockStatus: 'Almost Sold Out',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'White Shirt',
    brand: 'Al Karam',
    rating: 5,
    reviews: '(4.1k) Customer Reviews',
    price: '$95.50',
    stockStatus: 'Almost Sold Out',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
];

export default function NewArrivals() {
  const [activeTab, setActiveTab] = useState("Women's Fashion");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-white">
      {/* ── Header ── */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-800 tracking-tight">
          New Arrivals
        </h2>
        <p className="text-xs md:text-sm text-gray-400 mt-3 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
        </p>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              activeTab === cat
                ? 'bg-black text-white shadow-sm'
                : 'bg-gray-50 text-gray-400 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Product Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {newArrivalsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Product Image */}
            <div className="w-full h-72 rounded-xl overflow-hidden bg-gray-100 mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content Details */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>
                {/* Star Rating */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-gray-400 font-medium">{item.brand}</p>
              
              <p className="text-[10px] text-gray-400 pt-1">{item.reviews}</p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-base font-bold text-gray-900">
                  {item.price}
                </span>
                <span className="text-[10px] font-medium text-rose-400">
                  {item.stockStatus}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA Button ── */}
      <div className="flex justify-center">
        <button className="bg-black text-white text-xs font-semibold px-10 py-3.5 rounded-lg shadow-md hover:bg-gray-800 transition-colors">
          View More
        </button>
      </div>
    </section>
  );
}