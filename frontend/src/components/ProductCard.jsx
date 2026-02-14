import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const { tag, name, price, img } = product;

  return (
    <div className="min-w-[280px] relative rounded-xl p-6 transition-all border border-transparent bg-gray-100 hover:border-[#D37A4E] hover:bg-gray-50 group">
      <span className="text-[10px] font-bold text-gray-400 absolute top-4 left-4">
        25% off
      </span>

      <div className="h-40 flex items-center justify-center mb-6">
        <img
          src={img}
          alt={name}
          className="max-h-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="text-center">
        <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-1">
          {tag}
        </p>

        <h3 className="text-sm font-bold text-gray-800 mb-1">{name}</h3>

        <p className="text-sm font-semibold text-gray-600 mb-4">{price}</p>

        {/* Hover Buttons */}
        <div className="flex items-center gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="bg-[#D37A4E] text-white px-4 py-2 rounded-lg text-xs font-bold"
            onClick={() => onAddToCart(product)}
          >
            Add To Cart
          </button>
          <button className="text-gray-800 text-xs font-bold px-2">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
