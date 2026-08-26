import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CategoryFilter({
  categories,
  selectedCategory,
  selectedSubCategory,
  setSelectedCategory,
  setSelectedSubCategory,
}) {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      const cat = categories.find((c) => c.name === selectedCategory);
      if (cat) setOpen(cat.id);
    }
  }, [selectedCategory, categories]);

  return (
    <div>
      <h3 className="text-[13px] font-black text-gray-900 mb-4">Categories</h3>
      <ul className="space-y-1">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.name;
          const isOpen = open === cat.id;

          return (
            <li key={cat.id}>
              <button
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setSelectedSubCategory(null);
                  setOpen(isOpen ? null : cat.id);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-colors ${
                  isActive
                    ? 'bg-brand-25 text-brand-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-brand-700'
                }`}
              >
                {Icon && (
                  <span className={`flex-shrink-0 ${isActive ? 'text-brand-700' : 'text-gray-400'}`}>
                    <Icon size={15} />
                  </span>
                )}
                <span className="flex-1 text-[13px] font-semibold">{cat.name}</span>
                {cat.subcategories?.length > 0 && (
                  <ChevronDown
                    size={13}
                    className={`transition-transform text-gray-400 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                  />
                )}
              </button>

              {isOpen && cat.subcategories?.length > 0 && (
                <ul className="ml-8 mt-1 space-y-0.5">
                  {cat.subcategories.map((sub) => (
                    <li key={sub}>
                      <button
                        onClick={() => {
                          setSelectedSubCategory(sub);
                          setSelectedCategory(cat.name);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-[12.5px] transition-colors ${
                          selectedSubCategory === sub
                            ? 'text-brand-700 font-bold bg-brand-25'
                            : 'text-gray-500 hover:text-brand-700 hover:bg-gray-50'
                        }`}
                      >
                        {sub}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
