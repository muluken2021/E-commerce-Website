import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import ToggleMenu from "./ToggleMenu";

// --- Slides Data ---
const slides = [
  {
    title: "Summer Collection",
    desc: "Explore the best trends of the season.",
    bg: "bg-yellow-400",
    image:
      "https://images.unsplash.com/photo-1529139513055-07f9f2471550?w=500",
  },
  {
    title: "Spring Collection",
    desc:
      "Save up to 50% on summer essentials including sweater, dress, sandal and accessories.",
    bg: "bg-blue-50",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500",
  },
  {
    title: "Winter Collection",
    desc: "Stay warm with premium winter fashion.",
    bg: "bg-purple-200",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500",
  },
  {
    title: "Winter Collection",
    desc: "Stay warm with premium winter fashion.",
    bg: "bg-purple-200",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500",
  },
    {
    title: "Winter Collection",
    desc: "Stay warm with premium winter fashion.",
    bg: "bg-purple-200",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500",
  },
    {
    title: "Winter Collection",
    desc: "Stay warm with premium winter fashion.",
    bg: "bg-purple-200",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500",
  },

  
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // number of pages (2 cards each)
    const totalPages = Math.ceil(slides.length / 2);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
    }, [totalPages]);


  return (
    <div className="md:mx-10 px-4 pt-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <ToggleMenu />

        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Searching for ...."
            className="w-full bg-gray-200 py-3 px-4 rounded-md outline-none focus:ring-1 ring-orange-400"
          />
          <Search
            className="absolute right-4 top-3.5 text-gray-400"
            size={20}
          />
        </div>
      </div>

      {/* --- Hero Section --- */}
      <div className="relative overflow-hidden rounded-2xl min-h-[250px] mb-12">
        <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
        >
        {slides.map((slide, index) => (
        <div
            key={index}
            className={`min-w-1/2 m-2 rounded-lg  items-center ${slide.bg} relative`}
        >
              <div className="p-8  z-10 w-1/2">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-sm opacity-80 mb-6">{slide.desc}</p>

                <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold">
                  Shop Now
                </button>
              </div>

              <img
                src={slide.image}
                alt={slide.title}
                className="absolute rounded-lg right-0 bottom-0 h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- Slider Dots --- */}
      <div className="flex justify-center gap-2 mb-12">
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
