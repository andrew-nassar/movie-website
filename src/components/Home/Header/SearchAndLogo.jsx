import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SearchAndLogo = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex items-center space-x-6">
      {/* Logo */}
      <div
        className="text-xl font-black tracking-wider text-red-500 hover:text-red-400 cursor-pointer"
        onClick={() => setShowSearch(false)}
      >
        ANDREW-CUBE
      </div>

      {/* Search Section */}
      <div className="flex items-center">
        {/* Search Icon */}
        <button
          onClick={() => setShowSearch((prev) => !prev)}
          className="text-xl text-gray-400 hover:text-white transition"
        >
          🔍
        </button>

        {/* Animated Search Input */}
        <AnimatePresence>
          {showSearch && (
            <motion.input
              key="searchInput"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 180, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              type="text"
              placeholder="ابحث عن فيلم..."
              className="
                ml-2 px-3 py-1 rounded-md 
                bg-gray-800 text-white text-sm 
                outline-none border border-gray-600 
                focus:border-red-500 transition-all
              "
              autoFocus
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchAndLogo;
