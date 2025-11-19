import React from "react";
import { Link } from "react-router-dom";

/* ----------------------------- NavLinks Component ----------------------------- */
const NavLinks = () => {
  const links = [
    { title: "الرئيسية", path: "/", isSpecial: true },
    { title: "الأفلام", path: "/movies", isSpecial: false },
    { title: "المسلسلات", path: "/series", isSpecial: false },
    { title: "البرامج التلفزيونية", path: "/tv", isSpecial: false },
    { title: "أطفال", path: "/kids", isSpecial: false },
  ];

  return (
    <nav dir="rtl">
      <ul className="flex space-x-8 rtl:space-x-reverse">
        {links.map(({ title, path, isSpecial }) => (
          <li key={title}>
            <Link
              to={path}
              className={`text-base font-medium transition duration-200 ${
                isSpecial
                  ? "font-extrabold text-red-500 hover:text-red-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

/* ---------------------------- NavSection Component ---------------------------- */
const NavSection = () => {
  return (
    <div className="flex items-center space-x-8 rtl:space-x-reverse" dir="rtl">
      <NavLinks />
      <button
        className="
          bg-red-600 hover:bg-red-700
          text-white font-semibold
          py-2 px-5 rounded-full
          text-sm whitespace-nowrap
          transition duration-200 shadow-lg
        "
      >
        عضوية مميزة
      </button>
    </div>
  );
};

export default NavSection;
