import React, { useState, useEffect } from 'react';
import { Star, Heart, Eye, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

const ProductHero = ({ product }) => {
  // Product fallback data mapping to support both schema types safely
  const brandName = product?.brand || 'FASCO';
  const title = product?.title || product?.name || 'Denim Jacket';
  const price = product?.price || 39.0;
  const originalPrice = product?.origPrice || product?.originalPrice || null;
  const discountText = product?.discount || (originalPrice ? 'SPECIAL OFFER' : null);
  const rating = product?.rating || 5;
  const reviewCount = product?.reviewsCount || product?.reviews || '3 reviews';
  const stockCount = product?.stock || 9;
  const viewingCount = product?.viewers || 24;

  // Resolve single image or image array safely
  const initialImages = product?.images?.length
    ? product.images
    : [
        product?.image || product?.img || 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=800',
      ];

  const [mainImage, setMainImage] = useState(initialImages[0]);
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Blue');

  const { addItem } = useCart();

  // Sync main image when product prop updates
  useEffect(() => {
    const updatedImages = product?.images?.length
      ? product.images
      : [product?.image || product?.img || initialImages[0]];
      
    if (updatedImages.length > 0) setMainImage(updatedImages[0]);
  }, [product]);

  const sizes = product?.sizes || ['M', 'L', 'XL', 'XXL'];
  const colors = product?.colorsList || [
    { name: 'Blue', hex: '#A2C2E1' },
    { name: 'Black', hex: '#000000' },
    { name: 'Pink', hex: '#FFD6E8' },
  ];

  const handleAdd = () => {
    if (addItem) {
      addItem(
        {
          ...product,
          price: typeof price === 'number' ? price : parseFloat(String(price).replace(/[^0-9.]/g, '')),
          selectedSize,
          selectedColor,
        },
        qty
      );
    }

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `${qty} × ${title} added to cart`,
      showConfirmButton: false,
      timer: 2200,
      timerProgressBar: true,
    });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 font-sans text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* ── Left Column: Image Gallery (Vertical Thumbnails + Main View) ── */}
        <div className="md:col-span-6 flex gap-3">
          {/* Vertical Thumbnail Strip */}
          <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[580px] scrollbar-thin">
            {initialImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMainImage(img)}
                className={`w-14 h-18 sm:w-16 sm:h-20 flex-shrink-0 border overflow-hidden transition-all duration-200 cursor-pointer ${
                  mainImage === img ? 'border-[#AA061B]' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Large Display Image */}
          <div className="flex-1 bg-gray-100 aspect-[3/4] overflow-hidden relative group rounded-lg">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* ── Right Column: Product Details ── */}
        <div className="md:col-span-6 flex flex-col pt-1 sm:px-4">
          
          {/* Header Row: Brand & Wishlist Button */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
              {brandName}
            </span>
            <button
              type="button"
              onClick={() => setLiked(!liked)}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#AA061B] hover:border-[#AA061B] transition-colors cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart size={14} fill={liked ? 'currentColor' : 'none'} className={liked ? 'text-red-500' : ''} />
            </button>
          </div>

          {/* Title */}
          <h1 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900 mb-2">
            {title}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-1.5 mb-4">
            <div className="flex text-amber-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < rating ? 'text-amber-400' : 'text-gray-300'}
                    fill={i < rating ? 'currentColor' : 'none'}
                  />
                ))}
            </div>
            <span className="text-xs text-gray-500 font-sans">({reviewCount})</span>
          </div>

          {/* Pricing Row */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif text-2xl font-bold text-gray-900">
              {typeof price === 'number' ? `$${price.toFixed(2)}` : price}
            </span>
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through font-serif">
                {typeof originalPrice === 'number' ? `$${originalPrice.toFixed(2)}` : originalPrice}
              </span>
            )}
            {discountText && (
              <span className="bg-[#AA061B] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                {discountText}
              </span>
            )}
          </div>

          {/* Live Viewers Indicator */}
          <div className="flex items-center gap-2 text-xs text-gray-600 mb-5">
            <Eye size={14} className="text-gray-500" />
            <span>
              <strong className="font-semibold text-gray-800">{viewingCount}</strong> people are viewing this right now
            </span>
          </div>

          {/* Stock Availability Bar */}
          <div className="mb-6 space-y-2">
            <div className="text-xs text-gray-600">
              Only <strong className="text-black font-semibold">{stockCount} item(s)</strong> left in stock!
            </div>
            <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
              <div
                className="bg-[#AA061B] h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, (stockCount / 15) * 100)}%` }}
              />
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-5 space-y-2">
            <div className="text-xs text-gray-800">
              <span className="font-medium">Size:</span> {selectedSize}
            </div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => {
                const active = selectedSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 border text-xs font-serif flex items-center justify-center transition-all cursor-pointer ${
                      active ? 'bg-[#AA061B] text-white border-[#AA061B] font-medium' : 'bg-white border-gray-200 text-gray-700 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color Selector */}
          <div className="mb-6 space-y-2">
            <div className="text-xs text-gray-800">
              <span className="font-medium">Color:</span> {selectedColor}
            </div>
            <div className="flex items-center gap-2">
              {colors.map((c) => {
                const active = selectedColor === c.name;
                return (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    style={{ backgroundColor: c.hex }}
                    className={`w-7 h-7 rounded-full relative transition-all cursor-pointer ${
                      active ? 'ring-2 ring-offset-2 ring-[#AA061B]' : 'hover:scale-105 border border-gray-200'
                    }`}
                    aria-label={`Select color ${c.name}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Quantity & Add to Cart Action Row */}
          <div className="space-y-2">
            <span className="text-xs font-medium text-gray-800 block">Quantity</span>
            <div className="flex gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center border border-gray-200 bg-gray-50/50 w-28 justify-between px-3 py-2 rounded-md">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="text-gray-500 hover:text-black transition-colors cursor-pointer"
                >
                  <Minus size={13} />
                </button>
                <span className="text-xs font-medium">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  className="text-gray-500 hover:text-black transition-colors cursor-pointer"
                >
                  <Plus size={13} />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-[#AA061B] text-white hover:bg-gray-800 py-3 px-6 font-serif text-xs font-semibold tracking-wider transition-all duration-200 active:scale-[0.99] rounded-md shadow-sm cursor-pointer"
              >
                ADD TO CART
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductHero;