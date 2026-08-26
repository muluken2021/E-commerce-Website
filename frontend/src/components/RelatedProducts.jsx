import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function RelatedProducts({ relatedProducts }) {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const top = relatedProducts.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-gray-100">
      <div className="flex items-center justify-between mb-7">
        <h3 className="text-[18px] font-black text-gray-900">Related Products</h3>
        <Link
          to="/category/all"
          className="text-[13px] font-semibold text-gray-500 hover:text-brand-700 transition-colors"
        >
          View all →
        </Link>
      </div>

      {top.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {top.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <ProductCard
                product={p}
                onAddToCart={(prod) => { setSelected(prod); setOpen(true); }}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-sm">No related products found.</p>
      )}

      {selected && (
        <ProductModal
          product={selected}
          isOpen={open}
          onClose={() => { setOpen(false); setSelected(null); }}
        />
      )}
    </section>
  );
}
