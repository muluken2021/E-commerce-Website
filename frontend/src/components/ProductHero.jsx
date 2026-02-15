import React, { useState } from "react";

const ProductHero = ({product}) => {
  const images = [
    "https://jblstore.com.ph/cdn/shop/files/JBLQuantum100_600x.png?v=1757250762",
    "https://raphasgear.com/cdn/shop/products/JBLQuantum100_1.png?v=1676872403",
    "https://m.media-amazon.com/images/I/61qdaKo1jtL._AC_UF350,350_QL80_.jpg",
    "https://www.retravision.com.au/img/containers/products/e/8/JBL_Quantum_100M2_Product_Image_Angle_Purple-e82a415ab7ee82d51e79e5b3d06d5640.jpg/86e68bab14511d96cd1763687c73a6a4/JBL_Quantum_100M2_Product_Image_Angle_Purple-e82a415ab7ee82d51e79e5b3d06d5640.jpg"
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <main className="mx-12 grid grid-cols-1 gap-12 rounded-xl bg-[#eeeeee] p-12 lg:grid-cols-2">
      
      {/* Image Gallery */}
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src={mainImage}
          alt="Main Headphone"
          className="max-w-md mix-blend-multiply"
        />
        <div className="flex gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setMainImage(img)}
              className={`h-20 w-20 rounded-xl border-2 p-2 cursor-pointer ${
                mainImage === img ? "border-orange-400" : "border-gray-300"
              } bg-white`}
            >
              <img src={img} alt={`thumb-${index}`} className="h-full w-full object-contain mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="mt-1 text-sm text-gray-500 font-medium">Category : {product.category}</p>
        
        <div className="mt-4 flex items-baseline gap-4">
          <span className="text-3xl font-bold">{product.price} Birr</span>
          <span className="text-xl text-gray-400 line-through">{product.discount}</span>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et reiciendis at facilis quos mollitia, 
          ratione, quibusdam explicabo quo exercitationem, iusto voluptatibus. Illum perferendis dolorum.
        </p>

        {/* Options */}
        <div className="mt-8">
          <h3 className="font-bold">Option</h3>
          <div className="mt-3 flex gap-3">
            {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((opt) => (
              <button 
                key={opt}
                onClick={() => setSelectedOption(opt)}
                className={`rounded border px-4 py-1 text-xs transition-colors ${
                  selectedOption === opt ? 'border-orange-500 text-orange-500' : 'border-gray-400 text-gray-600'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Add to Cart */}
        <button className="mt-8 w-fit rounded-lg bg-[#e88154] px-12 py-3 font-bold text-white transition-transform active:scale-95">
          Add To Cart
        </button>
      </div>
    </main>
  );
};

export default ProductHero;
