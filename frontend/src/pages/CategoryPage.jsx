import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // <-- import useParams
import { ChevronDown } from "lucide-react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/sidebar/CategoryFilter";
import BrandFilter from "../components/sidebar/BrandFilter";
import { categories } from "../utils/categories";
import { products as allProducts } from "../utils/products";
import ProductModal from "../components/ProductModal";

const CategoryPage = () => {
  const { id } = useParams(); // <-- get category id from URL
 
  

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Automatically select category from URL
useEffect(() => {
    const cat = categories.find(c => c.id === id);
    if (cat) {
      setSelectedCategory(cat.name);
      setSelectedSubCategory(null);
      setSelectedBrand(null);
    }
    
  }, [id]);  
  
  

  const selectedCategoryObj = categories.find(
    (c) => c.name === selectedCategory
  );
  const availableBrands = selectedCategoryObj?.brands || [];

  const filteredProducts = allProducts.filter((product) => {
    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchSubCategory = selectedSubCategory
      ? product.subcategory === selectedSubCategory
      : true;
    const matchBrand = selectedBrand ? product.brand === selectedBrand : true;
    const matchMinPrice = minPrice ? product.price >= parseFloat(minPrice) : true;
    const matchMaxPrice = maxPrice ? product.price <= parseFloat(maxPrice) : true;

    return matchCategory && matchSubCategory && matchBrand && matchMinPrice && matchMaxPrice;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedBrand(null);
    setMinPrice("");
    setMaxPrice("");
    setCurrentPage(1);
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="py-5 md:min-h-screen bg-white text-gray-800">
      <div className="mx-4 md:mx-12 mt-8 flex flex-col md:flex-row gap-6 md:gap-6">
        {/* Sidebar */}
        <aside className="pr-4 w-full md:w-70 flex-shrink-0 space-y-10  md:sticky md:top-5 md:h-[calc(100vh-2rem)] overflow-y-auto scroller-hide">
          <button
            onClick={resetFilters}
            className="w-full rounded-md bg-brand-400 px-4 py-2 text-white font-bold hover:bg-brand-500"
          >
            Reset All Filters
          </button>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedCategory={setSelectedCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />

          <BrandFilter
            brands={availableBrands}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />

          {/* Price */}
          <div>
            <h3 className="text-xl font-bold mb-4">Price Range</h3>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                min={0}
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-20 border p-2"
              />
              <input
                type="number"
                placeholder="Max"
                min={1}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-20 border p-2"
              />
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          <div className="flex justify-between mb-8 items-center">
            <h2 className="text-2xl font-bold">{selectedCategory || "All Products"}</h2>
            <button className="flex items-center gap-2 bg-gray-200 px-4 py-1 text-xs">
              Latest <ChevronDown size={14} />
            </button>
          </div>

         <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 justify-center">
  
          {currentProducts.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
          ))}

        </div>

        {/* Modal should be outside grid */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}

          {/*Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 py-10 flex-wrap items-center">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 hover:bg-gray-200 transition"
              >
                &lt;
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${
                    currentPage === i + 1
                      ? "bg-brand-500 text-white border-brand-500"
                      : "border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 hover:bg-gray-200 transition"
              >
                &gt;
              </button>
            </div>
          )}


          {filteredProducts.length === 0 && (
            <p className="text-gray-500 mt-6">No products match the selected filters.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
