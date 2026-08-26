import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X, Search, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { categories, newArrivalsData } from '../utils/newArrivalsData'; // Import directly from your utils path
import ProductModal from '../components/ProductModal';

const ITEMS_PER_PAGE = 6;

// Dynamically extract unique brands from your data
const brandsList = Array.from(new Set(newArrivalsData.map((item) => item.brand))).filter(Boolean);

const sizesList = ['S', 'M', 'L', 'XL'];
const colorsList = [
  { name: 'Red', hex: '#FF5757' },
  { name: 'Orange', hex: '#FF914D' },
  { name: 'Yellow', hex: '#FFDE59' },
  { name: 'Green', hex: '#7ED957' },
  { name: 'LightGreen', hex: '#CBFF57' },
  { name: 'Cyan', hex: '#00F0FF' },
  { name: 'Blue', hex: '#004FFF' },
  { name: 'Indigo', hex: '#7C00FF' },
  { name: 'Purple', hex: '#C700FF' },
  { name: 'Pink', hex: '#FF66C4' },
];

const priceRanges = [
  { label: '$0–$50', min: 0, max: 50 },
  { label: '$50–$100', min: 50, max: 100 },
  { label: '$100–$150', min: 100, max: 150 },
  { label: '$150–$200', min: 150, max: 200 },
  { label: '$200–$300', min: 200, max: 300 },
];

const collectionsList = ['All products', 'Best sellers', 'New arrivals'];
const sortOptions = [
  { label: 'Best selling', key: 'best' },
  { label: 'Latest', key: 'latest' },
  { label: 'Price: Low to High', key: 'low' },
  { label: 'Price: High to Low', key: 'high' },
  { label: 'Name A-Z', key: 'az' },
];

// Helper to safely convert "$120.00" string prices to numeric float values
const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  if (typeof price === 'string') {
    const numeric = parseFloat(price.replace(/[^0-9.-]+/g, ''));
    return isNaN(numeric) ? 0 : numeric;
  }
  return 0;
};

export default function CategoryPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';

  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState('All products');

  const [sortKey, setSortKey] = useState('best');
  const [page, setPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  /* Sync URL param → category filter */
  useEffect(() => {
    if (id && id !== 'all') {
      const decodedParam = decodeURIComponent(id).toLowerCase();
      const matchedCat = categories.find((c) => c.toLowerCase() === decodedParam);
      if (matchedCat) {
        setSelectedCat(matchedCat);
      }
    } else {
      setSelectedCat(null);
    }
    setPage(1);
  }, [id]);

  /* Filter */
  let filtered = newArrivalsData.filter((p) => {
    const numericPrice = parsePrice(p.price);

    if (selectedCat && p.category !== selectedCat) return false;
    if (selectedSize && p.sizes && !p.sizes.includes(selectedSize)) return false;
    if (selectedColor && p.colors && !p.colors.includes(selectedColor)) return false;
    if (selectedPriceRange) {
      if (numericPrice < selectedPriceRange.min || numericPrice > selectedPriceRange.max) return false;
    }
    if (selectedBrand && p.brand !== selectedBrand) return false;
    if (selectedCollection && selectedCollection !== 'All products') {
      if (selectedCollection === 'Best sellers' && p.rating !== 5) return false;
      if (selectedCollection === 'New arrivals' && !p.isNew) return false;
    }
    if (urlQuery && !p.title.toLowerCase().includes(urlQuery.toLowerCase())) return false;
    return true;
  });

  /* Sort */
  filtered = [...filtered].sort((a, b) => {
    const priceA = parsePrice(a.price);
    const priceB = parsePrice(b.price);

    if (sortKey === 'low') return priceA - priceB;
    if (sortKey === 'high') return priceB - priceA;
    if (sortKey === 'az') return a.title.localeCompare(b.title);
    if (sortKey === 'latest') return b.id - a.id;
    return 0; // best selling default
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const reset = () => {
    setSelectedCat(null);
    setSelectedSize(null);
    setSelectedColor(null);
    setSelectedPriceRange(null);
    setSelectedBrand(null);
    setSelectedCollection('All products');
    setPage(1);
  };

  const activeFilters = [
    selectedCat && { label: selectedCat, clear: () => setSelectedCat(null) },
    selectedSize && { label: `Size: ${selectedSize}`, clear: () => setSelectedSize(null) },
    selectedColor && { label: `Color: ${selectedColor}`, clear: () => setSelectedColor(null) },
    selectedPriceRange && { label: selectedPriceRange.label, clear: () => setSelectedPriceRange(null) },
    selectedBrand && { label: selectedBrand, clear: () => setSelectedBrand(null) },
    selectedCollection !== 'All products' && { label: selectedCollection, clear: () => setSelectedCollection('All products') },
  ].filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 min-h-screen font-sans text-gray-800 bg-white">

      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <h2 className="font-serif text-2xl font-medium text-gray-800 tracking-wide">Filters</h2>
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 rounded text-xs font-medium text-gray-700"
          >
            <SlidersHorizontal size={13} /> Filter
          </button>
        </div>

        <div className="flex items-center gap-6">
          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-xs font-serif text-gray-800 tracking-wider hover:text-gray-500 transition-colors"
            >
              {sortOptions.find((s) => s.key === sortKey)?.label}
              <ChevronDown size={13} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] bg-white border border-gray-200 shadow-md rounded py-1 w-48 z-30">
                {sortOptions.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => { setSortKey(s.key); setSortOpen(false); setPage(1); }}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors ${
                      sortKey === s.key ? 'text-black font-semibold bg-gray-50' : 'text-gray-600 hover:bg-gray-50'
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

      <div className="flex gap-12">

        {/* ── Sidebar Filters ── */}
        <aside className="hidden lg:block w-56 flex-shrink-0 space-y-8">

          {/* Categories Filter */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-medium text-gray-800">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => {
                const active = selectedCat === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCat(active ? null : cat); setPage(1); }}
                    className={`block text-xs transition-colors text-left w-full ${
                      active ? 'text-black font-semibold underline' : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Size Filter */}
          <div className="space-y-3 border-t border-gray-100 pt-6">
            <h3 className="font-serif text-sm font-medium text-gray-800">Size</h3>
            <div className="flex flex-wrap gap-2">
              {sizesList.map((size) => {
                const active = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(active ? null : size); setPage(1); }}
                    className={`w-9 h-9 rounded border flex items-center justify-center text-xs font-serif transition-all ${
                      active ? 'border-black bg-black text-white' : 'border-gray-300 text-gray-700 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Colors Filter */}
          <div className="space-y-3 border-t border-gray-100 pt-6">
            <h3 className="font-serif text-sm font-medium text-gray-800">Colors</h3>
            <div className="grid grid-cols-5 gap-2.5">
              {colorsList.map((c) => {
                const active = selectedColor === c.name;
                return (
                  <button
                    key={c.name}
                    title={c.name}
                    onClick={() => { setSelectedColor(active ? null : c.name); setPage(1); }}
                    style={{ backgroundColor: c.hex }}
                    className={`w-6 h-6 rounded-full relative transition-transform hover:scale-110 shadow-sm ${
                      active ? 'ring-2 ring-offset-2 ring-black' : ''
                    }`}
                  >
                    {active && <Check size={10} className="absolute inset-0 m-auto text-white drop-shadow" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Prices Filter */}
          <div className="space-y-3 border-t border-gray-100 pt-6">
            <h3 className="font-serif text-sm font-medium text-gray-800">Prices</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => {
                const active = selectedPriceRange?.label === range.label;
                return (
                  <button
                    key={range.label}
                    onClick={() => { setSelectedPriceRange(active ? null : range); setPage(1); }}
                    className={`block text-xs transition-colors text-left w-full ${
                      active ? 'text-black font-semibold underline' : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {range.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brands Filter */}
          <div className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-sm font-medium text-gray-800">Brands</h3>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {brandsList.map((brand) => {
                const active = selectedBrand === brand;
                return (
                  <button
                    key={brand}
                    onClick={() => { setSelectedBrand(active ? null : brand); setPage(1); }}
                    className={`text-xs transition-colors ${
                      active ? 'text-black font-semibold underline' : 'text-gray-400 hover:text-gray-700'
                    }`}
                  >
                    {brand}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Collections Filter */}
          <div className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-sm font-medium text-gray-800">Collections</h3>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
            <div className="space-y-2">
              {collectionsList.map((col) => {
                const active = selectedCollection === col;
                return (
                  <button
                    key={col}
                    onClick={() => { setSelectedCollection(col); setPage(1); }}
                    className={`block text-xs transition-colors text-left w-full ${
                      active ? 'text-black font-semibold' : 'text-gray-400 hover:text-gray-700'
                    }`}
                  >
                    {col}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clear Filters Button */}
          {activeFilters.length > 0 && (
            <button
              onClick={reset}
              className="w-full mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded transition-colors"
            >
              Clear All Filters
            </button>
          )}

        </aside>

        {/* ── Main Product Display Area ── */}
        <main className="flex-1 min-w-0">

          {/* Active Filter Chips */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-gray-100">
              <span className="text-xs text-gray-400">Active filters:</span>
              {activeFilters.map((f, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full font-serif"
                >
                  {f.label}
                  <button onClick={f.clear} className="hover:text-red-500 transition-colors">
                    <X size={12} />
                  </button>
                </span>
              ))}
              <button
                onClick={reset}
                className="text-xs text-red-500 underline hover:text-red-600 transition-colors ml-2"
              >
                Clear All
              </button>
            </div>
          )}

          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
              {paginated.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={(prod) => { setSelectedProduct(prod); setModalOpen(true); }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-gray-400">
              <Search size={40} className="mx-auto mb-4 opacity-30" />
              <h3 className="font-serif text-lg font-medium text-gray-700">No products found</h3>
              <p className="text-xs text-gray-400 mt-1">Try clearing or adjusting your selected filters.</p>
              <button
                onClick={reset}
                className="mt-6 bg-black text-white px-6 py-2.5 rounded text-xs uppercase tracking-wider font-medium hover:bg-gray-800 transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-16 pt-8 border-t border-gray-100">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-xs text-gray-600 disabled:opacity-30 hover:border-black transition-colors"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded border text-xs font-serif transition-all ${
                    page === i + 1
                      ? 'bg-black text-white border-black font-medium'
                      : 'border-gray-200 text-gray-600 hover:border-black'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-xs text-gray-600 disabled:opacity-30 hover:border-black transition-colors"
              >
                &gt;
              </button>
            </div>
          )}

        </main>
      </div>

      {/* Product Quick Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={modalOpen}
          onClose={() => { setModalOpen(false); setSelectedProduct(null); }}
        />
      )}

      {/* Mobile Drawer Filter Modal */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative w-80 max-w-full bg-white h-full shadow-2xl p-6 overflow-y-auto ml-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                <h3 className="font-serif text-lg font-medium text-gray-800">Filters</h3>
                <button onClick={() => setSidebarOpen(false)} className="p-1 hover:text-red-500">
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Filter Options */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-xs font-semibold uppercase text-gray-500 mb-2">Categories</h4>
                  <div className="flex flex-col gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCat(selectedCat === cat ? null : cat)}
                        className={`text-left text-xs px-2.5 py-1 rounded border ${
                          selectedCat === cat ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-600'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-xs font-semibold uppercase text-gray-500 mb-2">Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {sizesList.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                        className={`px-3 py-1 text-xs border rounded ${selectedSize === s ? 'bg-black text-white border-black' : 'border-gray-300'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-xs font-semibold uppercase text-gray-500 mb-2">Brands</h4>
                  <div className="flex flex-wrap gap-2">
                    {brandsList.map((b) => (
                      <button
                        key={b}
                        onClick={() => setSelectedBrand(selectedBrand === b ? null : b)}
                        className={`text-xs px-2.5 py-1 rounded border ${selectedBrand === b ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-600'}`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex gap-2">
              <button
                onClick={() => { reset(); setSidebarOpen(false); }}
                className="w-1/2 py-2.5 bg-gray-100 text-xs font-medium uppercase rounded text-gray-700"
              >
                Clear All
              </button>
              <button
                onClick={() => setSidebarOpen(false)}
                className="w-1/2 py-2.5 bg-black text-xs font-medium uppercase rounded text-white"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}