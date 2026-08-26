import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, Shield, Truck, RefreshCw, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

const ProductHero = ({ product }) => {
  const images = product?.images || [product?.img].filter(Boolean);
  const [main, setMain] = useState(images[0]);
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({ ...product, price: parseFloat(product.price) }, qty);
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `${qty} × ${product.name} added to cart`,
      showConfirmButton: false,
      timer: 2200,
      timerProgressBar: true,
    });
  };

  const perks = [
    { Icon: Truck,      text: 'Free shipping over $200' },
    { Icon: Shield,     text: '2-year warranty' },
    { Icon: RefreshCw,  text: '30-day easy returns' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100">

        {/* ── Images ── */}
        <div className="flex flex-col items-center gap-4">
          {/* Main image */}
          <div className="w-full max-w-sm bg-white rounded-2xl flex items-center justify-center h-72 sm:h-96 border border-gray-100 overflow-hidden">
            <img
              src={main}
              alt={product?.name}
              className="max-h-full max-w-full object-contain p-6 mix-blend-multiply transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3 flex-wrap justify-center">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMain(img)}
                  className={`w-16 h-16 rounded-xl border-2 bg-white flex items-center justify-center p-1.5 transition-all ${
                    main === img ? 'border-brand-600 shadow-md' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Info ── */}
        <div className="flex flex-col">
          {/* Badge */}
          <span className="inline-block text-[11px] font-bold text-brand-700 bg-brand-25 px-3 py-1 rounded-full w-fit mb-3">
            {product?.category}
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">{product?.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {Array(5).fill(0).map((_, j) => (
                <Star key={j} size={14} className={j < 4 ? 'text-yellow-400' : 'text-gray-200'} fill={j < 4 ? '#fbbf24' : '#e5e7eb'} />
              ))}
            </div>
            <span className="text-[13px] text-gray-500">4.8 (128 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl font-black text-brand-700">${product?.price?.toLocaleString()}</span>
            {product?.discount && (
              <>
                <span className="text-lg text-gray-400 line-through">
                  ${Math.round(product.price * 1.12).toLocaleString()}
                </span>
                <span className="text-[12px] font-bold bg-brand-25 text-brand-700 px-2 py-0.5 rounded-full">
                  {product.discount}
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6">
            High-quality {product?.subcategory?.toLowerCase() || 'product'} from {product?.brand || 'Lenny'}. 
            Crafted with premium materials and designed for lasting performance and everyday use.
          </p>

          {/* Brand */}
          <div className="flex items-center gap-4 text-[13px] text-gray-600 mb-6">
            <span><strong className="text-gray-900">Brand:</strong> {product?.brand}</span>
            <span>·</span>
            <span><strong className="text-gray-900">Category:</strong> {product?.subcategory}</span>
          </div>

          {/* Qty + Cart */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {/* Quantity */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-gray-400 hover:text-gray-700 transition-colors">
                <Minus size={15} />
              </button>
              <span className="w-8 text-center font-bold text-[16px]">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="text-gray-400 hover:text-gray-700 transition-colors">
                <Plus size={15} />
              </button>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="flex-1 flex items-center justify-center gap-2 bg-brand-800 hover:bg-brand-700 text-white py-3 px-6 rounded-xl font-bold text-[14px] transition-all active:scale-[0.97] shadow-lg shadow-brand-900/20"
            >
              <ShoppingCart size={17} />
              Add to Cart
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setLiked(!liked)}
              className={`p-3 rounded-xl border transition-all ${liked ? 'border-red-200 bg-red-50 text-red-400' : 'border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-400'}`}
            >
              <Heart size={17} fill={liked ? 'currentColor' : 'none'} />
            </button>

            {/* Share */}
            <button className="p-3 rounded-xl border border-gray-200 text-gray-400 hover:border-brand-700 hover:text-brand-700 transition-all">
              <Share2 size={17} />
            </button>
          </div>

          {/* Perks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {perks.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white rounded-xl p-3 border border-gray-100">
                <Icon size={15} className="text-brand-700 flex-shrink-0" />
                <span className="text-[11.5px] text-gray-600 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
