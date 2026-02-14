import React, { useState } from 'react';
import { Search, ShoppingCart, User, ChevronRight, Star } from 'lucide-react';
import ReviewsSection from './ReviewSection';
import ProductHero from './ProductHero';

const ProductDetail = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [activeTab, setActiveTab] = useState("description");

  const relatedProducts = [
    { id: 1, name: "Wireless Over-Ear Headphones", price: "250 Birr", tag: "25% off", img: "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762" },
    { id: 2, name: "Wireless Over-Ear Headphones", price: "250 Birr", tag: "25% off", img: "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762" },
    { id: 3, name: "Wireless Over-Ear Headphones", price: "250 Birr", tag: "25% off", img: "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762" },
    { id: 4, name: "Wireless Over-Ear Headphones", price: "250 Birr", tag: "25% off", img: "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-800">
      
     <ProductHero />

      {/* --- TABS & SPECS --- */}
         <section className="mx-12 mt-12">
      {/* Tabs */}
      <div className="flex gap-12 border-b border-gray-300 pb-2">
        <button
          onClick={() => setActiveTab("description")}
          className={`relative font-bold text-lg ${
            activeTab === "description"
              ? "after:absolute after:-bottom-[10px] after:left-0 after:h-1 after:w-full after:bg-black"
              : "text-gray-500"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("review")}
          className={`relative font-bold text-lg ${
            activeTab === "review"
              ? "after:absolute after:-bottom-[10px] after:left-0 after:h-1 after:w-full after:bg-black"
              : "text-gray-500"
          }`}
        >
          Review (3)
        </button>
      </div>

      {/* Content */}
      <div className="mt-8">
        {activeTab === "description" && (
          <div>
            <h3 className="text-xl font-bold">Specification :</h3>
            <ul className="mt-4 space-y-2 text-sm font-medium text-gray-700">
              <li>Wireless Bluetooth Headset</li>
              <li>Brand : Bang & Olufsen</li>
              <li>Model : S450</li>
              <li>Feature : FM Radio, Wireless Bluetooth, Plastic Coverage</li>
              <li>Made In : China</li>
            </ul>
          </div>
        )}

        {activeTab === "review" && (
          <ReviewsSection />
        )}
      </div>
    </section>
      {/* --- RELATED PRODUCTS --- */}
      <section className="mx-12 mt-16 pb-20">
        <h3 className="text-xl font-bold">Related Products</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group relative rounded-xl bg-gray-100 p-6 transition-shadow hover:shadow-md">
              <span className="absolute left-4 top-4 rounded bg-white px-2 py-1 text-[10px] font-bold shadow-sm">
                {product.tag}
              </span>
              <div className="flex h-48 items-center justify-center">
                <img src={product.img} alt={product.name} className="max-h-full mix-blend-multiply transition-transform group-hover:scale-105" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Headphone</p>
                <h4 className="mt-1 text-xs font-bold leading-tight">{product.name}</h4>
                <p className="mt-2 text-sm font-bold text-gray-700">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;