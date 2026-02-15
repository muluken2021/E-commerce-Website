import { useState } from "react";
import { ChevronRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";

  const categories = [
    { name: "Electronics & Accessories", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500", path: "/category/electronics" },
    { name: "Beauty & Personal Care", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500", path: "/category/beauty" },
    { name: "Groceries & Daily Essentials", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500", path: "/category/groceries" },
    { name: "Automotive & Motor Accessories", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500", path: "/category/automotive" },
  ];

const ToggleMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    // IMPORTANT → relative parent
    <div className="w-full md:w-64 relative">
      
      {/* Toggle Header */}
      <div
        onClick={() => setOpen(!open)}
        className="bg-gray-300 px-4 py-3 rounded-md flex justify-between items-center font-semibold cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Menu size={18} />
          <span>Categories</span>
        </div>

        <ChevronRight
          size={18}
          className={`transition-transform ${open ? "rotate-90" : ""}`}
        />
      </div>

      {/* Overlay Menu */}
      {open && (
        <aside className="absolute left-0 top-full mt-2 w-full bg-gray-100 rounded-md shadow-lg z-50">
          {categories.map((cat) => (
            
           <div
              key={cat}
              
            >
            <Link to={cat.path}>
             <div  onClick={() => setOpen(!open)} className="flex items-center justify-between px-4 py-4 border-b border-gray-200 hover:bg-white cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-sm font-medium">{cat.name}</span>
                </div>

                <ChevronRight size={14} className="text-gray-400" />
              </div>
            </Link>
            </div>
          ))}
        </aside>
      )}
    </div>
  );
};

export default ToggleMenu;
