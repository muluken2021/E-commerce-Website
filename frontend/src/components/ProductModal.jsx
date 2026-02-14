import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Star, MoveRight } from 'lucide-react';

const ProductModal = ({ isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  // Real online images
  const images = [
    "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762",
    "https://raphasgear.com/cdn/shop/products/JBLQuantum100_1.png?v=1676872403",
    "https://m.media-amazon.com/images/I/61qdaKo1jtL._AC_UF350,350_QL80_.jpg",
    "https://www.retravision.com.au/img/containers/products/e/8/JBL_Quantum_100M2_Product_Image_Angle_Purple-e82a415ab7ee82d51e79e5b3d06d5640.jpg/86e68bab14511d96cd1763687c73a6a4/JBL_Quantum_100M2_Product_Image_Angle_Purple-e82a415ab7ee82d51e79e5b3d06d5640.jpg"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      {/* Main Container with 600px Max Height */}
      <div className="relative flex h-full max-h-[700px] w-full max-w-lg flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200/50 text-gray-600 backdrop-blur-md transition-all hover:bg-gray-200"
        >
          <X size={20} />
        </button>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto overflow-x-hidden">
          
          {/* Image Gallery */}
          <div className="relative flex flex-col items-center bg-[#eeeeee] pb-5 pt-5 px-8">
            <div className="relative flex w-full items-center justify-between">
              <button 
                onClick={() => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))} 
                className="text-gray-400 transition-colors hover:text-gray-800"
              >
                <ChevronLeft size={32} strokeWidth={1.5} />
              </button>
              
              <img 
                src={images[activeImage]} 
                alt="Product" 
                className="h-48 w-48 object-contain mix-blend-multiply transition-transform duration-300"
              />

              <button 
                onClick={() => setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))} 
                className="text-gray-400 transition-colors hover:text-gray-800"
              >
                <ChevronRight size={32} strokeWidth={1.5} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-8 flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-16 w-16 overflow-hidden rounded-2xl border-2 bg-white p-1 transition-all ${
                    activeImage === index ? 'border-orange-400 ring-2 ring-orange-100' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="thumb" className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 p-8">
            <header>
              <h2 className="text-2xl font-bold tracking-tight text-gray-800">Wireless Over-Ear Headphone</h2>
              <p className="mt-1 text-xl font-bold text-gray-700">250 Birr</p>
              
              <div className="mt-2 flex items-center gap-1">
                {[1, 2, 3, 4].map((s) => (
                  <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
                <Star size={16} className="text-gray-300" />
                <span className="ml-2 text-sm font-medium text-gray-400">(50)</span>
              </div>
            </header>

            <p className="text-[15px] leading-relaxed text-gray-500">
              High-quality wireless over-ear headphones with deep bass, noise cancellation, and long battery life.
            </p>

            <div className="pt-4 flex flex-col gap-5">
              <button className="w-fit rounded-xl bg-[#cc7a54] px-10 py-3.5 font-bold text-white shadow-lg shadow-orange-900/10 transition-transform active:scale-95">
                Add To Cart
              </button>
              
              <button className="flex items-center gap-2 text-[15px] font-semibold text-gray-500 transition-colors hover:text-gray-800">
                View Product Detail <MoveRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
