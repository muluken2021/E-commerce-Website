import React from 'react';

export default function BrandFilter({ brands, selectedBrand, setSelectedBrand }) {
  return (
    <div>
      <h3 className="text-[13px] font-black text-gray-900 mb-4">Brand</h3>

      {brands.length === 0 ? (
        <p className="text-[12px] text-gray-400">Select a category first</p>
      ) : (
        <ul className="space-y-1">
          {brands.map((brand) => {
            const active = selectedBrand === brand;
            return (
              <li key={brand}>
                <button
                  onClick={() => setSelectedBrand(active ? null : brand)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-colors ${
                    active
                      ? 'bg-brand-25 text-brand-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-brand-700'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                      active ? 'bg-brand-700 border-brand-700' : 'border-gray-300'
                    }`}
                  >
                    {active && (
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className="text-[12.5px] font-semibold">{brand}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
