import { useState, useEffect } from "react";

const slides = [
    { img: "/CTA/CTA1.png", title: "Realza tu belleza natural.", subtitle: "Tratamientos faciales avanzados." },
    { img: "/CTA/CTA2.png", title: "Resultados visibles.", subtitle: "Tecnología estética de última generación." },
    { img: "/CTA/CTA3.png", title: "Cuidado personalizado.", subtitle: "Planes diseñados para vos." },
    { img: "/CTA/CTA4.png", title: "Rejuvenecimiento facial.", subtitle: "Resultados naturales." },
    { img: "/CTA/CTA5.png", title: "Tu mejor versión.", subtitle: "Agendá tu consulta hoy." },
];

export default function CarruselTop() {
    const [current, setCurrent] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(true);

    // Typewriter
    const [typedTitle, setTypedTitle] = useState("");
    const [typedSubtitle, setTypedSubtitle] = useState("");

    const intervalMs = 6000;
    const fadeMs = 6000;
    const textSwitchMs = fadeMs / 3; // cuándo cambia el texto dentro de la transición

    useEffect(() => {
        let timeoutMid;

        const interval = setInterval(() => {
            // 1) empieza transición: ocultamos texto (fade out)
            setTextVisible(false);

            // 2) pasamos a la próxima imagen
            setCurrent((prev) => (prev + 1) % slides.length);

            // 3) dentro del fade: cambiamos texto y lo mostramos (fade in)
            timeoutMid = setTimeout(() => {
                setTextIndex((prev) => (prev + 1) % slides.length);
                setTextVisible(true);
            }, textSwitchMs);
        }, intervalMs);

        return () => {
            clearInterval(interval);
            clearTimeout(timeoutMid);
        };
    }, []);

    // Typewriter: escribe title y después subtitle cada vez que cambia textIndex
    useEffect(() => {
        let titleI = 0;
        let subtitleI = 0;
        let subtitleInterval;

        setTypedTitle("");
        setTypedSubtitle("");

        const titleInterval = setInterval(() => {
            const fullTitle = slides[textIndex].title;
            titleI++;
            setTypedTitle(fullTitle.slice(0, titleI));

            if (titleI >= fullTitle.length) {
                clearInterval(titleInterval);

                subtitleInterval = setInterval(() => {
                    const fullSubtitle = slides[textIndex].subtitle;
                    subtitleI++;
                    setTypedSubtitle(fullSubtitle.slice(0, subtitleI));

                    if (subtitleI >= fullSubtitle.length) clearInterval(subtitleInterval);
                }, 35);
            }
        }, 40);

        return () => {
            clearInterval(titleInterval);
            if (subtitleInterval) clearInterval(subtitleInterval);
        };
    }, [textIndex]);

    return (
        <figure className="relative w-full h-[400px] md:h-[500px] xl:h-[800px] 2xl:h-[900px] overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.img}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover 2xl:object-top
                               transition-opacity duration-[4000ms]
                               ${index === current ? "opacity-100" : "opacity-0"}`}

                />
            ))}

            {/* Overlay degradado para legibilidad del lado derecho */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/35 to-transparent" />

            {/* Textos (fade + typewriter) */}
            <div
                className={`absolute
                           top-[5%] left-[60%]
                           xl:w-auto xl:top-[30%] xl:left-[75%] lg:top-[30%] lg:left-[55%] md:left-[46%] w-[500px] xl:-translate-x-1/2
                           text-white text-center
                           transition-opacity duration-[4000ms]
                           ${textVisible ? "opacity-100" : "opacity-0"}`}
            >
                {/* Reservo altura para que el botón NO se mueva */}
                <div className="min-h-[56px]">
                    <h1 className="xl:text-5xl lg:text-3xl text-2xl xl:mb-4 font-light italic drop-shadow-lg leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                        {typedTitle}
                    </h1>
                </div>

                <div className="min-h-[36px] xl:mt-8">
                    <h2 className="xl:text-2xl text-lg drop-shadow-lg leading-snug whitespace-nowrap overflow-hidden text-ellipsis">
                        {typedSubtitle}
                    </h2>
                </div>
                <button
                    className="relative cursor-pointer overflow-hidden xl:w-50 bg-[#004225] xl:text-xl xl:mt-8 px-8 rounded-full w-40 text-white group h-[52px]
             shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300"
                >
                    {/* Texto que sale (más rápido) */}
                    <span
                        className="absolute inset-0 flex items-center justify-center
               transition-transform duration-500 lg:mr-2
               ease-in
               group-hover:-translate-y-full"
                    >
                        Agendar consulta
                    </span>

                    {/* Texto que entra (más lento) */}
                    <span
                        className="absolute inset-0 flex items-center justify-center
               translate-y-full transition-transform duration-600
               ease-out
               group-hover:translate-y-0"
                    >
                    <a href="https://wa.me/5491168638712">Agendar Consulta</a>
                    </span>
                </button>


            </div>
        </figure>
    );
}
