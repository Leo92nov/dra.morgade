import { useEffect, useRef, useState } from "react";
import Listones from "./Listones";

export default function Dra() {
    const sectionRef = useRef(null);
    const [active, setActive] = useState(false);
    const [showListones, setShowListones] = useState(false);

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

    useEffect(() => {
        if (active) {
            const timer = setTimeout(() => {
                setShowListones(true);
            }, 1100);
            return () => clearTimeout(timer);
        }
    }, [active]);

    return (
        <section
            ref={sectionRef}
            className="relative 2xl:w-[80%] mx-auto my-8 overflow-hidden"
        >
            {/* Fondo */}
            <div
                className={[
                    "absolute inset-0 w-[160%] bg-[#004225] will-change-transform",
                    "transition-transform duration-[1100ms] ease-out",
                    active ? "translate-x-0" : "translate-x-[100%]",
                ].join(" ")}
            />

            {/* Contenido */}
            <div className="relative w-full flex justify-between gap-6 h-[auto] xl:justify-between xl:items-center pl-8">

                {/* LISTONES */}
                <div
                    className={[
                        "transition-all duration-700 flex h-full w-auto items-center",
                        "lg:w-[40%] lg:flex-col lg:justify-between ",
                        "xl:flex-row xl:w-[45%] xl:gap-20",
                        showListones
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6",
                    ].join(" ")}
                >
                    <div className="flex lg:flex-col gap-8 xl:items-center xl:justify-center">
                        <Listones
                            titulo="Calidad Asegurada"
                            img="/listones/seguridad.png"
                            parrafo="Trabajamos con protocolos estrictos respaldados, tecnología certificada y productos de reconocidos a nivel internacional."
                        />

                        <Listones
                            titulo="Clínica de excelencia"
                            img="/listones/clinica.png"
                            parrafo="Nuestras instalaciones fueron diseñadas con ambientes luminosos y confortables que garantizan una atención de primer nivel."
                        />
                    </div>

                    <div className="flex lg:flex-col gap-8 xl:items-center xl:justify-center">
                        <Listones
                            titulo="Productos premium"
                            img="/listones/crema.png"
                            parrafo="Nuestros productos tópicos son seleccionados bajo estrictos estándares de excelencia y adaptados a cada tratamiento."
                        />

                        <Listones
                            titulo="Protocolos certificados"
                            img="/listones/rrhh.png"
                            parrafo="Nuestro compromiso profesional y la atención personalizada se refleja en cada detalle, ofreciendo una experiencia de máxima calidad."
                        />
                    </div>
                </div>

                {/* IMAGEN */}
                <div className="h-[auto] flex
                                lg:w-[60%] 
                                xl:w-[45%] xl:justify-end xl:items-end">

                    <img className="h-[100%] w-full" src="/dreNB.png" alt="" />
                </div>

            </div>
        </section>
    );
}
