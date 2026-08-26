import React, { useState } from 'react';
import { Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { assets } from '../assets/assets';
import Swal from 'sweetalert2';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

const CartPage = () => {
  const { cartItems, addItem, removeItem, updateQuantity, clearCart, totalAmount } = useCart();
  const { t, formatPrice } = useLangCurrency();
  const [giftWrap, setGiftWrap] = useState(false);

  const toast = (icon, title) =>
    Swal.fire({ toast: true, position: 'top-end', icon, title, showConfirmButton: false, timer: 1600, timerProgressBar: true });

  const increase = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) { addItem(item, 1); toast('success', `+1 ${item.name || item.title}`); }
  };

  const decrease = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;
    if (item.quantity <= 1) return handleRemove(id);
    updateQuantity(id, item.quantity - 1);
  };

  const handleRemove = (id) => {
    const item = cartItems.find((i) => i.id === id);
    removeItem(id);
    toast('error', `${item?.name || item?.title || 'Item'} removed`);
  };

  // Safe price parser helper
  const getNumericPrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      const parsed = parseFloat(price.replace(/[^0-9.]/g, ''));
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  const calculatedSubtotal = cartItems.reduce((acc, item) => acc + (getNumericPrice(item.price) * item.quantity), 0);
  const subtotal = calculatedSubtotal + (giftWrap ? 10 : 0);

  /* ── Empty state ── */
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-white">
        <img src={assets.empitycart} alt="Empty cart" className="w-56 sm:w-72 mb-8 opacity-80" />
        <h2 className="font-serif text-2xl font-medium text-gray-800 mb-2">{t('cartEmpty')}</h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-8 leading-relaxed">
          {t('cartEmptyDesc')}
        </p>
        <Link to="/products">
          <button className="flex items-center gap-2.5 bg-[#AA061B] hover:bg-[#760312] text-white px-8 py-3 rounded-lg font-medium text-xs tracking-wider uppercase transition-all shadow-md">
            <ShoppingBag size={16} />
            {t('startShopping')}
            <ArrowRight size={14} />
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 md:px-8 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header with Breadcrumb */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-800 tracking-tight">
            {t('shoppingCart')}
          </h1>
          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 mt-2 font-light">
            <Link to="/" className="hover:text-black transition-colors">{t('home')}</Link>
            <span>&gt;</span>
            <span className="text-gray-600">{t('yourShoppingCart')}</span>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-xs font-serif text-gray-800">
          <div className="col-span-6">{t('product')}</div>
          <div className="col-span-2 text-center">{t('price')}</div>
          <div className="col-span-2 text-center">{t('quantity')}</div>
          <div className="col-span-2 text-right">{t('total')}</div>
        </div>

        {/* Cart Items List */}
        <div className="divide-y divide-gray-100">
          {cartItems.map((item) => {
            const itemName = item.name || item.title || 'Habesha Product';
            const itemImage = item.img || item.image || 'https://via.placeholder.com/150';
            const itemPrice = getNumericPrice(item.price);

            return (
              <div key={item.id} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Product Info */}
                <div className="md:col-span-6 flex gap-4 items-center">
                  <Link to={`/productdetail/${item.id}`} className="w-20 h-24 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                    <img
                      src={itemImage}
                      alt={itemName}
                      className="w-full h-full object-cover object-center"
                    />
                  </Link>
                  <div className="flex flex-col justify-center">
                    <Link to={`/productdetail/${item.id}`}>
                      <h3 className="font-serif text-sm text-gray-800 font-medium hover:text-gray-600 transition-colors">
                        {itemName}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-400 mt-1">
                      Color : {item.color || 'Red'}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-xs text-gray-400 underline hover:text-red-500 transition-colors mt-3 text-left w-fit cursor-pointer"
                    >
                      {t('remove')}
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="md:col-span-2 text-left md:text-center font-serif text-sm text-gray-800">
                  <span className="md:hidden text-xs text-gray-400 mr-2 font-sans">{t('price')}:</span>
                  {formatPrice(itemPrice)}
                </div>

                {/* Quantity Counter */}
                <div className="md:col-span-2 flex items-center md:justify-center">
                  <div className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-600 bg-white">
                    <button onClick={() => decrease(item.id)} className="p-1 hover:text-black transition-colors cursor-pointer">
                      <Minus size={12} />
                    </button>
                    <span className="px-3 font-medium text-gray-800">
                      {String(item.quantity).padStart(2, '0')}
                    </span>
                    <button onClick={() => increase(item.id)} className="p-1 hover:text-black transition-colors cursor-pointer">
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="md:col-span-2 text-left md:text-right font-serif text-sm text-gray-800 font-medium">
                  <span className="md:hidden text-xs text-gray-400 mr-2 font-sans">{t('total')}:</span>
                  {formatPrice(itemPrice * item.quantity)}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Cart Summary */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col items-end gap-6">
          
          {/* Gift Wrap Option */}
          <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-500 font-light select-none">
            <input
              type="checkbox"
              checked={giftWrap}
              onChange={(e) => setGiftWrap(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-black focus:ring-0 cursor-pointer accent-black"
            />
            <span>
              {t('for')} <strong className="font-semibold text-gray-800">{formatPrice(10)}</strong> {t('giftWrap')}
            </span>
          </label>

          <div className="w-full max-w-sm pt-4 border-t border-gray-100 flex flex-col gap-5">
            {/* Subtotal */}
            <div className="flex items-center justify-between font-serif text-base text-gray-800">
              <span>{t('subtotal')}</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 text-center">
              <Link to="/checkout" className="w-full">
                <button className="w-full bg-black text-white text-xs font-medium py-3.5 rounded shadow hover:bg-gray-800 transition-colors cursor-pointer">
                  {t('checkout')}
                </button>
              </Link>
              <Link to="/cart" className="text-xs text-gray-800 font-serif underline hover:text-gray-500 transition-colors">
                {t('viewCart')}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;