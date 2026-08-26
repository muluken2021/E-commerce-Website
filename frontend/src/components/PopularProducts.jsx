import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { newArrivalsData, categories } from "../utils/newArrivalsData.js";
import ProductCard from './ProductCard.jsx';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

export default function NewArrivals() {
  const { t, formatPrice, language } = useLangCurrency();
  const [activeTab, setActiveTab] = useState("Women's Fashion");

  const filteredProducts = newArrivalsData.filter((item) => item.category === activeTab);

  const parsePrice = (val) => {
    if (typeof val === 'number') return val;
    return parseFloat(String(val).replace(/[^0-9.]/g, '')) || 0;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-800 tracking-tight">
          {t('newArrivalsTitle')}
        </h2>
        <p className="text-xs md:text-sm text-gray-400 mt-3 leading-relaxed">
          {t('newArrivalsDesc')}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === cat
                ? 'bg-[#AA061B] text-white shadow-sm'
                : 'bg-gray-50 text-gray-400 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 min-h-[350px]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Link
              to={`/productdetail/${item.id}`}
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:-translate-y-1 block group"
            >
              <div className="w-full h-72 rounded-xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#AA061B] transition-colors">
                    {language === 'am' ? (item.title_am || item.title) : item.title}
                  </h3>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 font-medium">{item.brand}</p>
                <p className="text-[10px] text-gray-400 pt-1">
                  ({item.reviewsCount}) {t('customerReviews')}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-base font-bold text-gray-900">
                    {formatPrice(parsePrice(item.price))}
                  </span>
                  <span className="text-[10px] font-medium text-rose-400">
                    {language === 'am' ? (item.stockStatus_am || item.stockStatus) : item.stockStatus}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-400 text-sm">
            No products available for this category yet.
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <Link to="/products">
          <button className="bg-[#AA061B] text-white text-xs font-semibold px-10 py-3.5 rounded-lg shadow-md hover:bg-[#8d0517] transition-colors cursor-pointer">
            {t('viewMore')}
          </button>
        </Link>
      </div>
    </section>
  );
}
