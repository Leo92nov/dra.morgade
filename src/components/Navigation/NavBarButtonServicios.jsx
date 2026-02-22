import { useState } from "react";
import { Link } from "react-router-dom";
import MenuDesplegable from "./MenuDesplegable";

export default function NavBarButtonServicios({ to, nombre, darkText }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative inline-block"
    >
      <Link
        to={to}
        className={`
        relative inline-block pb-1 pt-4 text-xl 
        transition-transform duration-500 hover:scale-105 hover:text-[#7B5D69]
        ${darkText ? "text-black" : "text-[black]"}
        
        after:content-[''] after:absolute after:left-0 after:top-0
        after:h-[2px] after:w-full after:bg-[#7B5D69] font-garamond
        after:origin-center after:scale-x-0 after:transition-transform after:duration-300
        hover:after:scale-x-100
      `}
      >
        {nombre}
      </Link>

      {/* Dropdown full-width */}
      <div
        className={`
          fixed top-[75px]
          z-50 
          transition-all duration-400 origin-top
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <MenuDesplegable />
      </div>
    </div>
  );
}
