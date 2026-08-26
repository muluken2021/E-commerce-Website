import React, { useState } from 'react';
import { Lock, ChevronDown, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLangCurrency } from '../context/LanguageCurrencyContext';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  const [saveInfoDelivery, setSaveInfoDelivery] = useState(false);
  const [saveInfoPayment, setSaveInfoPayment] = useState(false);

  const [form, setForm] = useState({
    email: '',
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    cardHolderName: '',
  });

  const { cartItems, totalAmount } = useCart();
  const { formatPrice } = useLangCurrency();

  const handleInputChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const shippingCost = 40.0;
  const grandTotal = totalAmount + shippingCost;

  if (step === 3) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-white">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={36} className="text-green-500" />
          </div>
          <h2 className="font-serif text-2xl font-medium text-gray-800 mb-2">Order Placed!</h2>
          <p className="text-gray-400 text-xs sm:text-sm mb-8 leading-relaxed">
            Thanks for your order. We'll send a confirmation to your email and ship within 2-3 business days.
          </p>
          <a
            href="/products"
            className="inline-block bg-[#AA061B] hover:bg-[#AA061B] text-white px-8 py-3 rounded text-xs font-medium uppercase tracking-wider transition-all"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen text-gray-800 font-sans">
      {/* Page Title Header */}
      <div className="py-8 text-center border-b border-gray-100">
        <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-gray-800">
          FASCO Demo Checkout
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* ── Left Column: Checkout Forms ── */}
        <div className="lg:col-span-7 px-6 sm:px-10 lg:px-16 py-10 border-r border-gray-100 space-y-10">
          
          {/* Section: Contact */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-medium text-gray-800">Contact</h2>
              <span className="text-xs text-gray-400">
                Have an account?{' '}
                <a href="/signup" className="text-blue-500 hover:underline">
                  Create Account
                </a>
              </span>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleInputChange('email')}
                className="w-full border border-gray-300 rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
              />
            </div>
          </section>

          {/* Section: Delivery */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-gray-800">Delivery</h2>
            <div className="space-y-3">
              <div className="relative">
                <select
                  value={form.country}
                  onChange={handleInputChange('country')}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-xs text-gray-500 outline-none focus:border-gray-500 appearance-none bg-white cursor-pointer"
                >
                  <option value="">Country / Region</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="UAE">UAE</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleInputChange('firstName')}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleInputChange('lastName')}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
                />
              </div>

              <input
                type="text"
                placeholder="Address"
                value={form.address}
                onChange={handleInputChange('address')}
                className="w-full border border-gray-300 rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="City"
                  value={form.city}
                  onChange={handleInputChange('city')}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  value={form.postalCode}
                  onChange={handleInputChange('postalCode')}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer pt-1 text-xs text-gray-500 select-none">
                <input
                  type="checkbox"
                  checked={saveInfoDelivery}
                  onChange={(e) => setSaveInfoDelivery(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-0 accent-black cursor-pointer"
                />
                <span>Save This Info For Future</span>
              </label>
            </div>
          </section>

          {/* Section: Payment */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-medium text-gray-800">Payment</h2>

            <div className="bg-gray-50/50 border border-gray-200 rounded p-4 space-y-3">
              <div className="relative">
                <div className="w-full border border-gray-300 bg-white rounded px-4 py-3 text-xs flex items-center justify-between">
                  <span className="text-gray-700">Credit Card</span>
                  <div className="flex items-center gap-1.5">
                    {/* Simulated Master/Visa badge */}
                    <div className="flex -space-x-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500 opacity-90"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-amber-400 opacity-90"></div>
                    </div>
                    <ChevronDown size={14} className="text-gray-400 ml-1" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={form.cardNumber}
                  onChange={handleInputChange('cardNumber')}
                  className="w-full border border-gray-300 bg-white rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
                />
                <Lock size={13} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Expiration Date"
                  value={form.expirationDate}
                  onChange={handleInputChange('expirationDate')}
                  className="w-full border border-gray-300 bg-white rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Security Code"
                  value={form.securityCode}
                  onChange={handleInputChange('securityCode')}
                  className="w-full border border-gray-300 bg-white rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
                />
              </div>

              <input
                type="text"
                placeholder="Card Holder Name"
                value={form.cardHolderName}
                onChange={handleInputChange('cardHolderName')}
                className="w-full border border-gray-300 bg-white rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
              />

              <label className="flex items-center gap-2 cursor-pointer pt-1 text-xs text-gray-500 select-none">
                <input
                  type="checkbox"
                  checked={saveInfoPayment}
                  onChange={(e) => setSaveInfoPayment(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-0 accent-black cursor-pointer"
                />
                <span>Save This Info For Future</span>
              </label>
            </div>
          </section>

          {/* Pay Now Button */}
          <button
            onClick={() => setStep(3)}
            className="w-full bg-[#AA061B] hover:bg-[#AA061B] text-white py-4 rounded text-xs font-medium uppercase tracking-wider transition-all shadow-md"
          >
            Pay Now
          </button>

          {/* Copyright Note */}
          <p className="text-center text-[10px] text-gray-400 pt-4">
            Copyright © 2026 FASCO . All Rights Reserved.
          </p>
        </div>

        {/* ── Right Column: Order Summary ── */}
        <div className="lg:col-span-5 bg-gray-50/70 px-6 sm:px-10 lg:px-12 py-10 space-y-6">
          
          {/* Cart Items List */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4">
                <div className="relative w-16 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-medium">
                    {item.quantity}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-xs text-gray-800 font-medium line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {item.color || 'Red'}
                  </p>
                </div>

                <div className="font-serif text-xs text-gray-800 font-medium">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          {/* Discount Code Input */}
          <div className="flex gap-2 pt-2">
            <input
              type="text"
              placeholder="Discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="flex-1 border border-gray-300 bg-white rounded px-4 py-3 text-xs outline-none focus:border-gray-500 transition-colors placeholder-gray-400"
            />
            <button className="bg-[#AA061B] hover:bg-[#AA061B] text-white px-6 py-3 rounded text-xs font-medium transition-colors">
              Apply
            </button>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-2.5 pt-4 border-t border-gray-200 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-gray-800">{formatPrice(totalAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-medium text-gray-800">{formatPrice(shippingCost)}</span>
            </div>
            <div className="flex justify-between font-serif text-sm font-medium text-gray-800 pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}