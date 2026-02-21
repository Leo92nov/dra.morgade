import { Link } from "react-router-dom";
import { servicios } from "../../asyncMock.js";

export default function CardMenuDesplegable({ to }) {
  const categorias = [...new Set(servicios.map((s) => s.servicio))];

  return (
    <div className="w-[20%] flex flex-col items-center justify-center">
      {categorias.map((cat) => (
        <Link key={cat} to={to} className="group flex flex-col items-center gap-3 w-full">
          <h2 className="text-xl text-center transition-colors duration-300 group-hover:text-[#004225]">
            {cat}
          </h2>
        </Link>
      ))}
    </div>
  );
}