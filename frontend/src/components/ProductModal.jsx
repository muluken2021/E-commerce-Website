import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Star, ArrowRight, Plus, Minus, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ isOpen, onClose, product }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const images = product?.images || [
    product?.img,
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=400&auto=format&fit=crop&q=80',
  ].filter(Boolean);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    addItem({ ...product, price: parseFloat(product.price) }, qty);
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `${qty} × ${product.name} added to cart`,
      showConfirmButton: false,
      timer: 2200,
      timerProgressBar: true,
    });
    onClose();
  };

  const prevImg = () => setActiveImg((p) => (p === 0 ? images.length - 1 : p - 1));
  const nextImg = () => setActiveImg((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="overflow-y-auto">
              {/* Image gallery */}
              <div className="relative bg-gray-50 flex items-center justify-between px-5 py-8">
                <button onClick={prevImg} className="text-gray-300 hover:text-gray-600 transition-colors p-1">
                  <ChevronLeft size={28} strokeWidth={1.5} />
                </button>
                <img
                  src={images[activeImg]}
                  alt={product.name}
                  className="h-52 w-52 object-contain mix-blend-multiply transition-all duration-300"
                />
                <button onClick={nextImg} className="text-gray-300 hover:text-gray-600 transition-colors p-1">
                  <ChevronRight size={28} strokeWidth={1.5} />
                </button>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImg(idx)}
                        className={`w-12 h-12 rounded-xl border-2 overflow-hidden bg-white p-1 transition-all ${
                          activeImg === idx ? 'border-brand-600 shadow-md' : 'border-transparent'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-xl font-black text-gray-900">{product.name}</h2>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {Array(5).fill(0).map((_, j) => (
                      <Star key={j} size={13} className={j < 4 ? 'text-yellow-400' : 'text-gray-200'} fill={j < 4 ? '#fbbf24' : '#e5e7eb'} />
                    ))}
                    <span className="text-[12px] text-gray-400 ml-1">(128 reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-brand-700">${product.price?.toLocaleString()}</span>
                  {product.discount && (
                    <span className="text-[12px] bg-brand-25 text-brand-700 font-bold px-2 py-0.5 rounded-full">
                      {product.discount}
                    </span>
                  )}
                </div>

                <p className="text-[13px] text-gray-500 leading-relaxed">
                  High-quality {product.category?.toLowerCase() || 'product'} from trusted brand {product.brand || 'Lenny'}.
                  Crafted with premium materials for lasting performance.
                </p>

                {/* Qty */}
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-semibold text-gray-700">Quantity</span>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-1.5">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="text-gray-500 hover:text-gray-800 transition-colors p-0.5"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-7 text-center font-bold text-[15px]">{qty}</span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="text-gray-500 hover:text-gray-800 transition-colors p-0.5"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleAdd}
                    className="flex-1 bg-brand-800 hover:bg-brand-700 text-white py-3 rounded-xl font-bold text-[14px] transition-all active:scale-[0.97] shadow-lg shadow-brand-900/20"
                  >
                    Add {qty > 1 ? `${qty} items` : 'to Cart'}
                  </button>
                  <Link to={`/productdetail/${product.id}`} onClick={onClose}>
                    <button className="border border-gray-200 hover:border-brand-700 text-gray-600 hover:text-brand-700 p-3 rounded-xl transition-colors">
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
