import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, ChevronDown, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLangCurrency, CURRENCIES } from '../context/LanguageCurrencyContext';

// ── Small reusable dropdown ───────────────────────────────────────────────────
const NavDropdown = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-black transition-colors cursor-pointer select-none"
      >
        {trigger}
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-[150px] bg-white border border-gray-100 rounded-lg shadow-lg z-50 py-1 overflow-hidden">
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
};

// ── Main Navbar ───────────────────────────────────────────────────────────────
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { language, setLanguage, currency, setCurrency, t, CURRENCIES: currencies } = useLangCurrency();

  const navLinks = [
    { to: '/',            labelKey: 'home'        },
    { to: '/products',    labelKey: 'products'    },
    { to: '/deals',       labelKey: 'deals'       },
    { to: '/new-arrivals',labelKey: 'newArrivals' },
  ];

  const languages = [
    { code: 'en', label: 'English',  flag: '🇺🇸' },
    { code: 'am', label: 'አማርኛ',    flag: '🇪🇹' },
  ];

  const currencyList = Object.values(currencies);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-serif text-3xl font-medium tracking-wider text-[#AA061B] uppercase">
            HABESHA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ to, labelKey }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? 'text-[#AA061B] font-semibold' : 'text-gray-500 hover:text-black'
                }`
              }
            >
              {t(labelKey)}
            </NavLink>
          ))}

          {/* ── Language Dropdown ── */}
          <NavDropdown
            trigger={
              <span className="flex items-center gap-1">
                <Globe size={15} />
                <span>{languages.find((l) => l.code === language)?.flag}</span>
                <span className="uppercase font-medium text-xs">{language}</span>
              </span>
            }
          >
            {(close) =>
              languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLanguage(lang.code); close(); }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2 text-sm transition-colors cursor-pointer ${
                    language === lang.code
                      ? 'bg-[#AA061B]/5 text-[#AA061B] font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))
            }
          </NavDropdown>

          {/* ── Currency Dropdown ── */}
          <NavDropdown
            trigger={
              <span className="flex items-center gap-1 font-medium text-xs">
                <span>{CURRENCIES[currency]?.symbol}</span>
                <span>{currency}</span>
              </span>
            }
          >
            {(close) =>
              currencyList.map((cur) => (
                <button
                  key={cur.code}
                  onClick={() => { setCurrency(cur.code); close(); }}
                  className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors cursor-pointer ${
                    currency === cur.code
                      ? 'bg-[#AA061B]/5 text-[#AA061B] font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 text-center font-semibold">{cur.symbol}</span>
                    <span>{cur.code}</span>
                  </span>
                  <span className="text-xs text-gray-400 ml-3">{cur.name}</span>
                </button>
              ))
            }
          </NavDropdown>

          {/* Desktop Cart */}
          <Link to="/cart" className="relative p-2 text-gray-700 hover:text-[#AA061B] transition-colors">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#AA061B] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <Link
              to="/signin"
              className="bg-transparent border border-[#AA061B] text-[#AA061B] text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#AA061B] hover:text-white transition-all duration-200"
            >
              {t('signIn')}
            </Link>
            <Link
              to="/signup"
              className="bg-[#AA061B] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#970316] transition-all duration-200"
            >
              {t('signUp')}
            </Link>
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <Link to="/cart" className="relative p-2 text-gray-700">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#AA061B] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>
          <button
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-6 pt-2 flex flex-col space-y-3 bg-white border-t border-gray-100">
          {navLinks.map(({ to, labelKey }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 text-base font-medium transition-colors ${
                  isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                }`
              }
            >
              {t(labelKey)}
            </NavLink>
          ))}

          {/* Mobile Language & Currency row */}
          <div className="flex items-center gap-4 pt-2 pb-1">
            {/* Language toggle */}
            <div className="flex items-center gap-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                    language === lang.code
                      ? 'border-[#AA061B] text-[#AA061B] bg-[#AA061B]/5'
                      : 'border-gray-200 text-gray-500 hover:border-gray-400'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Currency selector */}
          <div className="flex flex-wrap gap-2 pb-1">
            {currencyList.map((cur) => (
              <button
                key={cur.code}
                onClick={() => setCurrency(cur.code)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                  currency === cur.code
                    ? 'border-[#AA061B] text-[#AA061B] bg-[#AA061B]/5'
                    : 'border-gray-200 text-gray-500 hover:border-gray-400'
                }`}
              >
                <span>{cur.symbol}</span>
                <span>{cur.code}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Link
              to="/signin"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center border border-[#AA061B] text-[#AA061B] text-base font-medium py-2.5 rounded-lg hover:bg-[#AA061B] hover:text-white transition-all duration-200"
            >
              {t('signIn')}
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-[#AA061B] text-white text-base font-medium py-2.5 rounded-lg hover:bg-[#970316] transition-all duration-200"
            >
              {t('signUp')}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
