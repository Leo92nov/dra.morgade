import { Link } from "react-router-dom";

export default function CardMenuDesplegable({ to, img, titulo }) {
  return (
    <div className="w-[20%] flex flex-col items-center justify-center">
      <Link to={to} className="group flex flex-col items-center gap-3 w-full">

        <div className="w-full h-48 overflow-hidden rounded-xl">
          <img
            className="
              w-full h-full object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-110
            "
            src={img}
            alt={titulo}
          />
        </div>

        <h2 className="text-xl text-center transition-colors duration-300 group-hover:text-[#004225]">
          {titulo}
        </h2>

      </Link>
    </div>
  );
}
