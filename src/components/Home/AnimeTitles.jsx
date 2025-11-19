import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IconGridTailwind = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount =
      direction === "left" ? -clientWidth / 1.2 : clientWidth / 1.2;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const movies = [
    {
      text: "كوكو",
      img: "brother.webp",
      style:
        "text-red-500 uppercase font-extrabold text-3xl tracking-wider drop-shadow-[0_0_6px_rgba(255,0,0,0.6)]",
      animation: { scale: 1.2, rotate: 0 },
    },
    {
      text: "الشقيقان • رحلة خيالية",
      img: "brother.webp",
      style:
        "text-white font-bold text-2xl tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]",
      animation: { y: -10, opacity: 1 },
    },
    {
      text: "رايا التنين الأخضر",
      img: "brother.webp",
      style:
        "text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-700 font-extrabold text-3xl",
      animation: { scale: 1.1 },
    },
    {
      text: "الفسحة • العطلة الصيفية",
      img: "brother.webp",
      style:
        "text-orange-300 italic font-bold text-2xl drop-shadow-[0_0_8px_rgba(255,180,0,0.7)]",
      animation: { y: -8 },
    },
    {
      text: "Superpets",
      img: "brother.webp",
      style:
        "text-red-500 uppercase font-extrabold text-3xl tracking-wider drop-shadow-[0_0_6px_rgba(255,0,0,0.6)]",
      animation: { scale: 1.15 },
    },
    {
      text: "جامعة المرعبين",
      img: "brother.webp",
      style:
        "text-blue-400 font-extrabold text-2xl drop-shadow-[0_0_6px_rgba(0,150,255,0.6)]",
      animation: { rotate: 1 },
    },
  ];

  return (
    <div className="relative group w-full rounded-xl p-6 bg-gradient-to-b from-gray-800 to-gray-900">
      {/* Left Scroll Button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Right Scroll Button */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 p-2 justify-center items-center no-scrollbar"
      >
        {movies.map((movie, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-52 h-40 rounded-xl overflow-hidden group/item shrink-0 shadow-md"
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
                scale: movie.animation.scale ?? 1,
                y: movie.animation.y ?? 0,
                rotate: movie.animation.rotate ?? 0,
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
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default IconGridTailwind;
