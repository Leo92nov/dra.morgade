import { Link } from "react-router-dom";

export default function CardServiciosHorizontal2({ img, titulo, parrafo, to }) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <article className="w-full">
        <div className="
          flex flex-col lg:flex-row
          gap-8 items-stretch
          3xl:h-[600px]
        ">

          {/* TEXTO */}
          <div className="
            w-full 
            lg:w-4/6 xl:w-1/2 2xl:w-2/6
            3xl:w-1/4 3xl:h-full
            flex flex-col justify-center
            order-2 lg:order-1
          ">
            <div className="border-b mb-6">
              <h2 className="text-3xl sm:text-4xl xl:text-5xl">{titulo}</h2>
            </div>

            <p className="text-base sm:text-lg xl:text-2xl">{parrafo}</p>

            <Link
              to={to}
              className="
                mt-6 inline-flex items-center justify-center
                h-12 px-6
                text-white bg-[#004225] rounded-xl
                hover:scale-105 transition-transform duration-300
                w-[12rem]
              "
            >
              Consultar
            </Link>
          </div>

          {/* IMAGEN */}
          <div className="
            w-full 
            lg:w-2/6 xl:w-1/2 2xl:w-4/6
            3xl:w-3/4 3xl:h-full
            order-1 lg:order-2
          ">
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <img
                className="w-full h-full object-cover"
                src={img}
                alt={titulo}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </article>
    </section>
  );
}
