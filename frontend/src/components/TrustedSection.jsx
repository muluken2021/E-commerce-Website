import React from 'react'

const TrustedSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4  pt-20">
      {/* Trust Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-4">Trusted by many companies</h2>
          <p className="text-gray-500 max-w-lg mb-10 text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et reiciendis at facilis quos mollitia, ratione, quibusdam explicabo quo exercitationem.</p>
          <div className="flex flex-wrap gap-8 justify-between opacity-30 grayscale">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="w-20 h-20 bg-gray-400 rounded-full"></div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default TrustedSection
