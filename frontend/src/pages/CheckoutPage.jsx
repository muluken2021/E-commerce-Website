import React, { useState } from 'react';
import { CreditCard, Wallet, Lock, ChevronDown, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import PaymentTabs from '../components/PaymentMethods/PaymentTabs';
import CardPayment from '../components/PaymentMethods/CardPayment';
import ChapaPayment from '../components/PaymentMethods/ChapaPayment';

const Field = ({ label, type = 'text', placeholder, value, onChange, required }) => (
  <div className="space-y-1.5">
    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-brand-600 focus:bg-white transition-all"
    />
  </div>
);

export default function CheckoutPage() {
  const [method, setMethod] = useState('card');
  const [step, setStep] = useState(1); // 1 = shipping, 2 = payment, 3 = confirmation
  const [form, setForm] = useState({ name: '', phone: '', email: '', country: '', address: '', zip: '' });
  const { cartItems, totalAmount, clearCart } = useCart();

  const f = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));
  const shipping = totalAmount > 200 ? 0 : 15;
  const tax = +(totalAmount * 0.08).toFixed(2);
  const grand = +(totalAmount + shipping + tax).toFixed(2);

  if (step === 3) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={36} className="text-green-500" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Order Placed!</h2>
          <p className="text-gray-400 text-sm mb-8">
            Thanks for your order. We'll send a confirmation to your email and ship within 2-3 business days.
          </p>
          <a href="/" className="inline-block bg-brand-800 hover:bg-brand-700 text-white px-10 py-3 rounded-xl font-bold text-sm transition-all">
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 min-h-screen">
      <h1 className="text-2xl font-black text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── Left ── */}
        <div className="lg:col-span-2 space-y-5">

          {/* Shipping */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <button
              onClick={() => setStep(step === 1 ? 0 : 1)}
              className="w-full flex items-center justify-between px-6 py-5"
            >
              <div className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-black transition-colors ${step >= 1 ? 'bg-brand-800 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  1
                </div>
                <span className="font-bold text-gray-900 text-[15px]">Shipping Address</span>
              </div>
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${step === 1 ? 'rotate-180' : ''}`} />
            </button>

            {step === 1 && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <Field label="Full Name"     placeholder="John Doe"           value={form.name}    onChange={f('name')}    required />
                  <Field label="Phone Number"  placeholder="+1 234 567 8900"    value={form.phone}   onChange={f('phone')}   required />
                  <Field label="Email Address" placeholder="you@email.com" type="email" value={form.email} onChange={f('email')} required />
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Country</label>
                    <div className="relative">
                      <select
                        value={form.country}
                        onChange={f('country')}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 outline-none focus:border-brand-600 appearance-none"
                      >
                        <option value="">Select Country</option>
                        {['Ethiopia', 'USA', 'UK', 'UAE', 'Germany', 'France'].map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Street Address" placeholder="123 Main Street" value={form.address} onChange={f('address')} required />
                  </div>
                  <Field label="Zip / Postal Code" placeholder="10001" value={form.zip} onChange={f('zip')} />
                </div>
                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-brand-800 hover:bg-brand-700 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-[0.97]"
                  >
                    Continue to Payment →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Payment */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <button
              onClick={() => setStep(step === 2 ? 1 : 2)}
              className="w-full flex items-center justify-between px-6 py-5"
            >
              <div className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-black transition-colors ${step >= 2 ? 'bg-brand-800 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  2
                </div>
                <span className="font-bold text-gray-900 text-[15px]">Payment Method</span>
              </div>
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${step === 2 ? 'rotate-180' : ''}`} />
            </button>

            {step === 2 && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="mt-5">
                  <PaymentTabs selectedMethod={method} setSelectedMethod={setMethod} />
                  <div className="mt-5">
                    {method === 'card' && <CardPayment />}
                    {method === 'chapa' && <ChapaPayment />}
                  </div>
                </div>

                {/* Security note */}
                <div className="flex items-center gap-2 mt-5 text-[12px] text-gray-400 bg-gray-50 rounded-xl px-4 py-3">
                  <Lock size={13} className="text-green-500 flex-shrink-0" />
                  Your payment information is encrypted and secure.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Right: Summary ── */}
        <div className="h-fit bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-4 lg:sticky lg:top-20">
          <h3 className="font-black text-gray-900 text-[15px]">Order Summary</h3>

          {/* Items */}
          <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 flex-shrink-0">
                  <img src={item.img} alt={item.name} className="max-h-10 max-w-10 object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12.5px] font-semibold text-gray-800 line-clamp-1">{item.name}</p>
                  <p className="text-[11px] text-gray-400">Qty: {item.quantity}</p>
                </div>
                <span className="text-[13px] font-bold text-gray-800 flex-shrink-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t border-gray-100 pt-4 space-y-2 text-[13px]">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span><span className="font-semibold">${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : ''}`}>
                {shipping === 0 ? 'FREE' : `$${shipping}`}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax (8%)</span><span className="font-semibold">${tax}</span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-3 flex justify-between font-black text-gray-900">
            <span>Total</span>
            <span className="text-brand-700 text-lg">${grand}</span>
          </div>

          <button
            onClick={() => step === 2 ? setStep(3) : setStep(step + 1)}
            className="w-full bg-brand-800 hover:bg-brand-700 text-white py-3.5 rounded-xl font-bold text-sm transition-all active:scale-[0.97] shadow-lg shadow-brand-900/20"
          >
            {step === 2 ? '🔒 Place Order' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
