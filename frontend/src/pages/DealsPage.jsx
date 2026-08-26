import React, { useState, useEffect } from 'react';
import {
  Timer, Flame, Tag, Percent, ArrowRight,
  Package, Sparkles
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { bundleDeals, flashProducts } from '../utils/newArrivalsData.js';
import DealsOfTheMonth from '../components/DealsOfTheMonth.jsx';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

const DealsPage = () => {
  const { t, formatPrice } = useLangCurrency();
  const [activeTab, setActiveTab] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(flashProducts);

  useEffect(() => {
    if (activeTab === 'All') {
      setFilteredProducts(flashProducts);
    } else {
      setFilteredProducts(flashProducts.filter((p) => p.category === activeTab));
    }
  }, [activeTab]);

  const parsePrice = (val) => {
    if (typeof val === 'number') return val;
    return parseFloat(String(val).replace(/[^0-9.]/g, '')) || 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">

      {/* ── Banner ── */}
      <section className="bg-black text-white py-12 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#AA061B_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AA061B] text-xs font-semibold uppercase tracking-widest text-white mb-4">
            <Flame size={14} /> {t('flashSalesLive')}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4">
            {t('exclusiveDeals')}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl font-light mb-6">
            {t('exclusiveDealsDesc')}
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-gray-400 font-mono border-t border-gray-800 pt-4 w-full max-w-md">
            <span>{t('verifiedAuth')}</span>
            <span>{t('expressShipping')}</span>
            <span>{t('easyReturns')}</span>
          </div>
        </div>
      </section>

      {/* ── Deals Of The Month ── */}
      <DealsOfTheMonth />

      {/* ── Flash Deals Grid ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#AA061B] text-xs font-bold uppercase tracking-wider mb-1">
              <Tag size={14} /> {t('dailySteals')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gray-900">
              {t('limitedTimeDeals')}
            </h2>
          </div>
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

      {/* ── Bundle & Save ── */}
      <section className="bg-white py-16 px-6 md:px-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[#AA061B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 mb-2">
              <Package size={15} /> {t('curatedPackages')}
            </span>
            <h2 className="text-3xl font-serif font-medium text-gray-900">{t('bundleAndSave')}</h2>
            <p className="text-gray-500 text-sm mt-2">{t('bundleDesc')}</p>
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
                    <h3 className="font-serif text-xl font-medium text-gray-900 mb-2">{bundle.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{bundle.description}</p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xl font-bold font-serif text-gray-900">
                        {formatPrice(parsePrice(bundle.price))}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        {formatPrice(parsePrice(bundle.origPrice))}
                      </span>
                    </div>
                    <button className="w-full py-2.5 bg-black hover:bg-[#AA061B] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      {t('claimBundle')} <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIP Section ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-lg">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1 mb-2">
              <Sparkles size={14} /> {t('vipAlerts')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium">{t('neverMiss')}</h3>
            <p className="text-gray-400 text-sm mt-2">{t('neverMissDesc')}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder={t('enterEmail')}
              className="px-4 py-3 rounded-lg bg-gray-800 text-white text-sm border border-gray-700 focus:outline-none focus:border-amber-400 min-w-[260px]"
              required
            />
            <button className="px-6 py-3 bg-[#AA061B] hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              {t('getEarlyAccess')}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default DealsPage;
