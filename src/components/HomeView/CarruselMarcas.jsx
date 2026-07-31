import { useEffect, useMemo, useState } from "react";

export default function CarruselMarcas() {
  const total = 18;
  const visibles = 3;
  const totalSlides = Math.ceil(total / visibles);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const logos = useMemo(() => [...Array(total)].map((_, i) => i + 1), [total]);

  const slides = useMemo(() => {
    return Array.from({ length: totalSlides }, (_, slideIndex) => {
      const start = slideIndex * visibles;
      const chunk = logos.slice(start, start + visibles);

      if (chunk.length < visibles) {
        chunk.push(...logos.slice(0, visibles - chunk.length));
      }

      return chunk;
    });
  }, [logos, totalSlides]);

  return (
    <>
    <div className="mt-16 mb-10 flex items-center justify-center gap-6 px-6">
  <span className="h-px flex-1 bg-[#d8d0bf]" />

  <h2 className="shrink-0 text-center text-3xl font-garamond text-[#31523a]">
    Utilizamos solo marcas líderes en su campo
  </h2>

  <span className="h-px flex-1 bg-[#d8d0bf]" />
</div>


      <section className="w-full max-w-5xl mx-auto my-12 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full shrink-0 flex justify-center items-center"
            >
              {slide.map((n) => (
                <div
                  key={`${slideIndex}-${n}`}
                  className="w-1/3 flex justify-center items-center"
                >
                  <img
                    src={`/carrusel-marcas/${n}.webp`}
                    className="h-20 object-contain"
                    alt=""
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
