import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart, MapPin } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, price, img, discount, brand, category } = product;
  const [imgSrc, setImgSrc] = useState(img);
  const [errored, setErrored] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleError = () => {
    if (!errored) {
      setErrored(true);
      setImgSrc('https://placehold.co/400x400/f4f4f4/aaa?text=Product');
    }
  };

  // Derive "original" price (about 12 % higher if discount exists)
  const origPrice = discount ? Math.round(price * 1.12) : null;

  return (
    <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">

      {/* ── Image ── */}
      <Link to={`/productdetail/${id}`} className="block">
        <div className="relative bg-gray-50 flex items-center justify-center h-44 overflow-hidden">
          <img
            src={imgSrc}
            alt={name}
            onError={handleError}
            className="h-36 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
          />
          {/* Wishlist */}
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
            aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
            className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center shadow-sm transition-colors ${
              liked ? 'bg-red-50 text-red-400' : 'bg-white text-gray-300 hover:text-red-400'
            }`}
          >
            <Heart size={13} fill={liked ? 'currentColor' : 'none'} strokeWidth={2} />
          </button>

          {/* Discount badge */}
          {discount && (
            <span className="absolute top-3 left-3 bg-brand-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {discount}
            </span>
          )}
        </div>
      </Link>

      {/* ── Info ── */}
      <div className="p-4">
        {/* Name */}
        <Link to={`/productdetail/${id}`}>
          <h3 className="text-[13.5px] font-bold text-gray-900 line-clamp-1 hover:text-brand-700 transition-colors">
            {name}
          </h3>
        </Link>

        {/* Seller / Brand */}
        <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-400">
          <MapPin size={10} className="flex-shrink-0" />
          <span className="line-clamp-1">{brand || 'Lenny Store'}</span>
        </div>

        {/* Price row */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-black text-brand-700">
              ${price.toLocaleString()}
            </span>
            {origPrice && (
              <span className="text-[11px] text-gray-400 line-through">
                ${origPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${name} to cart`}
            className="w-8 h-8 rounded-xl bg-brand-800 hover:bg-brand-700 text-white flex items-center justify-center transition-colors active:scale-95 shadow-sm"
          >
            <ShoppingCart size={13} strokeWidth={2.5} />
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2.5">
          {Array(5).fill(0).map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < 4 ? 'text-yellow-400' : 'text-gray-200'}
              fill={i < 4 ? '#fbbf24' : '#e5e7eb'}
            />
          ))}
          <span className="text-[11px] text-gray-400 ml-1">4.8 · 1,238 Sold</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
