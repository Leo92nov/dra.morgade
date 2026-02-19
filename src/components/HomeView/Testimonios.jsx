import { useEffect, useRef, useState } from "react";

function TestimonioCard({ tratamiento, paciente, devolucion }) {
  return (
    <article className="w-full h-full">
      <section className="
        relative
        bg-white
        rounded-3xl
        p-8
        h-full
        border border-gray-100
        shadow-[0_15px_35px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]
      ">
        
        {/* línea decorativa superior izquierda */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-[#004225] rounded-tr-full"></div>

        {/* Comillas */}
        <span className="absolute top-2 left-8 text-7xl text-[#004225]/10 font-serif">
          “
        </span>

        <div className="relative z-10">
          <h2 className="text-[#004225] font-semibold text-lg mb-1">
            {tratamiento}
          </h2>

          <h3 className="mb-2 text-yellow-400 text-sm">★★★★★</h3>

          <h3 className="text-sm text-gray-500 mb-4">
            {paciente}
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            {devolucion}
          </p>
        </div>

        <div className="mt-6 h-[2px] w-12 bg-[#004225] rounded-full" />
      </section>
    </article>
  );
}

export default function Testimonios({ items = [], intervalMs = 4500 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(3);
  const timerRef = useRef(null);

  const total = items.length;

  // Responsive slides per view
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 768) return 1;      // mobile
      if (w < 1280) return 2;     // tablet / laptop
      return 3;                   // desktop
    };

    const update = () => setPerView(calc());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // mantener index válido cuando cambia perView
  useEffect(() => {
    if (!total) return;
    const maxIndex = Math.max(0, total - perView);
    if (index > maxIndex) setIndex(maxIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView, total]);

  const maxIndex = Math.max(0, total - perView);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  // Autoplay
  useEffect(() => {
    if (!total) return;

    if (timerRef.current) clearInterval(timerRef.current);
    if (!paused && total > perView) {
      timerRef.current = setInterval(next, intervalMs);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, total, perView, intervalMs, maxIndex]);

  if (!total) return null;

  const slideWidthPct = 100 / perView;

  return (
    <section
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="w-[90%] xl:w-[85%] mx-auto">
        <div className="relative overflow-hidden py-12">
          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * slideWidthPct}%)` }}
          >
            {items.map((t, i) => (
              <div
                key={i}
                className="flex-none px-4"
                style={{ width: `${slideWidthPct}%` }}
              >
                <TestimonioCard {...t} />
              </div>
            ))}
          </div>

          {/* Flechas (solo si tiene sentido) */}
          {total > perView && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 border border-gray-200 shadow-sm rounded-full w-10 h-10 grid place-items-center hover:bg-white"
                aria-label="Anterior"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 border border-gray-200 shadow-sm rounded-full w-10 h-10 grid place-items-center hover:bg-white"
                aria-label="Siguiente"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Dots (por “páginas”) */}
        {total > perView && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-[#004225]" : "w-2 bg-gray-300"
                }`}
                aria-label={`Ir al grupo ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
