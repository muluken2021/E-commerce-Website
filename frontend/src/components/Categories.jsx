import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Shirt,
  Swords,
  Headphones,
  BookOpen,
  Gamepad2,
  Sparkles,
  Car,
  Watch,
  ShoppingBag,
} from 'lucide-react';

const cats = [
  { name: 'Electronics',    count: '3.9k products',  Icon: Smartphone, path: '/category/electronics' },
  { name: 'Fashion',        count: '16.2k products', Icon: Shirt,       path: '/category/fashion' },
  { name: 'Action Figure',  count: '4.0k products',  Icon: Swords,      path: '/category/all' },
  { name: 'Headphones',     count: '22.8k products', Icon: Headphones,  path: '/category/electronics' },
  { name: 'Books',          count: '125k products',  Icon: BookOpen,    path: '/category/all' },
  { name: 'Gaming',         count: '62k products',   Icon: Gamepad2,    path: '/category/all' },
  { name: 'Beauty',         count: '8.1k products',  Icon: Sparkles,    path: '/category/beauty' },
  { name: 'Automotive',     count: '5.3k products',  Icon: Car,         path: '/category/automotive' },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[20px] font-black text-gray-900">Featured Category</h2>
        <Link
          to="/category/all"
          className="text-[13px] font-semibold text-gray-600 border border-gray-300 px-4 py-1.5 rounded-lg hover:border-brand-700 hover:text-brand-700 transition-colors"
        >
          View Detail
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3">
        {cats.map(({ name, count, Icon, path }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <Link to={path}>
              <div className="group flex flex-col items-center gap-2.5 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-200 cursor-pointer">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#f0fdf4] group-hover:bg-brand-50 transition-colors">
                  <Icon size={20} className="text-brand-700" strokeWidth={1.8} />
                </div>
                <div className="text-center">
                  <p className="text-[12px] font-bold text-gray-800 leading-tight">{name}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{count}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Accent divider */}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-brand-700 via-brand-200 to-transparent" />
    </section>
  );
}
