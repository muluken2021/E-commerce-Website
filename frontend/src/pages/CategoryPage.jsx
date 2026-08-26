import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/sidebar/CategoryFilter';
import BrandFilter from '../components/sidebar/BrandFilter';
import { categories } from '../utils/categories';
import { products as allProducts } from '../utils/products';
import ProductModal from '../components/ProductModal';

const ITEMS_PER_PAGE = 8;

const sortOptions = [
  { label: 'Latest',       key: 'latest' },
  { label: 'Price: Low',   key: 'low' },
  { label: 'Price: High',  key: 'high' },
  { label: 'Name A-Z',     key: 'az' },
];

export default function CategoryPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';

  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortKey, setSortKey] = useState('latest');
  const [page, setPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  /* Sync URL param → category filter */
  useEffect(() => {
    if (id && id !== 'all') {
      const cat = categories.find((c) => c.id === id);
      if (cat) { setSelectedCat(cat.name); setSelectedSub(null); setSelectedBrand(null); }
    } else {
      setSelectedCat(null);
    }
    setPage(1);
  }, [id]);

  const catObj = categories.find((c) => c.name === selectedCat);
  const availBrands = catObj?.brands || [];

  /* Filter */
  let filtered = allProducts.filter((p) => {
    if (selectedCat && p.category !== selectedCat) return false;
    if (selectedSub && p.subcategory !== selectedSub) return false;
    if (selectedBrand && p.brand !== selectedBrand) return false;
    if (minPrice && p.price < parseFloat(minPrice)) return false;
    if (maxPrice && p.price > parseFloat(maxPrice)) return false;
    if (urlQuery && !p.name.toLowerCase().includes(urlQuery.toLowerCase())) return false;
    return true;
  });

  /* Sort */
  filtered = [...filtered].sort((a, b) => {
    if (sortKey === 'low')    return a.price - b.price;
    if (sortKey === 'high')   return b.price - a.price;
    if (sortKey === 'az')     return a.name.localeCompare(b.name);
    return b.id - a.id; // latest
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const reset = () => {
    setSelectedCat(null); setSelectedSub(null); setSelectedBrand(null);
    setMinPrice(''); setMaxPrice(''); setPage(1);
  };

  const activeFilters = [
    selectedCat && { key: 'cat',   label: selectedCat,   clear: () => { setSelectedCat(null); setSelectedSub(null); } },
    selectedSub && { key: 'sub',   label: selectedSub,   clear: () => setSelectedSub(null) },
    selectedBrand && { key: 'brand', label: selectedBrand, clear: () => setSelectedBrand(null) },
    (minPrice || maxPrice) && { key: 'price', label: `$${minPrice||0}–$${maxPrice||'∞'}`, clear: () => { setMinPrice(''); setMaxPrice(''); } },
  ].filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 min-h-screen">

      {/* Breadcrumb */}
      <nav className="text-[12px] text-gray-400 mb-6 flex items-center gap-1.5">
        <Link to="/" className="hover:text-brand-700 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-600 font-semibold">{selectedCat || 'All Products'}</span>
      </nav>

      {/* Header row */}
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-black text-gray-900">{selectedCat || 'All Products'}</h1>
          <p className="text-[12px] text-gray-400 mt-0.5">{filtered.length} products found{urlQuery ? ` for "${urlQuery}"` : ''}</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:border-brand-700 hover:text-brand-700 transition-colors"
          >
            <SlidersHorizontal size={15} /> Filters
            {activeFilters.length > 0 && (
              <span className="bg-brand-700 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                {activeFilters.length}
              </span>
            )}
          </button>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:border-brand-700 transition-colors"
            >
              {sortOptions.find((s) => s.key === sortKey)?.label}
              <ChevronDown size={13} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-[calc(100%+6px)] bg-white border border-gray-200 rounded-xl shadow-lg z-30 py-1.5 w-40">
                {sortOptions.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => { setSortKey(s.key); setSortOpen(false); setPage(1); }}
                    className={`w-full text-left px-4 py-2 text-[13px] transition-colors ${
                      sortKey === s.key ? 'text-brand-700 font-bold bg-brand-25' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Active filter chips */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {activeFilters.map((f) => (
            <span
              key={f.key}
              className="flex items-center gap-1.5 bg-brand-25 text-brand-700 text-[12px] font-semibold px-3 py-1 rounded-full border border-brand-200"
            >
              {f.label}
              <button onClick={f.clear} className="hover:text-brand-900 transition-colors">
                <X size={11} />
              </button>
            </span>
          ))}
          <button onClick={reset} className="text-[12px] text-gray-400 hover:text-red-500 transition-colors px-2">
            Clear all
          </button>
        </div>
      )}

      <div className="flex gap-6">
        {/* ── Sidebar (desktop always visible, mobile drawer) ── */}
        <AnimatePresence>
          {(sidebarOpen || true) && (
            <>
              {/* Mobile overlay */}
              {sidebarOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
              )}

              <aside
                className={`
                  ${sidebarOpen
                    ? 'fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl p-6 overflow-y-auto lg:static lg:shadow-none lg:bg-transparent lg:p-0'
                    : 'hidden lg:block'
                  }
                  lg:w-60 lg:flex-shrink-0 space-y-7 lg:sticky lg:top-[88px] lg:self-start lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto
                `}
              >
                {/* Mobile close */}
                {sidebarOpen && (
                  <div className="flex items-center justify-between mb-4 lg:hidden">
                    <h3 className="font-black text-gray-900">Filters</h3>
                    <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                      <X size={18} />
                    </button>
                  </div>
                )}

                {activeFilters.length > 0 && (
                  <button
                    onClick={reset}
                    className="w-full rounded-xl bg-red-50 text-red-500 hover:bg-red-100 py-2 text-sm font-bold transition-colors"
                  >
                    Reset All Filters
                  </button>
                )}

                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCat}
                  selectedSubCategory={selectedSub}
                  setSelectedCategory={(v) => { setSelectedCat(v); setSelectedSub(null); setPage(1); }}
                  setSelectedSubCategory={(v) => { setSelectedSub(v); setPage(1); }}
                />

                <BrandFilter
                  brands={availBrands}
                  selectedBrand={selectedBrand}
                  setSelectedBrand={(v) => { setSelectedBrand(v); setPage(1); }}
                />

                {/* Price range */}
                <div>
                  <h3 className="text-[13px] font-black text-gray-900 mb-3">Price Range</h3>
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      placeholder="Min"
                      min={0}
                      value={minPrice}
                      onChange={(e) => { setMinPrice(e.target.value); setPage(1); }}
                      className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-600 bg-gray-50 transition-colors"
                    />
                    <span className="text-gray-300 text-sm flex-shrink-0">–</span>
                    <input
                      type="number"
                      placeholder="Max"
                      min={1}
                      value={maxPrice}
                      onChange={(e) => { setMaxPrice(e.target.value); setPage(1); }}
                      className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-600 bg-gray-50 transition-colors"
                    />
                  </div>
                </div>
              </aside>
            </>
          )}
        </AnimatePresence>

        {/* ── Main ── */}
        <main className="flex-1 min-w-0">
          {paginated.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {paginated.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <ProductCard
                    product={p}
                    onAddToCart={(prod) => { setSelectedProduct(prod); setModalOpen(true); }}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <Search size={40} className="mx-auto mb-4 opacity-30" />
              <p className="font-semibold text-gray-500">No products found</p>
              <p className="text-sm mt-1">Try adjusting your filters</p>
              <button onClick={reset} className="mt-5 text-brand-700 font-semibold text-sm hover:underline">
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 disabled:opacity-40 hover:border-brand-700 hover:text-brand-700 transition-colors text-sm font-bold"
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl border text-sm font-bold transition-all ${
                    page === i + 1
                      ? 'bg-brand-800 text-white border-brand-800 shadow-md'
                      : 'border-gray-200 text-gray-600 hover:border-brand-700 hover:text-brand-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 disabled:opacity-40 hover:border-brand-700 hover:text-brand-700 transition-colors text-sm font-bold"
              >
                ›
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={modalOpen}
          onClose={() => { setModalOpen(false); setSelectedProduct(null); }}
        />
      )}
    </div>
  );
}
