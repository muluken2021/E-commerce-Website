import React from 'react';
import {
  Trash2, Plus, Minus, ShoppingBag, ArrowRight,
  ChevronDown, Tag, Truck, CreditCard,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { assets } from '../assets/assets';
import Swal from 'sweetalert2';

const CartPage = () => {
  const { cartItems, addItem, removeItem, updateQuantity, clearCart, totalAmount } = useCart();

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

  const handleClear = () => {
    clearCart();
    toast('info', 'Cart cleared');
  };

  const shipping = totalAmount > 200 ? 0 : 15;
  const tax = +(totalAmount * 0.08).toFixed(2);
  const grand = +(totalAmount + shipping + tax).toFixed(2);

  /* ── Empty state ── */
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <img src={assets.empitycart} alt="Empty cart" className="w-56 sm:w-72 mb-8 opacity-80" />
        <h2 className="text-2xl font-black text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-400 text-sm max-w-sm mb-8">
          Looks like you haven't added anything yet. Explore our products and find something you love.
        </p>
        <Link to="/category/all">
          <button className="flex items-center gap-2.5 bg-brand-800 hover:bg-brand-700 text-white px-9 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-brand-900/20 transition-all active:scale-[0.97]">
            <ShoppingBag size={18} />
            Start Shopping
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 min-h-screen">
      {/* Page title */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Shopping Cart</h1>
          <p className="text-sm text-gray-400 mt-1">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
        </div>
        <button
          onClick={handleClear}
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-red-500 transition-colors py-2 px-3 rounded-lg hover:bg-red-50"
        >
          <Trash2 size={14} /> Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── Left: items ── */}
        <div className="lg:col-span-2 space-y-3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              {/* Image */}
              <Link to={`/productdetail/${item.id}`}>
                <div className="w-20 h-20 flex-shrink-0 bg-white rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>
              </Link>

              {/* Name / price */}
              <div className="flex-1 min-w-0">
                <Link to={`/productdetail/${item.id}`}>
                  <h3 className="font-bold text-gray-800 text-sm line-clamp-1 hover:text-brand-700 transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-xs text-gray-400 mt-0.5">{item.brand || item.category}</p>
                <p className="text-sm font-black text-brand-700 mt-1">${item.price.toLocaleString()}</p>
              </div>

              {/* Qty */}
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-1.5 flex-shrink-0">
                <button onClick={() => decrease(item.id)} className="text-gray-400 hover:text-gray-700 transition-colors">
                  <Minus size={13} />
                </button>
                <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                <button onClick={() => increase(item.id)} className="text-gray-400 hover:text-gray-700 transition-colors">
                  <Plus size={13} />
                </button>
              </div>

              {/* Subtotal */}
              <div className="hidden sm:block text-right flex-shrink-0 w-24">
                <p className="font-black text-gray-800 text-sm">${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              {/* Remove */}
              <button
                onClick={() => handleRemove(item.id)}
                className="text-gray-300 hover:text-red-400 transition-colors p-1.5 flex-shrink-0"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* ── Right: summary ── */}
        <div className="space-y-4">
          {/* Coupon */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
            <h4 className="text-[13px] font-bold text-gray-700 mb-3 flex items-center gap-2">
              <Tag size={14} className="text-brand-700" /> Promo Code
            </h4>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter code..."
                className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-600 bg-white transition-colors"
              />
              <button className="bg-brand-800 hover:bg-brand-700 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors">
                Apply
              </button>
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 space-y-3">
            <h4 className="text-[13px] font-bold text-gray-700 mb-1 flex items-center gap-2">
              <CreditCard size={14} className="text-brand-700" /> Order Summary
            </h4>

            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span className="flex items-center gap-1.5">
                  <Truck size={13} className="text-gray-400" /> Shipping
                </span>
                <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : ''}`}>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (8%)</span>
                <span className="font-semibold">${tax}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-3 flex justify-between font-black text-gray-900">
              <span>Total</span>
              <span className="text-brand-700">${grand}</span>
            </div>

            {shipping > 0 && (
              <p className="text-[11px] text-gray-400">
                Add ${(200 - totalAmount).toFixed(2)} more for free shipping
              </p>
            )}

            {/* Shipping estimate */}
            <div className="pt-2 space-y-2">
              <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-brand-600 appearance-none">
                <option>Select Country</option>
                <option>Ethiopia</option>
                <option>USA</option>
                <option>UK</option>
                <option>UAE</option>
              </select>
              <input
                type="text"
                placeholder="Zip / Postal Code"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-600 transition-colors"
              />
            </div>

            <Link to="/checkout" className="block">
              <button className="w-full bg-brand-800 hover:bg-brand-700 text-white py-3 rounded-xl font-bold text-[14px] transition-all active:scale-[0.97] shadow-lg shadow-brand-900/20">
                Proceed to Checkout
              </button>
            </Link>

            <Link to="/category/all" className="block text-center text-sm text-gray-400 hover:text-brand-700 transition-colors pt-1">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
