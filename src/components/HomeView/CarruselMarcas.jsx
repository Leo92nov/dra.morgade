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
    <div className="mt-8 mb-26 flex items-center justify-center gap-6 px-6">
      <span className="h-px flex-1 bg-[#d8d0bf]" />

        <h2 className="max-w-[75%] text-center font-garamond text-2xl leading-tight text-[#31523a] sm:max-w-none sm:text-3xl">
          Utilizamos solo marcas líderes en su campo
        </h2>

       <span className="h-px flex-1 bg-[#d8d0bf]" />
      </div>


      <section className="w-full max-w-5xl mx-auto mb-12 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out mb-12"
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
