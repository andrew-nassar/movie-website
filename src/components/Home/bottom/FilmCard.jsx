import React from "react";

const FilmCard = ({ film }) => (
  <div
    className="relative flex-none w-52 h-72 rounded-lg overflow-hidden bg-gray-800 shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
    role="article"
    aria-label={film.title}
  >
    <img
      src={film.url}
      alt={film.title}
      className="w-full h-full object-cover"
    />

    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
      Top {film.rank}
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
      <h3 className="text-white text-md font-semibold text-right">
        {film.title}
      </h3>
    </div>
  </div>
);

export default FilmCard;
