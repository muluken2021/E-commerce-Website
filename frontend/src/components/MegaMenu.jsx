import React from 'react';
import { ChevronRight } from 'lucide-react';

const MegaMenu = () => {
  const categories = [
    {
      title: "Other Machinery & Parts",
      links: [
        "Metallic Processing Machinery", "Machinery for Food, Beverage & Cereal",
        "Laser Equipment", "Mould", "Textile Machinery & Parts",
        "Cutting & Fold-bend Machine", "Paper Machinery", "Rubber Machinery",
        "Chemical Equipment & Machinery", "Mixing Equipment",
        "Machinery for Garment, Shoes & Accessories", "Crushing & Culling Machine"
      ]
    },
    {
      title: "Plastic & Woodworking",
      links: [
        "Plastic Machinery", "Woodworking Machinery", "Blow Molding Machine",
        "Plastic Recycling Machine", "Injection Molding Machine"
      ],
      extraSection: {
        title: "Machine Tools",
        links: ["CNC Machine Tools", "Lathe", "Grinding Machine", "Drilling Machine", "Milling Machine"]
      }
    },
    {
      title: "Construction Machinery",
      links: [
        "Building Material Making Machinery", "Lifting Equipment",
        "Excavator", "Concrete Machinery", "Stone Processing Machinery"
      ]
    },
    {
      title: "Agriculture Machinery",
      links: [
        "Agriculture Machinery", "Livestock MachineryFeed",
        "Feed Processing Machinery", "Tiller", "Harvesting Machine"
      ]
    }
  ];

  const hotProducts = ["Paper Cup", "Lotion Pump", "Brush Cutter", "Display Rack", "Glass Bottle"];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-100 overflow-hidden font-sans">
      <div className="p-10">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <div>
                <h3 className="text-gray-900 font-bold text-lg mb-4">{cat.title}</h3>
                <ul className="space-y-2.5">
                  {cat.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-[15px] leading-tight block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Renders secondary sections like "Machine Tools" */}
              {cat.extraSection && (
                <div className="pt-4">
                  <h3 className="text-gray-900 font-bold text-lg mb-4">{cat.extraSection.title}</h3>
                  <ul className="space-y-2.5">
                    {cat.extraSection.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-[15px] block">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More Categories Link */}
        <div className="mt-10">
          <a href="#" className="inline-flex items-center text-gray-900 font-bold hover:text-orange-600 transition-colors group">
            More categories 
            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Footer Hot Products Section */}
      <div className="bg-gray-50/80 px-10 py-5 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          <span className="font-bold text-gray-900 mr-2">Hot products:</span>
          {hotProducts.map((product, i) => (
            <span key={i}>
              <a href="#" className="hover:text-orange-500 transition-colors">{product}</a>
              {i < hotProducts.length - 1 && <span className="mx-1">,</span>}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MegaMenu;