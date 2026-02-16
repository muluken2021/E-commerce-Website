import React from 'react';
import { X } from 'lucide-react';

const SuccessPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-[#eeeeee] p-12 text-center shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200/80 text-gray-500 transition-colors hover:bg-gray-300"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">
            Product Added to Cart successfully !
          </h2>
          
          <p className="mx-auto max-w-sm text-[15px] leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et reiciendis at facilis 
            quos mollitia, ratione, quibusdam explicabo quo exercitationem.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col gap-4">
            <button className="w-full rounded-2xl bg-brand-500 py-4 text-lg font-bold text-white shadow-lg shadow-brand-900/10 transition-transform active:scale-[0.98]">
              Proceed To checkout
            </button>
            
            <button className="w-full rounded-2xl border-2 border-brand-500 bg-white py-4 text-lg font-bold text-brand-500 transition-transform active:scale-[0.98]">
              Go to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;