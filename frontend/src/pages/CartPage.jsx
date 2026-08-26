import React, { useState } from 'react';
import { Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { assets } from '../assets/assets';
import Swal from 'sweetalert2';

const CartPage = () => {
  const { cartItems, addItem, removeItem, updateQuantity, clearCart, totalAmount } = useCart();
  const [giftWrap, setGiftWrap] = useState(false);

  const toast = (icon, title) =>
    Swal.fire({ toast: true, position: 'top-end', icon, title, showConfirmButton: false, timer: 1600, timerProgressBar: true });

  const increase = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) { addItem(item, 1); toast('success', `+1 ${item.name}`); }
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
    toast('error', `${item?.name} removed`);
  };

  const subtotal = totalAmount + (giftWrap ? 10 : 0);

  /* ── Empty state ── */
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-white">
        <img src={assets.empitycart} alt="Empty cart" className="w-56 sm:w-72 mb-8 opacity-80" />
        <h2 className="font-serif text-2xl font-medium text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-8 leading-relaxed">
          Looks like you haven't added anything yet. Explore our products and find something you love.
        </p>
        <Link to="/category/all">
          <button className="flex items-center gap-2.5 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium text-xs tracking-wider uppercase transition-all shadow-md">
            <ShoppingBag size={16} />
            Start Shopping
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
            Shopping Cart
          </h1>
          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 mt-2 font-light">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-600">Your Shopping Cart</span>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-xs font-serif text-gray-800">
          <div className="col-span-6">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-2 text-right">Total</div>
        </div>

        {/* Cart Items List */}
        <div className="divide-y divide-gray-100">
          {cartItems.map((item) => (
            <div key={item.id} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Product Info */}
              <div className="md:col-span-6 flex gap-4 items-center">
                <Link to={`/productdetail/${item.id}`} className="w-20 h-24 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                </Link>
                <div className="flex flex-col justify-center">
                  <Link to={`/productdetail/${item.id}`}>
                    <h3 className="font-serif text-sm text-gray-800 font-medium hover:text-gray-600 transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-400 mt-1">
                    Color : {item.color || 'Red'}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-xs text-gray-400 underline hover:text-red-500 transition-colors mt-3 text-left w-fit"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="md:col-span-2 text-left md:text-center font-serif text-sm text-gray-800">
                <span className="md:hidden text-xs text-gray-400 mr-2 font-sans">Price:</span>
                ${item.price.toFixed(2)}
              </div>

              {/* Quantity Counter */}
              <div className="md:col-span-2 flex items-center md:justify-center">
                <div className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-600 bg-white">
                  <button onClick={() => decrease(item.id)} className="p-1 hover:text-black transition-colors">
                    <Minus size={12} />
                  </button>
                  <span className="px-3 font-medium text-gray-800">
                    {String(item.quantity).padStart(2, '0')}
                  </span>
                  <button onClick={() => increase(item.id)} className="p-1 hover:text-black transition-colors">
                    <Plus size={12} />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="md:col-span-2 text-left md:text-right font-serif text-sm text-gray-800 font-medium">
                <span className="md:hidden text-xs text-gray-400 mr-2 font-sans">Total:</span>
                ${(item.price * item.quantity).toFixed(2)}
              </div>

            </div>
          ))}
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
              For <strong className="font-semibold text-gray-800">$10.00</strong> Please Wrap The Product
            </span>
          </label>

          <div className="w-full max-w-sm pt-4 border-t border-gray-100 flex flex-col gap-5">
            {/* Subtotal */}
            <div className="flex items-center justify-between font-serif text-base text-gray-800">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 text-center">
              <Link to="/checkout" className="w-full">
                <button className="w-full bg-black text-white text-xs font-medium py-3.5 rounded shadow hover:bg-gray-800 transition-colors">
                  Checkout
                </button>
              </Link>
              <Link to="/cart" className="text-xs text-gray-800 font-serif underline hover:text-gray-500 transition-colors">
                View Cart
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;