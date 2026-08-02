import { Link } from "react-router-dom";

export default function CardServiciosHome({
  img,
  servicio,
  descripcion,
  index = 0,
}) {
  const slugServicio = servicio
    .trim()
    .split(/\s+/)
    .pop()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const mensajeWhatsApp = encodeURIComponent(
    `¡Hola Dra. Morgade! Me gustaría agendar una consulta para ${servicio}`
  );

  return (
    <section
      className="
        p-2
        sm:px-4
        lg:px-6
        2xl:w-[75%] 2xl:mx-auto 2xl: pb-18
        3xl:w-[75%] 3xl:mx-auto
      "
    >
      <article className="w-full">
        <div
          className={`
            flex flex-col gap-8
            lg:items-center
            2xl:gap-16
            ${
              index % 2 === 0
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            }
          `}
        >
          {/* IMAGEN */}
          <div
            className="
              w-full
              lg:w-1/2
              overflow-hidden
              rounded-2xl
            "
          >
            <img
              className="
                w-full
                h-[260px]
                lg:h-[340px]
                object-cover
                transition-transform duration-700 ease-out
                hover:scale-[1.06]
              "
              src={img}
              alt={servicio}
              loading="lazy"
            />
          </div>

          {/* TEXTO */}
          <div
            className="
              w-full
              lg:w-1/2
              flex flex-col
              justify-center
            "
          >
            <div className="border-b border-[#27532f] pb-3">
              <h2
                className="
                  font-garamond
                  text-xl
                  lg:text-2xl
                  text-[#31523a]
                "
              >
                {servicio}
              </h2>
            </div>

            <p
              className="
                mt-5
                font-montserrat
                text-sm
                lg:text-base
                leading-7
                text-[#404640]
              "
            >
              {descripcion}
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/5491168638712?text=${mensajeWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="
                    w-40
                    h-10
                    rounded-xl
                    bg-[#27532f]
                    text-white
                    font-garamond
                    text-base
                    cursor-pointer
                    hover:scale-105
                    transition-transform
                    duration-300
                  "
                >
                  Consultar
                </button>
              </a>

              <Link to={`/Servicios/${slugServicio}`}>
                <button
                  className="
                    w-40
                    h-10
                    rounded-xl
                    border
                    border-gray-500
                    font-garamond
                    text-base
                    cursor-pointer
                    hover:bg-[#27532f]
                    hover:text-white
                    hover:border-[#27532f]
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  Conocer más...
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}