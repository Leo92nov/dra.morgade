import { useEffect, useRef, useState } from "react";
import Listones from "./Listones";

export default function Dra() {
  const sectionRef = useRef(null);

  const [active, setActive] = useState(false);
  const [showListones, setShowListones] = useState(false);

  const sliderRef = useRef(null);
  const [slideIdx, setSlideIdx] = useState(0);

  const listonesData = [
    {
      titulo: "Calidad Asegurada",
      img: "/listones/seguridad.webp",
      parrafo:
        "Trabajamos con protocolos estrictos respaldados, tecnología certificada y productos reconocidos a nivel internacional.",
    },
    {
      titulo: "Clínica de excelencia",
      img: "/listones/cc.webp",
      parrafo:
        "Nuestras instalaciones fueron diseñadas con ambientes luminosos y confortables que garantizan una atención de primer nivel.",
    },
    {
      titulo: "Productos premium",
      img: "/listones/crema.webp",
      parrafo:
        "Nuestros productos tópicos son seleccionados bajo estrictos estándares de excelencia y adaptados a cada tratamiento.",
    },
    {
      titulo: "Protocolos certificados",
      img: "/listones/rrhh.webp",
      parrafo:
        "El compromiso profesional y la atención personalizada se reflejan en cada detalle, ofreciendo una experiencia de máxima calidad.",
    },
  ];

  // Activa la aparición de los listones cuando la sección entra en pantalla
  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -40% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Espera brevemente antes de mostrar los listones
  useEffect(() => {
    if (!active) return;

    const timeout = setTimeout(() => {
      setShowListones(true);
    }, 400);

    return () => clearTimeout(timeout);
  }, [active]);

  // Autoplay del slider en mobile, tablet y 1024 px
  useEffect(() => {
    if (!showListones) return;

    const interval = setInterval(() => {
      setSlideIdx((currentIndex) => {
        return (currentIndex + 1) % listonesData.length;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [showListones, listonesData.length]);

  // Mueve el slider al elemento seleccionado
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const item = slider.children?.[slideIdx];

    if (!item) return;

    slider.scrollTo({
      left: item.offsetLeft,
      behavior: "smooth",
    });
  }, [slideIdx]);

  return (
    <section
      ref={sectionRef}
      className="
        relative my-14 w-full
        overflow-visible
      "
    >
      {/* ================================================= */}
      {/* FONDO EXCLUSIVO PARA DESKTOP DESDE 1280 PX */}
      {/* ================================================= */}

      <div
        className="
          absolute inset-x-0 bottom-0
          hidden h-[76%]
          overflow-hidden
          bg-gradient-to-br
          from-[#eef3ec]
          via-[#fbfaf6]
          to-[#e7dfd1]
          xl:block
        "
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute -left-32 -top-20
              h-80 w-80
              rounded-full
              bg-[#27532f]/10
              blur-3xl
            "
          />

          <div
            className="
              absolute -bottom-28 right-0
              h-80 w-80
              rounded-full
              bg-[#d8d0bf]/60
              blur-3xl
            "
          />
        </div>
      </div>

      {/* ================================================= */}
      {/* MOBILE / TABLET / 1024 PX - HASTA 1279 PX */}
      {/* ================================================= */}

      <div className="xl:hidden">
        {/* IMAGEN PRINCIPAL TC.PNG */}

        <div className="w-full overflow-hidden">
          <img
            src="/listones/TC.webp"
            alt="Dra. Verónica Morgade"
            className="
              block h-auto w-full
              object-cover object-center
            "
          />
        </div>

        {/* SLIDER DEBAJO DE LA IMAGEN */}

        <div className={["relative mt-8 w-full transition-all duration-700",
            showListones
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
          ].join(" ")}
        >
          <div
            ref={sliderRef}
            className="
              hide-scrollbar
              flex w-full
              snap-x snap-mandatory
              overflow-x-auto
              scroll-smooth
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            {listonesData.map((item) => (
              <div
                key={item.titulo}
                className="
                  flex w-[95%] sm:w-full
                  shrink-0 snap-center
                  items-center justify-center
                  px-5 
                  sm:px-8
                "
              >
                <div
                  className="
                    w-full max-w-[400px] 
                    rounded-2xl
                    border border-[#d8d0bf]
                    bg-white
                    p-5
                    shadow-lg
                  "
                >
                  <Listones
                    titulo={item.titulo}
                    img={item.img}
                    parrafo={item.parrafo}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* INDICADORES */}

          <div className="mt-5 flex justify-center gap-2">
            {listonesData.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSlideIdx(index)}
                className={[
                  "h-2 rounded-full transition-all duration-300",
                  index === slideIdx
                    ? "w-6 bg-[#27532f]"
                    : "w-2 bg-gray-300",
                ].join(" ")}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>

      {/* ================================================= */}
      {/* DESKTOP DESDE 1280 PX */}
      {/* ================================================= */}

      <div
        className="
          relative z-10 mx-auto
          hidden w-full max-w-6xl
          px-8
          xl:block
        "
      >
        <div
          className="
            relative
            min-h-[520px]
            2xl:min-h-[560px]
          "
        >
          <div
            className="
              flex min-h-[520px]
              items-end justify-between
              gap-8
              2xl:min-h-[560px]
              2xl:gap-12
            "
          >
            {/* LISTONES DENTRO DEL GRADIENTE */}

            <div
              className={[
                `
                  grid w-[58%] grid-cols-2

                  self-stretch
                  content-end
                  items-end

                  gap-x-4
                  gap-y-3

                  pb-8
                  pt-[150px]

                  transition-all
                  duration-700

                  2xl:w-[60%]
                  2xl:gap-x-6
                  2xl:gap-y-4
                  2xl:pb-10
                  2xl:pt-[160px]
                `,
                showListones
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0",
              ].join(" ")}
            >
              {listonesData.map((item) => (
                <div
                  key={item.titulo}
                  className="
                    flex min-w-0
                    origin-bottom
                    items-end justify-center

                    scale-[0.72]
                    2xl:scale-[0.82]
                  "
                >
                  <Listones
                    titulo={item.titulo}
                    img={item.img}
                    parrafo={item.parrafo}
                  />
                </div>
              ))}
            </div>

            {/* DOCTORA: ÚNICO ELEMENTO QUE SOBRESALE */}

            <div
              className="
                relative flex
                w-[40%]
                self-stretch
                items-end justify-end
                overflow-visible
              "
            >
              <img
                src="/NF1.png"
                alt="Dra. Verónica Morgade"
                className="
                  absolute bottom-0 right-0
                  h-[680px]
                  w-auto
                  max-w-none
                  object-contain object-bottom
                  2xl:h-[780px]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}