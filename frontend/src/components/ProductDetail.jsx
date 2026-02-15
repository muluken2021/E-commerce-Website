import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../utils/products'; // import your products array
import ReviewsSection from './ReviewSection';
import ProductHero from './ProductHero';
import RelatedProducts from './RelatedProducts';

const ProductDetail = () => {
  const { id } = useParams(); // Get the id from URL
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id, 10);

      // Find the product by id
      const foundProduct = products.find(p => p.id === numericId);
      setProduct(foundProduct);

      // Find related products (same category, exclude current product)
      if (foundProduct) {
        const related = products.filter(
          p => p.category === foundProduct.category && p.id !== foundProduct.id
        );
        setRelatedProducts(related);
      }
    }
  }, [id]);

  if (!product) {
    return <p className="text-center mt-20">Product not found.</p>;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <ProductHero product={product}/>

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
            Review
          </button>
        </div>

        {/* Content */}
        <div className="mt-8">
          {activeTab === "description" && (
            <div>
              <h3 className="text-xl font-bold">Specification :</h3>
              <ul className="mt-4 space-y-2 text-sm font-medium text-gray-700">
                <li>Category: {product.category}</li>
                <li>Brand: {product.brand}</li>
                <li>Price: {product.price} Birr</li>
                <li>Subcategory: {product.subcategory}</li>
              </ul>
            </div>
          )}

          {activeTab === "review" && <ReviewsSection />}
        </div>
      </section>

      {/* --- RELATED PRODUCTS --- */}
      <RelatedProducts relatedProducts={relatedProducts}/>
    </div>
  );
};

export default ProductDetail;
