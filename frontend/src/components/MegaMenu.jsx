import React from "react";
import { ChevronRight } from "lucide-react";
import { categories } from "../utils/categories"; // adjust path if needed

const MegaMenu = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Main Content */}
        <div className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {categories.map((cat) => {
              const Icon = cat.icon; // render dynamic icon

              return (
                <div key={cat.id} className="space-y-6">

                  {/* Category Title + Icon */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Icon size={20} className="text-brand-500" />
                      <h3 className="text-gray-900 font-bold text-lg">
                        {cat.name}
                      </h3>
                    </div>

                    {/* Subcategories */}
                    <ul className="space-y-2">
                      {cat.subcategories.map((sub, i) => (
                        <li key={i}>
                          <a
                            href={`/category/${cat.id}`}
                            className="text-gray-500 hover:text-brand-500 transition-colors text-sm block"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                 
                </div>
              );
            })}

          </div>

          {/* More Categories */}
          <div className="mt-10">
            <a
              href="/category/all"
              className="inline-flex items-center text-gray-900 font-bold hover:text-brand-500 transition-colors group"
            >
              More categories
              <ChevronRight
                size={18}
                className="ml-1 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 px-10 py-5 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            <span className="font-bold text-gray-900 mr-2">
              Popular categories:
            </span>

            {categories.map((cat, i) => (
              <span key={cat.id}>
                <a href={`/category/${cat.id}`} className="hover:text-brand-500 transition">
                  {cat.name}
                </a>
                {i < categories.length - 1 && (
                  <span className="mx-1">,</span>
                )}
              </span>
            ))}
          </p>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;
