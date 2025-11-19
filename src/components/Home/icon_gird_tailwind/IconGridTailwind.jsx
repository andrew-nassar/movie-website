import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIconGrid } from "./useIconGrid";
import { VIDEO_DATA } from "../../../Data/VideoData";

const IconGridTailwind = ({ onVideoSelect }) => {
  const { scrollRef, canScrollLeft, canScrollRight, scroll } = useIconGrid();

  return (
    <>
    <div className="relative group w-full rounded-xl p-6 bg-gradient-to-b from-gray-800 to-gray-900">
      {/* 🔥 Title */}
      {/* Scroll Buttons */}
      
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Movie Icons */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 p-2 justify-center items-center no-scrollbar"
      >
        {VIDEO_DATA.map((movie, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => onVideoSelect(movie)} // 👈 send selected movie to parent
            className="relative w-52 h-40 rounded-xl overflow-hidden group/item shrink-0 shadow-md cursor-pointer"
          >
            <img
              src={movie.img}
              alt={movie.text}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>

            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{
                opacity: 1,
                scale: movie.animation?.scale ?? 1,
                y: movie.animation?.y ?? 0,
                rotate: movie.animation?.rotate ?? 0,
              }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 flex items-center justify-center text-center ${movie.style} opacity-0 group-hover/item:opacity-100`}
            >
              {movie.text}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
    </>
  );
};

export default IconGridTailwind;
