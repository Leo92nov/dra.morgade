import { useEffect, useMemo, useRef, useState } from "react";
import BeforeAfter from "./BeforeAfter";

export default function CarruselAntesDespues() {
  const [page, setPage] = useState(0);
  const intervalRef = useRef(null);

  const items = [
    { antes: "/antes-despues/antes-frente.jpeg", despues: "/antes-despues/despues-frente.jpeg" },
    { antes: "/antes-despues/culo-antes.jpeg", despues: "/antes-despues/culo-despues.jpeg" },
    { antes: "/antes-despues/labios-antes.png", despues: "/antes-despues/labios-despues.png" },
    { antes: "/antes-despues/gallo-antes.png", despues: "/antes-despues/gallo-despues.png" },
    { antes: "/antes-despues/alopecia-antes.png", despues: "/antes-despues/alopecia-despues.png" },
    { antes: "/antes-despues/b-antes.png", despues: "/antes-despues/b-despues.png" },
    { antes: "/antes-despues/g-antes.jpeg", despues: "/antes-despues/g-despues.jpeg" },
    { antes: "/antes-despues/l-antes.jpeg", despues: "/antes-despues/l-despues.jpeg" },
    { antes: "/antes-despues/f-antes.jpeg", despues: "/antes-despues/f-despues.png" },
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
    <section className="w-[full] flex justify-center mt-16">
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
