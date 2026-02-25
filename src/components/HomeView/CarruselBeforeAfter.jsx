import { useEffect, useMemo, useRef, useState } from "react";
import BeforeAfter from "./BeforeAfter";

export default function CarruselAntesDespues() {
  const [page, setPage] = useState(0);
  const intervalRef = useRef(null);

  const items = [
    { antes: "/antes-despues/antes-frente.webp", despues: "/antes-despues/despues-frente.webp" },
    { antes: "/antes-despues/culo-antes.webp", despues: "/antes-despues/culo-despues.webp" },
    { antes: "/antes-despues/labios-antes.webp", despues: "/antes-despues/labios-despues.webp" },
    { antes: "/antes-despues/gallo-antes.webp", despues: "/antes-despues/gallo-despues.webp" },
    { antes: "/antes-despues/alopecia-antes.webp", despues: "/antes-despues/alopecia-despues.webp" },
    { antes: "/antes-despues/b-antes.webp", despues: "/antes-despues/b-despues.webp" },
    { antes: "/antes-despues/g-antes.webp", despues: "/antes-despues/g-despues.webp" },
    { antes: "/antes-despues/l-antes.webp", despues: "/antes-despues/l-despues.webp" },
    { antes: "/antes-despues/f-antes.webp", despues: "/antes-despues/f-despues.webp" },
  ];

  // Páginas de 3 (para desktop)
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < items.length; i += 3) out.push(items.slice(i, i + 3));
    return out;
  }, [items]);

  const totalPages = pages.length;

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const start = () => {
    stop();
    intervalRef.current = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 4000);
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  return (
    <section className="w-[full] flex justify-center mt-8 py-8">
      <div
        className="w-[90%] overflow-hidden"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((group, idx) => (
            <div key={idx} className="min-w-full">
              {/* Desktop: 3 visibles */}
              <div className="hidden lg:flex gap-8 justify-center">
                {group.map((it, i) => (
                  <div key={i} className="w-1/3">
                    <BeforeAfter antes={it.antes} despues={it.despues} />
                  </div>
                ))}
              </div>

              {/* Mobile/Tablet: opcional (1 por vez) */}
              <div className="lg:hidden flex justify-center">
                {/* en mobile mostramos solo el primero del grupo */}
                <div className="w-full max-w-[350px]">
                  <BeforeAfter antes={group[0]?.antes} despues={group[0]?.despues} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
