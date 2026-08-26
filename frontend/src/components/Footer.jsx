import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

export default function Footer() {
  const { t } = useLangCurrency();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link to="/" className="flex items-center mb-4">
              <span className="font-serif text-2xl md:text-3xl font-medium tracking-wider text-[#AA061B] uppercase">
                HABESHA
              </span>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 max-w-sm">
              Experience the pinnacle of traditional Ethiopian craftsmanship blended seamlessly with modern elegance.
            </p>
            <div className="flex items-center gap-3">
              <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#AA061B] hover:text-white hover:border-[#AA061B] transition-all shadow-sm">
                <Facebook size={16} />
              </a>
              <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#AA061B] hover:text-white hover:border-[#AA061B] transition-all shadow-sm">
                <Instagram size={16} />
              </a>
              <a href="#twitter" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#AA061B] hover:text-white hover:border-[#AA061B] transition-all shadow-sm">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li><Link to="/" className="hover:text-[#AA061B] transition-colors">{t('home')}</Link></li>
              <li><Link to="/products" className="hover:text-[#AA061B] transition-colors">{t('shopAll')}</Link></li>
              <li><Link to="/products" className="hover:text-[#AA061B] transition-colors">{t('newArrivals')}</Link></li>
              <li><Link to="/deals" className="hover:text-[#AA061B] transition-colors">{t('flashDeals')}</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">{t('customerCare')}</h3>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li><Link to="/contact" className="hover:text-[#AA061B] transition-colors">{t('contactUs')}</Link></li>
              <li><Link to="/shipping" className="hover:text-[#AA061B] transition-colors">{t('shippingDelivery')}</Link></li>
              <li><Link to="/returns" className="hover:text-[#AA061B] transition-colors">{t('returnsExchanges')}</Link></li>
              <li><Link to="/faq" className="hover:text-[#AA061B] transition-colors">{t('faq')}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">{t('newsletter')}</h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">{t('newsletterDesc')}</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('enterEmail')}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-[#AA061B] transition-all"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#AA061B] text-white text-xs font-semibold py-2.5 rounded-lg shadow hover:bg-[#8d0517] transition-colors cursor-pointer"
              >
                {t('subscribe')}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-2">
          <p>{t('copyright')}</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">{t('privacyPolicy')}</a>
            <span>•</span>
            <a href="#terms" className="hover:text-gray-600 transition-colors">{t('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
