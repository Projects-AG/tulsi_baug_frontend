import React, { useState } from "react";

const FilterSidebar = ({ isOpen, onClose }) => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const colors = [
    { name: "Green", code: "#00C12B" },
    { name: "Red", code: "#F50606" },
    { name: "Yellow", code: "#F5DD06" },
    { name: "Orange", code: "#F57906" },
    { name: "Light Blue", code: "#06CAF5" },
    { name: "Blue", code: "#063AF5" },
    { name: "Purple", code: "#7D06F5" },
    { name: "Pink", code: "#F506A4" },
    { name: "White", code: "#FFFFFF" },
    { name: "Black", code: "#000000" },
  ];

  const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];

  const dressStyles = ["Casual", "Formal", "Party", "Gym"];

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:sticky top-0 left-0 h-screen lg:h-auto
        w-72 lg:w-64 bg-white border-r lg:border-r-0 lg:border
        rounded-lg p-6 overflow-y-auto z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-xl font-bold mb-6 text-gray-900">Filters</h3>

        {/* Gender Filter */}
        <div className="mb-6 pb-6 border-b">
          <h4 className="font-semibold text-gray-900 mb-3">Gender</h4>
          <div className="space-y-2">
            {["Men", "Women", "Kids"].map((gender) => (
              <label key={gender} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                <span className="text-gray-700 text-sm">{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6 pb-6 border-b">
          <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="300"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6 pb-6 border-b">
          <h4 className="font-semibold text-gray-900 mb-3">Colors</h4>
          <div className="grid grid-cols-5 gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => toggleColor(color.name)}
                className={`w-9 h-9 rounded-full border-2 transition-all ${
                  selectedColors.includes(color.name)
                    ? "border-gray-900 scale-110"
                    : "border-gray-200"
                } ${color.code === "#FFFFFF" ? "border-gray-300" : ""}`}
                style={{ backgroundColor: color.code }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-6 pb-6 border-b">
          <h4 className="font-semibold text-gray-900 mb-3">Size</h4>
          <div className="grid grid-cols-2 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`px-3 py-2 text-xs rounded-lg border transition-all ${
                  selectedSizes.includes(size)
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Dress Style */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Dress Style</h4>
          <div className="space-y-2">
            {dressStyles.map((style) => (
              <label key={style} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                <span className="text-gray-700 text-sm">{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Apply Filter Button */}
        <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Apply Filters
        </button>
      </div>
    </>
  );
};

export default FilterSidebar;
