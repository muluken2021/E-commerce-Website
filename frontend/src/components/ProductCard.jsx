import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

const ProductCard = ({ product = {}, onAddToCart, onQuickView }) => {
  const { t, formatPrice, language } = useLangCurrency();

  // Pick localised fields based on active language
  const id = product.id;
  const name = language === 'am'
    ? (product.title_am || product.name_am || product.title || product.name || 'ምርት')
    : (product.title || product.name || 'Untitled Product');
  const brand = product.brand || '';
  const img = product.image || product.img || '';
  const price = product.price ?? 0;
  const origPrice = product.origPrice;
  const rating = product.rating || 0;
  const reviews = product.reviewsCount || '';
  const rawStock = language === 'am'
    ? (product.stockStatus_am || product.stockStatus || '')
    : (product.stockStatus || '');
  const discount = product.discount;
  const colors = product.colors || [];

  const stockLower = (product.stockStatus || '').toLowerCase();
  const isSoldOut      = product.isSoldOut || stockLower === 'sold out';
  const isAlmostSoldOut= stockLower === 'almost sold out';
  const isLimitedOffer = stockLower === 'limited time offer';

  const [imgSrc, setImgSrc] = useState(img);
  const [errored, setErrored] = useState(false);
  const [liked, setLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0] || null);

  // Sync image state if product prop updates dynamically
  useEffect(() => {
    setImgSrc(img);
    setErrored(false);
  }, [img]);

  const handleError = () => {
    if (!errored) {
      setErrored(true);
      setImgSrc('https://placehold.co/600x800/f4f4f4/aaa?text=No+Image');
    }
  };

  // Convert a raw price value (always stored as USD base) to the selected currency
  const renderPrice = (val) => {
    const num = typeof val === 'number'
      ? val
      : parseFloat(String(val).replace(/[^0-9.]/g, '')) || 0;
    return formatPrice(num);
  };

  return (
    <article className="group flex flex-col font-sans">
      {/* ── Image & Hover Overlay Container ── */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 rounded-sm mb-3">
        <Link to={`/productdetail/${id}`} className="block w-full h-full">
          <img
            src={imgSrc}
            alt={name}
            onError={handleError}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Sold Out / Stock Badges */}
        {isSoldOut ? (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
            <span className="w-16 h-16 rounded-full bg-black/70 text-white text-[10px] font-medium tracking-wider uppercase flex items-center justify-center text-center p-1 backdrop-blur-xs">
              {t('soldOut')}
            </span>
          </div>
        ) : (
          <div className="absolute top-3 left-3 flex flex-col gap-1 items-start pointer-events-none">
            {discount && (
              <span className="bg-red-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider shadow-xs">
                {typeof discount === 'number' ? `-${discount}%` : discount}
              </span>
            )}
            {isAlmostSoldOut && (
              <span className="bg-amber-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider shadow-xs">
                {t('almostSoldOut')}
              </span>
            )}
            {isLimitedOffer && (
              <span className="bg-black text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider shadow-xs">
                {t('limitedOffer')}
              </span>
            )}
          </div>
        )}

        {/* Action Buttons (Hover Slide-in) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
            className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors ${
              liked
                ? 'bg-red-50 text-red-500'
                : 'bg-white text-gray-700 hover:bg-black hover:text-white'
            }`}
          >
            <Heart size={14} fill={liked ? 'currentColor' : 'none'} strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (onQuickView) onQuickView(product);
              else if (onAddToCart) onAddToCart(product);
            }}
            aria-label="Quick View"
            className="w-8 h-8 rounded-full bg-white text-gray-700 hover:bg-black hover:text-white flex items-center justify-center shadow-md transition-colors"
          >
            <Eye size={14} strokeWidth={2} />
          </button>
        </div>

        {/* Quick Add Bar */}
        {!isSoldOut && (
          <div className="absolute bottom-0 inset-x-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button
              type="button"
              onClick={() => onAddToCart && onAddToCart(product)}
              className="w-full py-2 bg-white/95 hover:bg-black text-gray-900 hover:text-white text-xs font-medium tracking-wide rounded-xs shadow-sm transition-colors flex items-center justify-center gap-1.5 backdrop-blur-sm"
            >
              <ShoppingCart size={13} />
              {t('addToCart')}
            </button>
          </div>
        )}
      </div>

      {/* ── Product Details ── */}
      <div className="flex flex-col space-y-1">
        {brand && (
          <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
            {brand}
          </span>
        )}

        <Link to={`/productdetail/${id}`}>
          <h3 className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-1 hover:text-gray-500 transition-colors">
            {name}
          </h3>
        </Link>

        {/* Ratings and Review Count */}
        {rating > 0 && (
          <div className="flex items-center gap-1">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  fill={i < rating ? 'currentColor' : 'none'}
                  className={i < rating ? 'text-amber-400' : 'text-gray-200'}
                />
              ))}
            </div>
            {reviews && <span className="text-[10px] text-gray-400">{reviews}</span>}
          </div>
        )}

        {/* Price Row */}
        <div className="flex items-center gap-2 text-xs font-serif text-gray-800 pt-0.5">
          <span className="font-semibold">{renderPrice(price)}</span>
          {origPrice && (
            <span className="text-gray-400 line-through text-[11px]">
              {renderPrice(origPrice)}
            </span>
          )}
        </div>

        {/* Color Swatches */}
        {colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1">
            {colors.map((c, idx) => {
              const active = selectedColor === c;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedColor(c)}
                  style={{ backgroundColor: c }}
                  className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                    active ? 'ring-1 ring-offset-1 ring-black scale-110' : 'border-gray-300 hover:scale-110'
                  }`}
                  aria-label={`Select color ${c}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
