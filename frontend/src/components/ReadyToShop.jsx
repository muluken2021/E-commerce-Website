import React from 'react';

const ReadyToShop = () => {
  return (
    <div className="flex justify-center">
      {/* Call to Action */}
      <div className="max-w-7xl bg-orange-50 rounded-[40px] py-20 text-center mb-24 border border-orange-100 w-full sm:w-3/4 lg:w-2/3">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready To Shop?</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm leading-relaxed px-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et reiciendis at facilis quos mollitia, ratione, quibusdam explicabo quo exercitationem.
        </p>
        <button className="bg-[#d37a4e] text-white px-12 py-4 rounded-2xl font-bold text-lg hover:opacity-90 active:scale-95 transition-all">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ReadyToShop;
