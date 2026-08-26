import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Bethelhem T.',
    role: 'Habesha Customer',
    rating: 5,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrmIOQR1UlfHUD5l1rdBJ0oKXBw6orWAp6NuUwNeMSxEpf6xgPUXe7AoG&s=10',
    quote: 'I absolutely loved my Habesha kemis. The embroidery is beautiful, the quality is excellent, and it fits perfectly.',
  },
  {
    id: 2,
    name: 'James K.',
    role: 'Traveler',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    quote: 'The traditional clothing was beautiful and authentic. I loved the craftsmanship and attention to detail.',
  },
  
  {
    id: 3,
    name: 'Dawit A.',
    role: 'Habesha Customer',
    rating: 5,
    avatar: 'https://t3.ftcdn.net/jpg/03/99/09/44/360_F_399094440_76Rsmxj22Xeq3m3omgDMf2tjFiXkFY2C.jpg',
    quote: 'The traditional Ethiopian design is exactly what I was looking for. Great quality and a very smooth shopping experience.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-20 px-4 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 max-w-xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-800 tracking-tight">
          This Is What Our Customers Say
        </h2>
        <p className="text-xs md:text-sm text-gray-400 mt-3 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-5xl mx-auto flex items-center justify-center min-h-[340px]">
        {testimonials.map((item, index) => {
          // Calculate relative position to simulate carousel stacking
          let position = 'opacity-0 pointer-events-none scale-75 translate-x-0 z-0';
          
          if (index === currentIndex) {
            // Active card (centered, prominent shadow, larger scale)
            position = 'opacity-100 scale-100 translate-x-0 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-gray-100';
          } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
            // Left card preview
            position = 'opacity-50 scale-90 -translate-x-[55%] z-10 shadow-sm border-gray-100 hidden md:flex';
          } else if (index === (currentIndex + 1) % testimonials.length) {
            // Right card preview
            position = 'opacity-50 scale-90 translate-x-[55%] z-10 shadow-sm border-gray-100 hidden md:flex';
          }

          return (
            <div
              key={item.id}
              className={`absolute bg-white rounded-xl p-6 md:p-8 border w-full max-w-xl transition-all duration-500 ease-out flex items-center gap-6 ${position}`}
            >
              {/* Image with offset background box */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1.5 bg-gray-200 rounded-lg transform -translate-x-1 translate-y-1"></div>
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="relative w-28 h-32 md:w-36 md:h-40 rounded-lg object-cover"
                />
              </div>

              {/* Content Details */}
              <div className="flex flex-col justify-between h-full space-y-3">
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-normal">
                  "{item.quote}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                </div>

                <hr className="border-gray-200 my-1 w-full" />

                {/* Name & Role */}
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-medium text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-3 mt-12">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 shadow-sm transition-all"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 shadow-sm transition-all"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}