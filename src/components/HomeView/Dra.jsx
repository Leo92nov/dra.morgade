import { useEffect, useRef, useState } from "react";
import Listones from "./Listones";

export default function Dra() {
    const sectionRef = useRef(null);
    const [active, setActive] = useState(false);
    const [showListones, setShowListones] = useState(false);

    // Detectar entrada en viewport
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

    // Mostrar listones cuando termina el fondo
    useEffect(() => {
        if (active) {
            const timer = setTimeout(() => {
                setShowListones(true);
            }, 1100); // mismo tiempo que animación del fondo

            return () => clearTimeout(timer);
        }
    }, [active]);

    return (
        <section
            ref={sectionRef}
            className="relative 2xl:w-[70%] mx-auto my-8 overflow-hidden"
        >
            {/* Fondo animado */}
            <div
                className={[
                    "absolute inset-0 w-[160%] bg-[#004225] will-change-transform",
                    "transition-transform duration-[1100ms] ease-out",
                    active ? "translate-x-0" : "translate-x-[100%]",
                ].join(" ")}
            />

            {/* Contenido encima */}
            <div className="relative w-[100%] xl:ml-4 flex justify-between gap-6">

                {/* Listones con fade */}
                <div
                    className={[
                        "transition-all duration-700 flex justify-center items-center xl:w-[55%] flex-wrap gap-8 h-[100%] my-auto",
                        showListones
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6",
                    ].join(" ")}
                >
                    <div className="flex items-end gap-4 xl:mb-4">
                        <Listones
                        titulo='Calidad Asegurada'
                            img="/listones/seguridad.png"
                            parrafo="Trabajmos con protocolos estrictos y respaldados por tecnología certificada y productos de calidad superior a nivel internacional."
                        />
                    

                    
                        <Listones
                        titulo='Clinica de excelencia'
                            img="/listones/clinica.png"
                            parrafo="Nuestras instalaciones fueron cuidadosamente diseñadas con ambientes luminosos y confortables que garantizan una atención de primer nivel."
                        />
                    </div>

                    <div className="flex gap-4">
                        <Listones
                            img="/listones/seguridad.png"
                            parrafo="Protocolos respaldados por tecnología certificada y productos de calidad superior a nivel internacional."
                        />
                    
                    
                    
                        <Listones
                            img="/listones/seguridad.png"
                            parrafo="Protocolos respaldados por tecnología certificada y productos de calidad superior a nivel internacional."
                        />
                    </div>

                </div>

                <div className="xl:w-[45%] flex justify-end">
                    <img className="h-[800px] left-0" src="/dreNB.png" alt="" />
                </div>

            </div>

        </section>
    );
}
