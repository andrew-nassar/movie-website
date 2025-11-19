import React from "react";
import { FILM_DATA } from "../../../Data/FilmData";
import FilmCard from "./FilmCard";

const Card = () => {
  return (
    <section className="py-12 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-right px-12 mb-6">الأكثر مشاهدة</h2>

      <div className="flex overflow-x-scroll px-12 space-x-6 rtl:space-x-reverse pb-4 
        [&::-webkit-scrollbar]:h-2 
        [&::-webkit-scrollbar-track]:bg-gray-800 
        [&::-webkit-scrollbar-thumb]:bg-red-600 
        [&::-webkit-scrollbar-thumb]:rounded-full">
        {FILM_DATA.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-right px-12 mb-6">اكتشف المزيد</h2>
        <div className="flex overflow-x-scroll px-12 space-x-6 rtl:space-x-reverse pb-4 
          [&::-webkit-scrollbar]:h-2 
          [&::-webkit-scrollbar-track]:bg-gray-800 
          [&::-webkit-scrollbar-thumb]:bg-red-600 
          [&::-webkit-scrollbar-thumb]:rounded-full">
          {FILM_DATA.map((film) => (
            <FilmCard key={`discover-${film.id}`} film={film} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
