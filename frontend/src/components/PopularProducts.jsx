import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { popularproducts, products } from '../utils/products';

// Show the first 8 popular + a few extras for the second row
const displayProducts = [...popularproducts, ...products.slice(0, 4)].slice(0, 8);

export default function PopularProducts() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
      {/* Header */}
      <div className="text-center mb-9">
        <h2 className="text-[22px] font-black text-gray-900">Popular Product on Lenny</h2>
        <p className="text-[13px] text-gray-400 mt-2">
          Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {displayProducts.map((p, i) => (
          <motion.div
            key={`${p.id}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <ProductCard
              product={p}
              onAddToCart={(prod) => { setSelected(prod); setOpen(true); }}
            />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <Link
          to="/category/all"
          className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:border-brand-700 hover:text-brand-700 px-10 py-2.5 rounded-xl text-[14px] font-semibold transition-colors"
        >
          View All Products
        </Link>
      </div>

      {/* Modal */}
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
