import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Make your daily hand-nail and toe DY',
    category: 'Beauty',
    date: 'Jan 15, 2026',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'What are the fashion trends in 2026?',
    category: 'Fashion',
    date: 'Feb 3, 2026',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Tips for Work-Life Balance',
    category: 'Lifestyle',
    date: 'Mar 10, 2026',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80',
  },
];

export default function ArticlesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[20px] font-black text-gray-900">Lenny's Article</h2>
        <Link
          to="/"
          className="text-[13px] font-semibold text-gray-600 border border-gray-300 px-4 py-1.5 rounded-lg hover:border-brand-700 hover:text-brand-700 transition-colors"
        >
          View Detail
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <motion.article
            key={a.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="group cursor-pointer"
          >
            <div className="rounded-2xl overflow-hidden mb-4 h-[180px] bg-gray-100">
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold text-brand-700 uppercase tracking-wider bg-brand-25 px-2 py-0.5 rounded-full">
                {a.category}
              </span>
              <span className="text-[11px] text-gray-400">{a.date}</span>
              <span className="text-[11px] text-gray-400">· {a.readTime}</span>
            </div>
            <div className="flex items-start gap-2">
              <h3 className="flex-1 text-[14px] font-bold text-gray-800 group-hover:text-brand-700 transition-colors line-clamp-2 leading-snug">
                {a.title}
              </h3>
              <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 group-hover:bg-brand-700 flex items-center justify-center transition-colors">
                <ArrowUpRight size={12} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
