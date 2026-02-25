import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { servicios } from "../../asyncMock.js";

export default function CardMenuDesplegable() {
  // categorías reales para la URL (Facial, Corporal, etc.)
  const categorias = useMemo(
    () => [...new Set(servicios.map((s) => s.servicio))],
    []
  );

  // mapa: servicio -> rama (texto visible)
  const ramaPorServicio = useMemo(() => {
    const map = {};
    for (const s of servicios) {
      if (!map[s.servicio]) map[s.servicio] = s.rama;
    }
    return map;
  }, []);

  const [hoverCat, setHoverCat] = useState(null);
  const [hoverIdx, setHoverIdx] = useState(0);

  // ✅ ahora traemos subservicios CON id
  const subservicios = useMemo(() => {
    if (!hoverCat) return [];

    const items = servicios
      .filter((s) => s.servicio === hoverCat)
      .map((s) => ({ id: s.id, subservicio: s.subservicio }));

    // (opcional) deduplicar por nombre, quedándote con el primero
    const seen = new Set();
    return items.filter((it) => {
      if (seen.has(it.subservicio)) return false;
      seen.add(it.subservicio);
      return true;
    });
  }, [hoverCat]);

  const ITEM_H = 40;

  return (
    <div className="absolute left-0 top-full" onMouseLeave={() => setHoverCat(null)}>
      <div className="relative w-56 bg-white/90 backdrop-blur-lg border border-white/30 shadow-lg rounded-xl p-2">
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
            {/* Lista de categorías: va a /Servicios/:categoria */}
            <Link to={`/Servicios/${cat}`} className="block">
              {ramaPorServicio[cat] ?? cat}
            </Link>
          </div>
        ))}

        {hoverCat && (
          <div
            className="absolute left-full w-72 bg-white/90 backdrop-blur-lg border border-white/30 shadow-lg rounded-xl p-2"
            style={{ top: hoverIdx * ITEM_H }}
          >
            <ul className="flex flex-col">
              {subservicios.map(({ id, subservicio }) => (
                <li
                  key={id}
                  className="hover:text-[#7B5D69] hover:scale-105 transition-transform duration-200 w-full"
                >
                  {/* ✅ Detalle: /Servicios/:categoria/:servid */}
                  <Link
                    to={`/Servicios/${hoverCat}/${id}`}
                    className="block px-3 2xl:py-1 py-2 rounded-lg transition-colors font-garamond"
                  >
                    {subservicio}
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