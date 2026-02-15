import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const cats = [
    { name: "Electronics & Accessories", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500", path: "/category/electronics" },
    { name: "Beauty & Personal Care", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500", path: "/category/beauty" },
    { name: "Groceries & Daily Essentials", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500", path: "/category/groceries" },
    { name: "Automotive & Motor Accessories", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500", path: "/category/automotive" },
  ];

  return (
    <section className=" md:mx-12 px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Browse Products By Category</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
        {/* Large Fashions Card */}
        <div className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group">
          <Link to="/category/fashion">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600" alt="Fashions" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
              <h3 className="text-3xl font-bold text-white">Fashions</h3>
              <div className="p-2 bg-[#d37a4e] rounded-lg text-white"><ArrowRight size={20} /></div>
            </div>
          </Link>
        </div>

        {/* Smaller Cards Grid */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {cats.map((cat, i) => (
            <div key={i} className="relative rounded-3xl overflow-hidden group h-[290px]">
              <Link to={cat.path}>
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                  <div className="p-2 bg-[#d37a4e] rounded-lg text-white"><ArrowRight size={16} /></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
