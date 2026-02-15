import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ relatedProducts }) => {
  
    const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const topRelated = relatedProducts.slice(0, 4);

  return (
    <div className="mx-12 mt-16 pb-20">
      <h3 className="text-xl font-bold">Related Products</h3>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {topRelated.length > 0 ? (
          topRelated.map((p) => (
            <Link to={`/productdetail/${p.id}`}>
                <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
            </Link>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No related products.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
