import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { servicios } from "../../asyncMock.js";

export default function CardMenuDesplegable() {
  const categorias = useMemo(
    () => [...new Set(servicios.map((s) => s.servicio))],
    []
  );

  const [hoverCat, setHoverCat] = useState(null);
  const [hoverIdx, setHoverIdx] = useState(0);

  const subservicios = useMemo(() => {
    if (!hoverCat) return [];
    return [
      ...new Set(
        servicios
          .filter((s) => s.servicio === hoverCat)
          .map((s) => s.subservicio)
      ),
    ];
  }, [hoverCat]);

  // ⚙️ Ajustá este valor si cambiás el padding/tamaño de la fila
  const ITEM_H = 40; // px aprox. (py-2 + font + line-height)

  return (
    <div className="absolute left-0 top-full" onMouseLeave={() => setHoverCat(null)}>
      <div className="relative w-48 bg-white/90 backdrop-blur-lg border border-white/30 shadow-lg rounded-xl p-2">
        {categorias.map((cat, idx) => (
          <div
            key={cat}
            onMouseEnter={() => {
              setHoverCat(cat);
              setHoverIdx(idx);
            }}
            className={`px-3 py-2 rounded-lg cursor-pointer transition-colors font-garamond
              ${hoverCat === cat ? "bg-[#7B5D69]/10 text-black" : "hover:bg-black/5"}
            `}
          >
            <Link to={`/Servicios/${cat}`}>{cat}</Link>
          </div>
        ))}

        {/* Panel subcategorías: top alineado al item hovereado */}
        {hoverCat && (
          <div
            className="absolute left-full w-72 bg-white/90 backdrop-blur-lg border border-white/30 shadow-lg rounded-xl p-2"
            style={{ top: hoverIdx * ITEM_H }}
          >

            <ul className="flex flex-col">
              {subservicios.map((sub) => (
                <li className="hover:text-[#7B5D69] hover:scale-105 transition-transform duration-200 w-[100%]" key={sub}>
                  <Link
                    to={`/Servicios/${hoverCat}`}
                    state={{ keyword: sub }}
                    className="block px-3 2xl:py-1 py-2 rounded-lg transition-colors font-garamond"
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
