import { useState } from "react";
import { Link } from "react-router-dom";
import MenuDesplegable from "./MenuDesplegable";

export default function NavBarButtonServicios({ to, nombre }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative inline-block py-8"
        >
            <Link
                to={to}
                className="
          relative inline-block pb-1 pt-4
          text-white text-xl
          hover:scale-105 transition-transform duration-500
          hover:text-[#004225]
          after:content-[''] after:absolute after:left-0 after:top-0
          after:h-[2px] after:w-full after:bg-[#004225]
          after:origin-center after:scale-x-0 after:transition-transform after:duration-300
          hover:after:scale-x-100
        "
            >
                {nombre}
            </Link>

            <div
                className={`
    fixed left-0 right-0
    w-screen
    z-50
    transition-all duration-200 origin-top
    ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
  `}

            >
                <MenuDesplegable />
            </div>
        </div>
    );
}