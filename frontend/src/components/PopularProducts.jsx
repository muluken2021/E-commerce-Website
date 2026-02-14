import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const PopularProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
        { id: 1, tag: "HEADPHONE", name: "Wireless Over-Ear Headphones", price: "250 Birr", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300", active: false },
    { id: 2, tag: "TV", name: "Smart LED Television", price: "250 Birr", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300", active: true },
    { id: 3, tag: "ELECTRONICS", name: "Security Camera Set", price: "250 Birr", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300", active: false },
    { id: 4, tag: "HEADPHONE", name: "Wireless Earbuds", price: "250 Birr", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300", active: false },
    { id: 5, tag: "PHONE", name: "Smartphone Pro Max", price: "250 Birr", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300", active: false },
    { id: 6, tag: "LAPTOP", name: "Ultra Slim Laptop", price: "250 Birr", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300", active: false },
    // ... other products
  ];

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="mx-auto px-4 py-12">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
        Popular Products
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default PopularProducts;
