import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newArrivalsData, flashProducts, bundleDeals } from '../utils/newArrivalsData';
import ReviewsSection from './ReviewSection';
import ProductHero from './ProductHero';
import RelatedProducts from './RelatedProducts';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

const allProducts = [...newArrivalsData, ...flashProducts, ...bundleDeals];

export default function ProductDetail() {
  const { t, language } = useLangCurrency();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [tab, setTab] = useState('Description');

  const tabs = [t('description'), t('specifications'), t('reviews')];
  // Keep internal keys in English for comparisons
  const tabKeys = ['Description', 'Specifications', 'Reviews'];

  useEffect(() => {
    const found = allProducts.find((p) => String(p.id) === String(id));
    setProduct(found);
    if (found) {
      setRelated(allProducts.filter((p) => p.category === found.category && String(p.id) !== String(found.id)));
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
          {t('browseAll')}
        </Link>
      </div>
    );
  }

  const productTitle = language === 'am'
    ? (product.title_am || product.title || product.name)
    : (product.title || product.name);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="text-[12px] text-gray-400 flex items-center gap-1.5">
          <Link to="/" className="hover:text-[#AA061B] transition-colors">{t('home')}</Link>
          <span>/</span>
          <Link to={`/category/${encodeURIComponent(product.category)}`} className="hover:text-[#AA061B] transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-600 font-semibold line-clamp-1">{productTitle}</span>
        </nav>
      </div>

      <ProductHero product={product} />

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex gap-1 border-b border-gray-100 mb-8">
          {tabKeys.map((key, i) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`pb-3 px-5 text-[14px] font-bold transition-colors relative cursor-pointer ${
                tab === key ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tabs[i]}
              {tab === key && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AA061B] rounded-full" />}
            </button>
          ))}
        </div>

        {tab === 'Description' && (
          <div className="max-w-2xl">
            <p className="text-[14px] text-gray-600 leading-relaxed">
              {language === 'am'
                ? (product.longDescription_am || product.longDescription || (
                    <>
                      ትክክለኛ የእጅ ሥራ ልምድ ይኑርዎ <strong>{product.title_am || product.title}</strong> ።
                      ለ {product.category?.toLowerCase() || 'ዕለታዊ ልብስ'} ተዘጋጅቷል።
                    </>
                  ))
                : (product.longDescription || (
                    <>
                      Experience authentic craftsmanship with the <strong>{product.title || product.name}</strong>.
                      Designed for {product.category?.toLowerCase() || 'everyday wear'}, this piece combines
                      traditional elegance with contemporary styling for any special occasion.
                    </>
                  ))
              }
            </p>
          </div>
        )}

        {tab === 'Specifications' && (
          <div className="max-w-xl">
            <table className="w-full text-[13.5px]">
              <tbody>
                {Object.entries(
                  (language === 'am' && product.specifications_am)
                    ? product.specifications_am
                    : (product.specifications || {})
                ).map(([key, val]) => (
                  <tr key={key} className="border-b border-gray-100">
                    <td className="py-3 pr-8 font-bold text-gray-700 w-40">{key}</td>
                    <td className="py-3 text-gray-500">{val || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'Reviews' && (
          <ReviewsSection productReviews={product.reviews} reviewsCount={product.reviewsCount} />
        )}
      </div>

      <RelatedProducts relatedProducts={related} />
    </div>
  );
}
