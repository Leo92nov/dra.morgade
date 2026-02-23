import { Link } from "react-router-dom";

export default function CardServiciosHorizontal2({ img, titulo, parrafo, to }) {
  return (
    <section className="px-4 py-10 bg-gray-100
                        sm:px-6 
                        lg:px-8  
                        2xl:w-[80%] 2xl:mx-auto
                        3xl:w-[80%] 3xl:mx-auto">
      <article className="w-full">
        <div className="
          flex flex-col mb-15
          lg:flex-row
          2xl:gap-30
          3xl:h-[400px] 3xl:gap-40">

          {/* TEXTO */}
          <div className="
            w-full 
            lg:w-4/6 
            xl:w-1/2 
            2xl:w-2/6
            3xl:w-2/4 3xl:h-full
            flex flex-col justify-center
            order-2 lg:order-1
          ">
            <div className="border-b border-[#7B5D69] mb-6">
              <h2 className="font-garamond text-2xl 
                             sm:text-xl 
                             xl:text-2xl">{titulo}</h2>
            </div>

            <p className="font-montserrat 
                          sm:text-md 
                          xl:text-lg">{parrafo}</p>

            <Link
              to={to}
              className="
                mt-6 inline-flex items-center justify-center
                h-12 px-6
                text-white bg-[#7B5D69] rounded-xl
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
            lg:w-2/6
            xl:w-1/2 
            2xl:w-4/6
            3xl:w-2/4 3xl:h-full
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
