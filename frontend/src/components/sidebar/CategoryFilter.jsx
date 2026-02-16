import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const CategoryFilter = ({
  categories,
  selectedCategory,
  selectedSubCategory,
  setSelectedCategory,
  setSelectedSubCategory,
}) => {
  const [openCategory, setOpenCategory] = useState(null);

  // Sync openCategory with selectedCategory (from URL or page load)
  useEffect(() => {
    if (selectedCategory) {
      const cat = categories.find((c) => c.name === selectedCategory);
      if (cat) setOpenCategory(cat.id);
    }
  }, [selectedCategory, categories]);

  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Categories</h3>

      <ul className="space-y-4">
        {categories.map((cat) => {
          const Icon = cat.icon; // get the component
          return (
            <li key={cat.id}>
              {/* Parent Category */}
              <div
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setSelectedSubCategory(null);
                  setOpenCategory(openCategory === cat.id ? null : cat.id);
                }}
                className="flex items-center justify-start cursor-pointer"
              >
                <span
                  className={`px-2 py-2 rounded-full border flex items-center  ${
                    selectedCategory === cat.name
                      ? "text-white bg-brand-400 border-brand-00"
                      : "border-gray-500"
                  }`}
                >
                  {/* Render icon */}
                  {Icon && <Icon size={18} />}
                </span>

                
                <span
                  className={`ml-2 font-medium ${
                    selectedCategory === cat.name
                      ? "text-brand-500"
                      : "text-gray-700"
                  }`}
                >
                  {cat.name}
                </span>
                <div className="">
                    <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                        openCategory === cat.id ? "rotate-180" : ""
                    }`}
                    />
                </div>
              </div>

              {/* Subcategories */}
              {openCategory === cat.id && cat.subcategories?.length > 0 && (
                <ul className="ml-10 mt-2 space-y-2">
                  {cat.subcategories.map((sub) => (
                    <li
                      key={sub}
                      onClick={() => {
                        setSelectedSubCategory(sub);
                        setSelectedCategory(cat.name); // ensure parent category is set
                      }}
                      className={`cursor-pointer text-sm hover:text-brand-500 ${
                        selectedSubCategory === sub
                          ? "text-brand-500 font-bold"
                          : "text-gray-500"
                      }`}
                    >
                      {sub}
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
};

export default CategoryFilter;
