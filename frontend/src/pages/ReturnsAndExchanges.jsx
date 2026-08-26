import React from 'react';
import { RefreshCw, ShieldCheck, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReturnsAndExchanges() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Page Header Banner ── */}
      <div className="bg-gray-50 border-b border-gray-100 py-16 px-4 sm:px-6 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-medium text-gray-800 tracking-tight mb-3">
          Returns & Exchanges
        </h1>
        <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          We want you to absolutely love your traditional wear. If something isn't quite right, we’re here to help you get the right fit or style.
        </p>
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        
        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-1">14-Day Window</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                You have up to 14 days from delivery to request a return or size exchange.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
              <RefreshCw size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-1">Easy Exchanges</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Need a different size or color? We make garment exchanges quick and seamless.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-1">Quality Guaranteed</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Full refunds or replacements are provided for items with manufacturing defects.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          
          {/* Section 1: Return Policy Conditions */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            <h2 className="font-serif text-2xl font-medium text-gray-800 mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-[#AA061B]" size={24} />
              <span>Eligibility Guidelines</span>
            </h2>
            
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              To be eligible for a return or exchange, your item must meet the following conditions:
            </p>

            <ul className="space-y-3 text-xs text-gray-600 list-disc list-inside leading-relaxed">
              <li>Item must be returned within <strong>14 days</strong> of receiving your order.</li>
              <li>Garments must be unworn, unwashed, unaltered, and in their original condition with all tags attached.</li>
              <li>Traditional clothing items must show no signs of perfume, deodorant stains, or wear marks.</li>
              <li>Proof of purchase (order confirmation email or receipt) must be included.</li>
            </ul>
          </div>

          {/* Section 2: Step-by-Step Return Process */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            <h2 className="font-serif text-2xl font-medium text-gray-800 mb-6 flex items-center gap-3">
              <RefreshCw className="text-[#AA061B]" size={24} />
              <span>How to Initiate a Return or Exchange</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-gray-50/50 border border-gray-100">
                <span className="text-2xl font-bold text-[#AA061B] block mb-2">01</span>
                <h3 className="text-sm font-bold text-gray-800 mb-1">Contact Support</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Reach out to us via our <Link to="/contact" className="text-[#AA061B] font-semibold hover:underline">Contact Page</Link> with your order number and reason for return.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gray-50/50 border border-gray-100">
                <span className="text-2xl font-bold text-[#AA061B] block mb-2">02</span>
                <h3 className="text-sm font-bold text-gray-800 mb-1">Package Your Item</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Securely pack the garment in its original packaging along with any tags and the receipt/invoice.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gray-50/50 border border-gray-100">
                <span className="text-2xl font-bold text-[#AA061B] block mb-2">03</span>
                <h3 className="text-sm font-bold text-gray-800 mb-1">Ship or Drop Off</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Coordinate drop-off or courier pickup with our team. Once inspected, your exchange or refund will be processed.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Non-Returnable Items Notice */}
          <div className="bg-amber-50/50 border border-amber-200/60 p-6 md:p-8 rounded-2xl flex items-start gap-4">
            <div className="text-amber-600 shrink-0 mt-0.5">
              <AlertCircle size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-1">Custom Orders Note</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Custom hand-loomed Habesha Kemis pieces tailored specifically to custom body measurements are final sale and cannot be returned unless there is a structural manufacturing defect.
              </p>
            </div>
          </div>

          {/* Call to Action Support Box */}
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl text-center">
            <h3 className="font-serif text-xl font-medium text-gray-800 mb-2">Need Help With a Return?</h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto mb-6">
              Our support team is ready to walk you through the exchange process or assist with tracking your refund status.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#AA061B] text-white text-xs font-semibold px-8 py-3.5 rounded-lg shadow hover:bg-[#8d0517] transition-all"
            >
              Contact Support Team
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}