import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // ✅ import framer-motion

const slides = [

  {
    title: "Fashion Week",
    text: "black",
    desc: "Up to 50% off on Nike, Adidas, and premium summer collections.",
    bg: "bg-brand-500",
    path: "fashion",
    img: assets.hero_fashion2,
    discount: "10% Off",
  },
  {
    title: "Premium Tech",
    text: "white",
    desc: "Upgrade your lifestyle with the latest iPhone 14 and M2 MacBooks.",
    bg: "bg-gray-200",
    path: "electronics",
    img: assets.P_p1,
    discount: "20% Off",
  },
  {
    title: "Beauty & Care",
    text: "black",
    desc: "Premium skincare and beauty products at unbeatable prices.",
    bg: "bg-brand-400",
    path: "beauty",
    img: assets.hero_beauty,
    discount: "15% Off",
  },
  {
    title: "Groceries & Daily Essentials",
    text: "white",
    desc: "Fresh groceries and daily essentials delivered to your doorstep.",
    bg: "bg-gray-200",
    path: "groceries",
    img: assets.hero_grocery,
    discount: "25% Off",
  },
  {
    title: "Automotive Essentials",
    text: "black",
    desc: "Top-quality car accessories and tools for your vehicle.",
    bg: "bg-brand-500",
    path: "automotive",
    img: assets.hero_automotivi,
    discount: "30% Off",
  },
];




const Hero = () => {
  const [current, setCurrent] = useState(0);
  const totalPages = Math.ceil(slides.length / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="md:mx-10 px-4 pt-0">
      {/* --- Hero Section --- */}
      <div className="relative overflow-hidden rounded-2xl min-h-[250px] mb-5">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}       // ✅ initial motion
              animate={{ opacity: 1, y: 0 }}        // ✅ animate only on mount
              transition={{ duration: 0.6, delay: index * 0.2 }} // staggered effect
              className={`min-w-1/2 m-2 rounded-2xl flex items-center ${slide.bg} relative overflow-hidden h-[330px] border border-gray-100 shadow-sm ${
                index % 2 !== 0 ? "text-gray-700" : "text-white"
              }`}
            >
              <div className="p-10 z-10 w-3/5">
                <h2 className="text-2xl font-bold mb-4 tracking-tight">
                  {slide.discount || ""}
                </h2>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-base mb-8 max-w-sm">{slide.desc}</p>

                <Link to={`/category/${slide.path}`}>
                  <button
                    className={`cursor-pointer px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:translate-y-[-2px] ${
                      index % 2 !== 0
                        ? "bg-brand-500 text-gray-100"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>

              <div className=" right-10 bottom-0">
                <img src={slide.img} alt={slide.title} className="h-85 w-auto" />
                <div className="absolute inset-0 bg-gradient-to-r from-inherit via-transparent to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Slider Dots --- */}
      <div className="flex justify-center gap-2 mb-10">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer transition-all rounded-full ${
              current === index
                ? "w-8 h-2.5 bg-orange-400"
                : "w-2.5 h-2.5 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
