import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, StarHalf } from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  const { id, tag, name, price, img, discount } = product;

  // Image fallback
  const [imgSrc, setImgSrc] = useState(img);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("https://via.placeholder.com/300x300?text=Product+Image");
    }
  };

  return (
    <div className="min-w-[275px] md:max-w-[270px] w-full  bg-gray-100 rounded-2xl border border-gray-200 p-6 shadow-sm font-sans relative hover:shadow-md transition-all"> 
      {/* Image */}
      <Link to={`/productdetail/${id}`}>
        <div className="flex justify-center items-center mb-6 h-40">
          <img
            src={imgSrc}
            alt={name}
            onError={handleError}
            className="max-h-full object-contain transition-transform duration-500 hover:scale-110 mix-blend-multiply"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-3">

        {/* Category */}
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          {tag || product.category}
        </p>

        {/* Name */}
        <h2 className="text-lg font-semibold text-slate-800 line-clamp-1">
          {name}
        </h2>

         <div className="flex gap-0.5 text-brand-400 mb-3">
            {Array(4).fill(0).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            <StarHalf  size={14} fill="currentColor" />
          </div>

        {/* View Detail */}
        <Link
          to={`/productdetail/${id}`}
          className="block text-sm text-gray-500 hover:text-brand-500"
        >
          View Detail
        </Link>

        {/* Price + Cart */}
        <div className="flex items-end justify-between pt-4">
          <div className="flex flex-col">
            {discount && (
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">
                  ${(price * 1.1).toFixed(2)}
                </span>
                <span className="bg-blue-50 text-brand-500 px-2 py-0.5 rounded text-xs font-bold">
                  {discount}
                </span>
              </div>
            )}

            <div className="text-xl font-bold text-slate-800">
              ${price.toLocaleString()}
            </div>
          </div>
          {/* Add To Cart */}
          <div className="relative group">
            <button
              onClick={() => onAddToCart(product)}
              className="cursor-pointer bg-brand-600 hover:bg-brand-700 text-white p-3 rounded-xl transition-all shadow-md active:scale-95"
            >
              <ShoppingCart size={22} />
            </button>

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none">
              Add to cart
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
