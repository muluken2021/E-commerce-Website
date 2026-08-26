import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, User, Search, ChevronDown, X, Menu, Heart } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import UserDropdown from './UserDropdown';

const categories = [
  { label: "All Categories", path: "all" },
  { label: "Electronics", path: "electronics" },
  { label: "Fashion", path: "fashion" },
  { label: "Beauty & Care", path: "beauty" },
  { label: "Groceries", path: "groceries" },
  { label: "Automotive", path: "automotive" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [selected, setSelected] = useState(categories[0]);
  const [query, setQuery] = useState('');
  const catRef = useRef(null);
  const { cartItems } = useCart();
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setCatOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const path = selected.path === 'all' ? '/category/all' : `/category/${selected.path}`;
    navigate(`${path}${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[64px] flex items-center gap-4">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 mr-2">
          <div className="w-8 h-8 bg-brand-800 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-black text-sm tracking-tight">L</span>
          </div>
          <span className="font-black text-[22px] text-gray-900 tracking-tight">lenny.</span>
        </Link>

        {/* ── Search bar (desktop) ── */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-2xl h-10 bg-gray-50 border border-gray-200 rounded-xl overflow-visible items-center focus-within:border-brand-600 focus-within:bg-white transition-colors"
        >
          {/* Category picker */}
          <div ref={catRef} className="relative flex-shrink-0">
            <button
              type="button"
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-1.5 px-4 h-10 text-[13px] font-semibold text-gray-600 border-r border-gray-200 hover:text-brand-700 transition-colors whitespace-nowrap"
            >
              {selected.label}
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${catOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {catOpen && (
              <div className="absolute top-[calc(100%+6px)] left-0 bg-white border border-gray-200 rounded-xl shadow-xl z-50 w-52 py-1.5 overflow-hidden">
                {categories.map((cat) => (
                  <button
                    key={cat.path}
                    type="button"
                    onClick={() => { setSelected(cat); setCatOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-[13px] font-medium transition-colors ${
                      selected.path === cat.path
                        ? 'text-brand-700 bg-brand-25 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-brand-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Text input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search on lenny..."
            className="flex-1 px-4 bg-transparent outline-none text-[14px] text-gray-800 placeholder-gray-400"
          />

          <button
            type="submit"
            className="px-4 h-10 text-gray-400 hover:text-brand-700 transition-colors"
          >
            <Search size={17} strokeWidth={2.2} />
          </button>
        </form>

        {/* ── Right icons ── */}
        <div className="flex items-center gap-1 ml-auto">
          {/* Cart */}
          <Link to="/cart">
            <button className="relative p-2.5 rounded-xl hover:bg-gray-100 transition-colors group">
              <ShoppingCart size={20} className="text-gray-700 group-hover:text-brand-700 transition-colors" />
              {totalQty > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-700 text-white text-[10px] font-black w-[18px] h-[18px] rounded-full flex items-center justify-center leading-none">
                  {totalQty > 99 ? '99+' : totalQty}
                </span>
              )}
            </button>
          </Link>

          {/* User */}
          <UserDropdown />

          {/* Hamburger */}
          <button
            className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} className="text-gray-700" /> : <Menu size={20} className="text-gray-700" />}
          </button>
        </div>
      </div>

      {/* ── Mobile search ── */}
      <div className="md:hidden px-4 pb-3">
        <form
          onSubmit={handleSearch}
          className="flex items-center h-10 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search on lenny..."
            className="flex-1 px-4 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
          />
          <button type="submit" className="px-3 h-10 text-gray-400">
            <Search size={17} />
          </button>
        </form>
      </div>

      {/* ── Mobile nav ── */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-1 bg-white border-t border-gray-100">
          {[
            { to: '/', label: 'Home' },
            { to: '/category/all', label: 'Shop' },
            { to: '/contactus', label: 'Contact' },
            { to: '/support', label: 'Support' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-brand-700 bg-brand-25' : 'text-gray-700 hover:text-brand-700 hover:bg-gray-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
