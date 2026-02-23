import { Link } from "react-router-dom";

export default function NavBarButton({ to, nombre}) {
  return (
    <Link
      to={to}
      className={`
        relative inline-block pb-1 pt-4 text-xl ]
        transition-transform duration-500 hover:scale-105 hover:text-[#7B5D69]
        }
        
        after:content-[''] after:absolute after:left-0 after:top-0
        after:h-[2px] after:w-full after:bg-[#7B5D69] font-garamond
        after:origin-center after:scale-x-0 after:transition-transform after:duration-300
        hover:after:scale-x-100
      `}
    >
      {nombre}
    </Link>
  );
}