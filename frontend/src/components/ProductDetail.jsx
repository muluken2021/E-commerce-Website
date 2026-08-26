import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../utils/products';
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
    const found = products.find((p) => p.id === parseInt(id, 10));
    setProduct(found);
    if (found) {
      setRelated(products.filter((p) => p.category === found.category && p.id !== found.id));
    }
    setTab('Description');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-400 flex-col gap-3">
        <p className="text-5xl">🔍</p>
        <p className="text-lg font-semibold text-gray-500">Product not found</p>
        <Link to="/category/all" className="text-brand-700 font-semibold hover:underline text-sm">
          Browse all products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="text-[12px] text-gray-400 flex items-center gap-1.5">
          <Link to="/" className="hover:text-brand-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/category/${product.category.toLowerCase().split(' ')[0]}`} className="hover:text-brand-700 transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-600 font-semibold line-clamp-1">{product.name}</span>
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
              className={`pb-3 px-5 text-[14px] font-bold transition-colors relative ${
                tab === t ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {t}
              {tab === t && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-700 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {tab === 'Description' && (
          <div className="max-w-2xl">
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Experience premium quality with the <strong>{product.name}</strong>. 
              Designed for {product.subcategory?.toLowerCase() || 'everyday use'}, this product combines 
              outstanding performance with elegant design. Whether you're at home or on the go, 
              it delivers consistently excellent results.
            </p>
            <p className="text-[14px] text-gray-600 leading-relaxed mt-4">
              Built to last with top-grade materials and backed by our 2-year warranty. 
              Free returns within 30 days if you're not completely satisfied.
            </p>
          </div>
        )}

        {tab === 'Specifications' && (
          <div className="max-w-xl">
            <table className="w-full text-[13.5px]">
              <tbody>
                {[
                  ['Category',    product.category],
                  ['Subcategory', product.subcategory],
                  ['Brand',       product.brand],
                  ['Price',       `$${product.price.toLocaleString()}`],
                  ['Discount',    product.discount || 'None'],
                ].map(([key, val]) => (
                  <tr key={key} className="border-b border-gray-100">
                    <td className="py-3 pr-8 font-bold text-gray-700 w-40">{key}</td>
                    <td className="py-3 text-gray-500">{val}</td>
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
