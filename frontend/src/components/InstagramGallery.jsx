import React from 'react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=800&q=80',
    alt: 'Man in tan trench coat',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    alt: 'Woman in light blue sweater',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    alt: 'Woman in colorful summer outfit',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    alt: 'Man in plaid shirt and red trousers',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    alt: 'Woman in blue off-shoulder dress',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    alt: 'Man in grey jacket with sunglasses',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    alt: 'Woman in flowing beige dress',
  },
];

export default function InstagramGallery() {
  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      {/* ── Header ── */}
      <div className="text-center mb-12 max-w-xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-800 tracking-tight">
          Follow Us On Instagram
        </h2>
        <p className="text-xs md:text-sm text-gray-400 mt-3 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
        </p>
      </div>

      {/* ── Image Stream Grid ── */}
      <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto pb-4 px-4 no-scrollbar">
        {instagramPosts.map((post, index) => {
          // Alternating heights to mirror the staggered layout in your mockup
          const isTaller = index % 2 !== 0;

          return (
            <div
              key={post.id}
              className={`flex-shrink-0 w-36 sm:w-48 md:w-56 overflow-hidden rounded-lg shadow-sm group transition-transform duration-300 hover:scale-[1.02] ${
                isTaller ? 'h-72 sm:h-80 md:h-96' : 'h-60 sm:h-64 md:h-80'
              }`}
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}