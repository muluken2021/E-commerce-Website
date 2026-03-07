import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
const reviewData = [
  {
    name: "Selam Tesfaye",
    date: "05 MAR 2026",
    text: "The delivery was super fast and the food arrived piping hot. Loved the packaging too!"
  },
  {
    name: "Abebe Mekonnen",
    date: "28 FEB 2026",
    text: "Tried the new spicy chicken meal — flavor was on point! Definitely ordering again."
  },
  {
    name: "Hana Gebremariam",
    date: "20 FEB 2026",
    text: "Good portion sizes and fresh ingredients. The app was easy to navigate as well."
  },
  {
    name: "Yonas Fikremariam",
    date: "12 FEB 2026",
    text: "Ordered late at night and it still arrived quickly. Excellent service and tasty food!"
  }
];
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        

        {/* Review Grid */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Popular Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {reviewData.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <span className="text-[10px] font-bold text-gray-400 mb-2 block">{rev.date}</span>
              <h4 className="font-bold text-gray-800 mb-1">{rev.name}</h4>
              <div className="flex gap-0.5 text-brand-400 mb-3">
                {Array(5).fill(0).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{rev.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;