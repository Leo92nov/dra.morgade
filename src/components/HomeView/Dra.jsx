import { useEffect, useRef, useState } from "react";
import Listones from "./Listones";

export default function Dra() {
  const sectionRef = useRef(null);

  const [active, setActive] = useState(false);
  const [showListones, setShowListones] = useState(false);

  // Slider refs/state (mobile/tablet)
  const sliderRef = useRef(null);
  const [slideIdx, setSlideIdx] = useState(0);

  const listonesData = [
    {
      titulo: "Calidad Asegurada",
      img: "/listones/seguridad.webp",
      parrafo:
        "Trabajamos con protocolos estrictos respaldados, tecnología certificada y productos de reconocidos a nivel internacional.",
    },
    {
      titulo: "Clínica de excelencia",
      img: "/listones/cc.png",
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
        "Compromiso profesional y la atención personalizada se refleja en cada detalle, ofreciendo una experiencia de máxima calidad.",
    },
  ];

  // Activa la animación del fondo cuando entra en viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0, rootMargin: "0px 0px -40% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Muestra listones después de la animación
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setShowListones(true), 1100);
    return () => clearTimeout(t);
  }, [active]);

  // Autoplay slider (solo cuando ya se muestran)
  useEffect(() => {
    if (!showListones) return;
    const id = setInterval(() => {
      setSlideIdx((i) => (i + 1) % listonesData.length);
    }, 6000);
    return () => clearInterval(id);
  }, [showListones, listonesData.length]);

  // Scroll al slide actual (mobile/tablet)
  useEffect(() => {
  const el = sliderRef.current;
  if (!el) return;

  // ojo: children[0] es el spacer izquierdo, por eso +1
  const item = el.children?.[slideIdx + 1];
  if (!item) return;

  const elRect = el.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();

  // cuánto hay que mover el scrollLeft para centrar el item
  const delta =
    (itemRect.left - elRect.left) - (elRect.width / 2 - itemRect.width / 2);

  el.scrollTo({
    left: el.scrollLeft + delta,
    behavior: "smooth",
  });
}, [slideIdx]);

  const fondoClasses = [
    "absolute inset-0 w-[160%] will-change-transform",
    "bg-[url('/fondo.webp')] bg-cover bg-center bg-no-repeat",
    "transition-transform duration-[1100ms] ease-out",
    active ? "translate-x-0" : "translate-x-[100%]",
  ].join(" ");

  return (
    <section ref={sectionRef} className="relative 2xl:w-[70%] mx-auto my-8">
      {/* ===================== */}
      {/* MOBILE / TABLET (<lg) */}
      {/* ===================== */}
      <div className="lg:hidden">
        {/* Contenedor arriba: Hero */}
        <div className="relative overflow-hidden h-[520px] rounded-2xl">
          <div className={fondoClasses} />
          <div className="relative z-10 h-full w-full flex items-end justify-end">
            <img className="h-full w-auto object-contain" src="/dreNB.webp" alt="" />
          </div>
        </div>

        {/* Contenedor abajo: Slider (1 por vez, centrado) */}
        <div
          className={[
            "mt-6",
            "transition-all duration-700",
            showListones ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <div
            ref={sliderRef}
            className="
              hide-scrollbar
              flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory
              px-4 pb-3
              [-ms-overflow-style:none] [scrollbar-width:none]
            "
          >
            {/* spacer izquierdo para centrar el primer slide */}
            <div className="shrink-0 w-[1px]" />

            {listonesData.map((l) => (
              <div
                key={l.titulo}
                className="
                  snap-center shrink-0
                  w-[calc(100vw-2rem)]
                  bg-white/80 backdrop-blur
                  rounded-2xl shadow
                  p-4
                "
              >
                <Listones titulo={l.titulo} img={l.img} parrafo={l.parrafo} />
              </div>
            ))}

            {/* spacer derecho para centrar el último slide */}
            <div className="shrink-0 w-[1px]" />
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {listonesData.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIdx(i)}
                className={[
                  "h-2 w-2 rounded-full transition-all",
                  i === slideIdx ? "bg-[#7B5D69] w-6" : "bg-black/20",
                ].join(" ")}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}
          </div>

          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}</style>
        </div>
      </div>

      {/* ===================== */}
      {/* DESKTOP (>=lg)        */}
      {/* ===================== */}
      <div className="hidden lg:block relative overflow-hidden lg:pl-8 rounded-2xl">
        <div className={fondoClasses} />

        <div className="relative w-full flex justify-between gap-6 xl:items-center pl-8">
          {/* LISTONES */}
          <div
            className={[
              "transition-all duration-700 flex h-full w-auto items-center",
              "lg:w-[40%] lg:flex-col lg:justify-between",
              "xl:flex-row xl:w-[45%] xl:gap-20",
              showListones ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            <div className="flex lg:flex-col gap-8 xl:items-center xl:justify-center">
              <Listones
                titulo="Calidad Asegurada"
                img="/listones/seguridad.webp"
                parrafo="Trabajamos con protocolos estrictos respaldados, tecnología certificada y productos de reconocidos a nivel internacional."
              />
              <Listones
                titulo="Clínica de excelencia"
                img="/listones/cc.png"
                parrafo="Nuestras instalaciones fueron diseñadas con ambientes luminosos y confortables que garantizan una atención de primer nivel."
              />
            </div>

            <div className="flex lg:flex-col gap-8 xl:items-center xl:justify-center">
              <Listones
                titulo="Productos premium"
                img="/listones/crema.webp"
                parrafo="Nuestros productos tópicos son seleccionados bajo estrictos estándares de excelencia y adaptados a cada tratamiento."
              />
              <Listones
                titulo="Protocolos certificados"
                img="/listones/rrhh.webp"
                parrafo="Compromiso profesional y la atención personalizada se refleja en cada detalle, ofreciendo una experiencia de máxima calidad."
              />
            </div>
          </div>

          {/* IMAGEN */}
          <div className="h-auto flex lg:w-[60%] xl:w-[45%] xl:justify-end xl:items-end">
            <img className="h-full w-full object-contain" src="/dreNB.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}