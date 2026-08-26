import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newArrivalsData } from '../utils/newArrivalsData';
import ReviewsSection from './ReviewSection';
import ProductHero from './ProductHero';
import RelatedProducts from './RelatedProducts';

const tabs = ['Description', 'Specifications', 'Reviews'];

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [tab, setTab] = useState('Description');

  useEffect(() => {
    // 1. Safe matching for both String ("1") and Number (1) IDs
    const found = newArrivalsData.find((p) => String(p.id) === String(id));
    setProduct(found);

    if (found) {
      // 2. Filter related items safely using string comparisons
      setRelated(
        newArrivalsData.filter(
          (p) => p.category === found.category && String(p.id) !== String(found.id)
        )
      );
    }
    
    setTab('Description');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-400 flex-col gap-3">
        <p className="text-5xl">🔍</p>
        <p className="text-lg font-semibold text-gray-500">Product not found</p>
        <Link to="/" className="text-[#AA061B] font-semibold hover:underline text-sm">
          Browse all products
        </Link>
      </div>
    );
  }

  // Fallback for title vs name compatibility
  const productTitle = product.title || product.name;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="text-[12px] text-gray-400 flex items-center gap-1.5">
          <Link to="/" className="hover:text-[#AA061B] transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/category/${encodeURIComponent(product.category)}`} className="hover:text-[#AA061B] transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-600 font-semibold line-clamp-1">{productTitle}</span>
        </nav>
      </div>

      {/* Hero */}
      <ProductHero product={product} />

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex gap-1 border-b border-gray-100 mb-8">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 px-5 text-[14px] font-bold transition-colors relative cursor-pointer ${
                tab === t ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {t}
              {tab === t && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AA061B] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {tab === 'Description' && (
          <div className="max-w-2xl">
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Experience authentic craftsmanship with the <strong>{productTitle}</strong>. 
              Designed for {product.category?.toLowerCase() || 'everyday wear'}, this piece combines 
              traditional elegance with contemporary styling for any special occasion.
            </p>
            <p className="text-[14px] text-gray-600 leading-relaxed mt-4">
              Handcrafted with top-grade materials. Fast shipping available across Ethiopia and worldwide.
            </p>
          </div>
        )}

        {tab === 'Specifications' && (
          <div className="max-w-xl">
            <table className="w-full text-[13.5px]">
              <tbody>
                {[
                  ['Category', product.category],
                  ['Brand', product.brand],
                  ['Price', typeof product.price === 'number' ? `$${product.price}` : product.price],
                  ['Stock Status', product.stockStatus || 'In Stock'],
                  ['Rating', `${product.rating} ★`],
                ].map(([key, val]) => (
                  <tr key={key} className="border-b border-gray-100">
                    <td className="py-3 pr-8 font-bold text-gray-700 w-40">{key}</td>
                    <td className="py-3 text-gray-500">{val || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'Reviews' && <ReviewsSection />}
      </div>

      {/* Related */}
      <RelatedProducts relatedProducts={related} />
    </div>
  );
}