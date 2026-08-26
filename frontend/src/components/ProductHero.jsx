import React, { useState, useEffect, useMemo } from 'react';
import { Star, Heart, Eye, Minus, Plus, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

const ProductHero = ({ product }) => {
  const { formatPrice } = useLangCurrency();
  // Extract data fields matching your specific schema with fallback safety
  const id = product?.id;
  const brandName = product?.brand || 'Queen Sheba Kids';
  const title = product?.title || 'Embroidered Girls Kemis';
  const rawPrice = product?.price || '$70.00';
  const originalPrice = product?.originalPrice || null; // Optional formatted string like "$90.00"
  const discountText = product?.discount || (originalPrice ? 'SPECIAL OFFER' : null);
  const rating = product?.rating || 5;
  const reviewsCount = product?.reviewsCount || '1.4k';
  const stockStatus = product?.stockStatus || 'In Stock';
  const category = product?.category || 'Women Kids Fashion';
  const description = product?.longDescription || '';

  // Extract color & size options if present, or assign reasonable defaults
  const sizes = product?.sizes || ['2-3Y', '4-5Y', '6-7Y', '8-9Y'];
  const colors = useMemo(() => {
    if (product?.colors) return product.colors;
    return [
      { name: 'Traditional White', hex: '#F9F6F0' },
      { name: 'Cream', hex: '#FFFDD0' }
    ];
  }, [product]);

  // Extract images array directly from your data format
  const imagesList = useMemo(() => {
    if (product?.images?.length) return product.images;
    if (product?.image) return [product.image];
    return ['/placeholder.jpg'];
  }, [product]);

  // States
  const [mainImage, setMainImage] = useState(imagesList[0]);
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name || 'Standard');

  const { addItem } = useCart();

  // Reset selected image when product changes
  useEffect(() => {
    setMainImage(imagesList[0] || '');
  }, [imagesList]);

  // Numeric price parser for cart calculations
  const numericPrice = useMemo(() => {
    if (typeof rawPrice === 'number') return rawPrice;
    return parseFloat(String(rawPrice).replace(/[^0-9.]/g, '')) || 0;
  }, [rawPrice]);

  const handleAdd = () => {
    if (addItem) {
      addItem(
        {
          id,
          title,
          brand: brandName,
          price: numericPrice,
          image: mainImage,
          selectedSize,
          selectedColor,
          category,
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
        
        {/* ── Left Column: Dynamic Image Gallery ── */}
        <div className="md:col-span-6 flex gap-3">
          {/* Vertical Thumbnail Strip */}
          <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[580px] scrollbar-thin">
            {imagesList.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMainImage(img)}
                className={`w-14 h-18 sm:w-16 sm:h-20 flex-shrink-0 border overflow-hidden transition-all duration-200 cursor-pointer rounded ${
                  mainImage === img ? 'border-[#AA061B]' : 'border-gray-200 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${title} preview ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Display Image */}
          <div className="flex-1 bg-gray-50 aspect-[3/4] overflow-hidden relative group rounded-lg border border-gray-100">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* ── Right Column: Dynamic Data Binding ── */}
        <div className="md:col-span-6 flex flex-col pt-1 sm:px-4">
          
          {/* Category & Brand Header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                {brandName}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500 font-medium">
                {category}
              </span>
            </div>
            
            {/* Wishlist Button */}
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

          {/* Dynamic Rating & Review Count */}
          <div className="flex items-center gap-2 mb-3">
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
            <span className="text-xs text-gray-500 font-sans">({reviewsCount} reviews)</span>
          </div>

          {/* Price & Stock Display */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif text-2xl font-bold text-gray-900">
              {typeof rawPrice === 'number' ? formatPrice(rawPrice) : rawPrice}
            </span>
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through font-serif">
                {originalPrice}
              </span>
            )}
            {discountText && (
              <span className="bg-[#AA061B] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                {discountText}
              </span>
            )}
          </div>

          {/* Stock Availability Indicator */}
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 w-fit px-2.5 py-1 rounded-md mb-4 font-medium">
            <CheckCircle2 size={13} />
            <span>{stockStatus}</span>
          </div>

          {/* Long Description Excerpt */}
          {description && (
            <p className="text-xs text-gray-600 leading-relaxed mb-5 line-clamp-3">
              {description}
            </p>
          )}

          {/* Size Selector */}
          {sizes.length > 0 && (
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
                      className={`px-3 py-2 border text-xs font-serif flex items-center justify-center transition-all cursor-pointer rounded ${
                        active ? 'bg-[#AA061B] text-white border-[#AA061B] font-medium' : 'bg-white border-gray-200 text-gray-700 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Color Selector */}
          {colors.length > 0 && (
            <div className="mb-6 space-y-2">
              <div className="text-xs text-gray-800">
                <span className="font-medium">Color:</span> {selectedColor}
              </div>
              <div className="flex items-center gap-2">
                {colors.map((c) => {
                  const colorName = typeof c === 'string' ? c : c.name;
                  const colorHex = typeof c === 'string' ? c.toLowerCase() : c.hex;
                  const active = selectedColor === colorName;

                  return (
                    <button
                      key={colorName}
                      type="button"
                      onClick={() => setSelectedColor(colorName)}
                      style={{ backgroundColor: colorHex }}
                      className={`w-7 h-7 rounded-full relative transition-all cursor-pointer border border-gray-300 ${
                        active ? 'ring-2 ring-offset-2 ring-[#AA061B]' : 'hover:scale-105'
                      }`}
                      aria-label={`Select color ${colorName}`}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity Controls & Add To Cart Button */}
          <div className="space-y-2 mt-auto">
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

              {/* Add to Cart Action */}
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-[#AA061B] text-white hover:bg-[#7d0314] py-3 px-6 font-serif text-xs font-semibold tracking-wider transition-all duration-200 active:scale-[0.99] rounded-md shadow-sm cursor-pointer"
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