import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { popularproducts } from "../utils/products";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    
  };
  
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="mx-auto px-4 pb-15">
      <h2 className="text-start mx-10 text-2xl font-bold text-gray-800 mb-8">
        Popular Products
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
        {popularproducts.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} isOpen={isModalOpen}  onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default PopularProducts;
