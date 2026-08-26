import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Selam Tesfaye',
    date: '05 MAR 2026',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=47',
    text: 'The delivery was super fast and the product arrived perfectly packaged. Exactly as described — absolutely love it!',
  },
  {
    name: 'Abebe Mekonnen',
    date: '28 FEB 2026',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=12',
    text: 'Tried the new jacket collection and the quality is outstanding. Fabric is premium and the fit is perfect. Ordering again soon.',
  },
  {
    name: 'Hana Gebremariam',
    date: '20 FEB 2026',
    rating: 4,
    avatar: 'https://i.pravatar.cc/80?img=32',
    text: 'Good product range and very easy navigation on the app. Found exactly what I needed within minutes.',
  },
  {
    name: 'Yonas Fikremariam',
    date: '12 FEB 2026',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=65',
    text: 'Ordered late at night and it arrived next morning. Excellent service, great product quality. Highly recommend Lenny!',
  },
];

export default function Reviews() {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-[20px] font-black text-gray-900">What Our Customers Say</h2>
          <p className="text-[13px] text-gray-400 mt-2">Real reviews from real shoppers on Lenny</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote size={20} className="text-brand-200 mb-3" />
              <p className="text-[12.5px] text-gray-600 leading-relaxed mb-4">{r.text}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array(5).fill(0).map((_, j) => (
                  <Star
                    key={j}
                    size={11}
                    className={j < r.rating ? 'text-yellow-400' : 'text-gray-200'}
                    fill={j < r.rating ? '#fbbf24' : '#e5e7eb'}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2.5 border-t border-gray-100 pt-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-[12px] font-bold text-gray-800">{r.name}</p>
                  <p className="text-[10px] text-gray-400">{r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
