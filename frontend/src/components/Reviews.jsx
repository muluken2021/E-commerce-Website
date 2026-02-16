import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviewData = Array(4).fill({
    name: "Muluken kassaw",
    date: "12 FEB 2026",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et reiciendis at facilis quos mollitia, ratione, quibusdam explicabo quo exercitationem, iusto voluptatibus."
  });

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        

        {/* Review Grid */}
        <h2 className="text-3xl font-bold mb-10">Popular Review</h2>
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