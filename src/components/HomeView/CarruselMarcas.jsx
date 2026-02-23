import { useEffect, useMemo, useState } from "react";

export default function CarruselMarcas() {
  const total = 22;
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
      <h2 className="text-center mt-8 2xl:mt-20 text-3xl bg-pink-100 font-garamond">
        Utilizamos solo marcas líderes en su campo
      </h2>

      <section className="w-full max-w-5xl mx-auto my-8 overflow-hidden">
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
                    src={`/carrusel-marcas/${n}.png`}
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
