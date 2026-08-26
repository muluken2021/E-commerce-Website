import React from 'react';
import { products } from '../utils/newArrivalsData';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

export default function InstagramGallery() {
  const { t } = useLangCurrency();

  const instagramPosts = Array.from({ length: 7 }, (_, i) => {
    const productIndex = (i * 2) % products.length;
    return products[productIndex];
  });

  return (
    <section className="w-full bg-white py-16">
      {/* ── Header ── */}
      <div className="text-center mb-12 max-w-xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-800 tracking-tight">
          {t('followUs')}
        </h2>
        <p className="text-xs md:text-sm text-gray-400 mt-3 leading-relaxed">
          {t('followUsDesc')}
        </p>
      </div>

      {/* ── Grid Layout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 items-center">
          {instagramPosts.map((post, index) => {
            const isTaller = index % 2 !== 0;
            return (
              <div
                key={`${post.id}-${index}`}
                className={`w-full overflow-hidden rounded-lg shadow-sm group transition-transform duration-300 hover:scale-[1.02] ${
                  isTaller ? 'h-64 sm:h-72 md:h-80' : 'h-52 sm:h-60 md:h-64'
                }`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
