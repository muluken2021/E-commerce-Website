const BrandFilter = ({ brands, selectedBrand, setSelectedBrand }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Brands</h3>

      <ul className="space-y-3">
        {brands.length === 0 && (
          <p className="text-gray-400 text-sm">Select category first</p>
        )}

       {brands.map((brand) => (
        <li
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className="cursor-pointer flex items-center gap-2"
        >
            <span
             className={`px-2 py-2 rounded-full border 
                ${
                selectedBrand === brand
                    ? "bg-orange-500 border-orange-500"
                    : "border-gray-500"
                }`}
            ></span>

            <span
            className={`${
                selectedBrand === brand
                ? "text-orange-500 font-bold"
                : "text-gray-600"
            }`}
            >
            {brand}
            </span>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
