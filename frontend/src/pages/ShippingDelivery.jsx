import React from 'react';
import { Truck, Clock, Globe, MapPin, PackageCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ShippingDelivery() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Page Header Banner ── */}
      <div className="bg-gray-50 border-b border-gray-100 py-16 px-4 sm:px-6 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-medium text-gray-800 tracking-tight mb-3">
          Shipping & Delivery
        </h1>
        <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          We bring authentic traditional Ethiopian craftsmanship right to your doorstep, locally and worldwide with care and speed.
        </p>
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        
        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-1">Fast Local Dispatch</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Orders within Addis Ababa are processed and dispatched within 24 hours.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-1">Global Shipping</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We safely package and ship our traditional garments to clients worldwide.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#AA061B] shrink-0 shadow-sm">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-1">Secure Packaging</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Every hand-loomed garment is carefully wrapped to protect delicate fabrics.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          
          {/* Section 1: Delivery Zones & Timelines */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            <h2 className="font-serif text-2xl font-medium text-gray-800 mb-6 flex items-center gap-3">
              <MapPin className="text-[#AA061B]" size={24} />
              <span>Delivery Zones & Timelines</span>
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-xs text-gray-400 uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold">Destination</th>
                    <th className="py-3 px-4 font-bold">Estimated Time</th>
                    <th className="py-3 px-4 font-bold">Carrier / Method</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-gray-600 divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 px-4 font-semibold text-gray-800">Addis Ababa (Local)</td>
                    <td className="py-4 px-4">1 - 2 Business Days</td>
                    <td className="py-4 px-4">Direct Courier / Hand Delivery</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-gray-800">Regional Ethiopia</td>
                    <td className="py-4 px-4">3 - 5 Business Days</td>
                    <td className="py-4 px-4">Local Express Transit</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-gray-800">North America & Europe</td>
                    <td className="py-4 px-4">7 - 12 Business Days</td>
                    <td className="py-4 px-4">International Air Freight</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-gray-800">Rest of the World</td>
                    <td className="py-4 px-4">10 - 15 Business Days</td>
                    <td className="py-4 px-4">DHL / Global Post Service</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Order Processing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Clock className="text-[#AA061B]" size={20} />
                <span>Order Processing Time</span>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                All orders are processed within 1–2 business days. Orders are not shipped or delivered on weekends or public holidays.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                If we are experiencing a high volume of orders or custom hand-weaving requests, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <PackageCheck className="text-[#AA061B]" size={20} />
                <span>Shipment Confirmation & Tracking</span>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). 
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                The tracking number will be active within 24 hours. For any inquiries regarding tracking, you can reach out via our <Link to="/contact" className="text-[#AA061B] font-semibold hover:underline">Contact Page</Link>.
              </p>
            </div>
          </div>

          {/* Call to Action Support Box */}
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl text-center">
            <h3 className="font-serif text-xl font-medium text-gray-800 mb-2">Have Custom Shipping Questions?</h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto mb-6">
              Need bulk enterprise shipping or specific express courier arrangements? Get in touch with our operations team today.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#AA061B] text-white text-xs font-semibold px-8 py-3.5 rounded-lg shadow hover:bg-[#8d0517] transition-all"
            >
              Contact Support
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}