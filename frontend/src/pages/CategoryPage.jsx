import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const categories = ["Fashion", "Electronics", "Groceries", "Home & Garden", "Music", "Health & Beauty"];
  const brands = ["Apple", "Samsung", "Hiwawi", "Oppo", "Redmi", "ZTE"];
  
  // Products array with real online images
  const initialProducts = [
    { id: 1, name: "JBL Quantum 100", price: 250, category: "Electronics", brand: "JBL", discount: "25% off", img: "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762" },
    { id: 2, name: "Apple AirPods Pro", price: 450, category: "Electronics", brand: "Apple", discount: "15% off", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1591634795000" },
    { id: 3, name: "Samsung Galaxy Buds", price: 300, category: "Electronics", brand: "Samsung", discount: "10% off", img: "https://images.samsung.com/is/image/samsung/p6pim/ph/galaxy-buds-plus-black-1.jpg?$200_200_PNG$" },
    { id: 4, name: "Sony WH-1000XM4", price: 500, category: "Electronics", brand: "Sony", discount: "20% off", img: "https://cdn.mos.cms.futurecdn.net/DSgB3YpR9ozgkuKPQFhY4H-200-200.jpg" },
    { id: 5, name: "Beats Solo3", price: 350, category: "Electronics", brand: "Beats", discount: "30% off", img: "https://m.media-amazon.com/images/I/61-8vuhP1kL._AC_UL200_.jpg" },
    { id: 6, name: "Anker Soundcore", price: 120, category: "Electronics", brand: "Anker", discount: "25% off", img: "https://m.media-amazon.com/images/I/61oZ5fWQtTL._AC_UL200_.jpg" },
    { id: 7, name: "Oppo Enco X", price: 220, category: "Electronics", brand: "Oppo", discount: "15% off", img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-enco-x-1.jpg" },
    { id: 8, name: "Xiaomi Redmi Buds 3", price: 80, category: "Electronics", brand: "Xiaomi", discount: "10% off", img: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-buds-3/max/res200-200.jpg" },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Filtered products based on category, brand, and price range
  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchBrand = selectedBrand ? product.brand === selectedBrand : true;
    const matchMinPrice = minPrice ? product.price >= parseFloat(minPrice) : true;
    const matchMaxPrice = maxPrice ? product.price <= parseFloat(maxPrice) : true;
    return matchCategory && matchBrand && matchMinPrice && matchMaxPrice;
  });

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setMinPrice("");
    setMaxPrice("");
  };

const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="py-5 min-h-screen bg-white font-sans text-gray-800">
      <div className="mx-12 mt-8 flex gap-10">
        {/* --- SIDEBAR FILTERS --- */}
        <aside className="w-64 flex-shrink-0 space-y-10 pb-20">
          <button 
            onClick={resetFilters} 
            className="mb-4 w-full rounded-md bg-red-400 px-4 py-2 text-white font-bold hover:bg-red-500 transition-colors"
          >
            Reset All Filters
          </button>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li 
                  key={cat} 
                  onClick={() => setSelectedCategory(cat)} 
                  className={`cursor-pointer ${selectedCategory === cat ? 'text-orange-500 font-bold' : 'text-gray-600'}`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-xl font-bold mb-4">Brands</h3>
            <ul className="space-y-3">
              {brands.map(brand => (
                <li 
                  key={brand} 
                  onClick={() => setSelectedBrand(brand)}
                  className={`cursor-pointer ${selectedBrand === brand ? 'text-orange-500 font-bold' : 'text-gray-600'}`}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-xl font-bold mb-4">Price Range</h3>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                placeholder="Min" 
                value={minPrice} 
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-20 rounded-md border border-gray-400 bg-transparent p-2 outline-none"
              />
              <span>-</span>
              <input 
                type="number" 
                placeholder="Max" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-20 rounded-md border border-gray-400 bg-transparent p-2 outline-none"
              />
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT: PRODUCT GRID --- */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Electronics</h2>
            <button className="flex items-center gap-2 rounded bg-gray-200 px-4 py-1.5 text-xs font-medium text-gray-600">
              Latest <ChevronDown size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
                ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 mt-6">No products match the selected filters.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
