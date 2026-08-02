import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { servicios } from "../../asyncMock";

export default function ServiciosView() {
  const slug = (str = "") =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .replace(/\s+/g, "");

  const categorias = useMemo(() => {
    const categoriasUnicas = new Map();

    servicios.forEach((item) => {
      const categoriaSlug = slug(item.servicio);

      if (!categoriasUnicas.has(categoriaSlug)) {
        categoriasUnicas.set(categoriaSlug, {
          slug: categoriaSlug,
          titulo: item.rama,
        });
      }
    });

    return Array.from(categoriasUnicas.values());
  }, []);

  const [categoriaActiva, setCategoriaActiva] = useState(
    categorias[0]?.slug || ""
  );

  const serviciosFiltrados = useMemo(() => {
    return servicios.filter(
      (servicio) => slug(servicio.servicio) === categoriaActiva
    );
  }, [categoriaActiva]);

  const [servicioActivoId, setServicioActivoId] = useState(
    serviciosFiltrados[0]?.id || null
  );

  const cambiarCategoria = (nuevaCategoria) => {
    setCategoriaActiva(nuevaCategoria);

    const tratamientosNuevaCategoria = servicios.filter(
      (servicio) => slug(servicio.servicio) === nuevaCategoria
    );

    setServicioActivoId(tratamientosNuevaCategoria[0]?.id || null);
  };

  const servicioActivo =
    serviciosFiltrados.find(
      (servicio) => servicio.id === servicioActivoId
    ) || serviciosFiltrados[0];

  const categoriaActual = categorias.find(
    (categoria) => categoria.slug === categoriaActiva
  );

  if (!categorias.length || !servicioActivo) {
    return (
      <main className="min-h-[60vh] bg-[#fbfaf6] px-4 py-24">
        <h1 className="text-center font-garamond text-3xl text-[#31523a]">
          No hay servicios disponibles
        </h1>
      </main>
    );
  }

  const mensajeWhatsApp = encodeURIComponent(
    `¡Hola Dra. Morgade! Quiero consultar sobre ${servicioActivo.subservicio}.`
  );

  return (
    <main
      className="
        min-h-screen
        overflow-x-hidden
        bg-gradient-to-b
        from-[#f5f5f3]
        via-[#fbfaf6]
        to-[#eef3ec]
        pb-14 pt-10
        sm:pb-16 sm:pt-12
        lg:pb-20 lg:pt-16
      "
    >
      <header className="mx-auto w-[92%] max-w-7xl">
        <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-6">
          <span className="h-px min-w-4 flex-1 bg-[#d8d0bf]" />

          <h1
            className="
              max-w-[75%]
              text-center
              font-garamond
              text-3xl
              leading-tight
              text-[#31523a]
              sm:max-w-none
              sm:text-4xl
              lg:text-5xl
            "
          >
            Nuestros Servicios
          </h1>

          <span className="h-px min-w-4 flex-1 bg-[#d8d0bf]" />
        </div>

      </header>

      <section className="mx-auto mt-8 w-[94%] max-w-7xl sm:mt-10 lg:mt-12">
        <nav
          aria-label="Categorías de servicios"
          className="
            grid grid-cols-2
            overflow-hidden
            rounded-t-2xl
            border border-[#27532f]
            bg-[#27532f]
            sm:flex
          "
        >
          {categorias.map((categoria, index) => {
            const activa = categoria.slug === categoriaActiva;

            return (
              <button
                key={categoria.slug}
                type="button"
                onClick={() => cambiarCategoria(categoria.slug)}
                className={`
                  flex min-h-14
                  cursor-pointer
                  items-center justify-center
                  border-white/20
                  px-3 py-3
                  text-center
                  font-garamond text-base
                  transition-all duration-300
                  sm:min-w-[170px]
                  sm:flex-1
                  sm:border-r
                  sm:px-5
                  sm:py-4
                  sm:text-lg
                  sm:last:border-r-0
                  ${index < 2 ? "border-b sm:border-b-0" : ""}
                  ${index % 2 === 0 ? "border-r sm:border-r" : "sm:border-r"}
                  ${
                    activa
                      ? "bg-[#fbfaf6] text-[#27532f]"
                      : "text-white hover:bg-white/10"
                  }
                `}
              >
                {categoria.titulo}
              </button>
            );
          })}
        </nav>

        <div
  className="
    overflow-visible
    rounded-b-3xl
    border-x border-b
    border-[#d8d0bf]
    bg-gradient-to-br
    from-[#eef3ec]
    via-[#fbfaf6]
    to-[#f2eee4]
    shadow-[0_18px_50px_rgba(39,83,47,0.10)]
    lg:grid
    lg:overflow-hidden 
    lg:grid-cols-[280px_minmax(0,1fr)]
    xl:grid-cols-[320px_minmax(0,1fr)]
  "
>
          <aside
  className="
    relative z-20
    w-full
    border-b border-[#d8d0bf]
    bg-white/90
    px-3 py-4
    sm:px-5 sm:py-5
    lg:w-auto
    lg:border-b-0
    lg:border-r
    lg:bg-white/70
    lg:px-5
    lg:py-7
  "
>
  <p
    className="
      mb-3
      font-montserrat
      text-xs font-semibold
      uppercase tracking-[0.2em]
      text-[#69806e]
      lg:mb-5
    "
  >
    Tratamientos
  </p>

  <div className="relative w-full lg:hidden">
    <div
      className="
        hide-scrollbar
        flex w-full
        gap-2
        overflow-x-auto
        overscroll-x-contain
        px-1 pb-2
        snap-x snap-mandatory
        touch-pan-x
      "
    >
      {serviciosFiltrados.map((servicio) => {
        const activo = servicio.id === servicioActivo.id;

        return (
          <button
            key={servicio.id}
            type="button"
            onClick={() => setServicioActivoId(servicio.id)}
            className={`
              flex min-h-[46px]
              min-w-[170px]
              shrink-0 snap-center
              cursor-pointer
              items-center justify-center
              rounded-xl
              border
              px-4 py-3
              text-center
              font-montserrat
              text-sm leading-5
              transition-all duration-300

              ${
                activo
                  ? `
                    border-[#27532f]
                    bg-[#27532f]
                    text-white
                    shadow-[0_8px_20px_rgba(39,83,47,0.16)]
                  `
                  : `
                    border-[#d8d0bf]
                    bg-[#fbfaf6]
                    text-[#4e5950]
                  `
              }
            `}
          >
            {servicio.subservicio}
          </button>
        );
      })}
    </div>

    {serviciosFiltrados.length > 2 && (
      <p className="mt-1 text-center font-montserrat text-[11px] text-[#7b857d]">
        Deslizá para ver más tratamientos
      </p>
    )}
  </div>

  <div className="hidden flex-col gap-2 lg:flex">
    {serviciosFiltrados.map((servicio) => {
      const activo = servicio.id === servicioActivo.id;

      return (
        <button
          key={servicio.id}
          type="button"
          onClick={() => setServicioActivoId(servicio.id)}
          className={`
            w-full
            cursor-pointer
            rounded-xl
            border
            px-4 py-3.5
            text-left
            font-montserrat
            text-sm leading-5
            transition-all duration-300

            ${
              activo
                ? `
                  border-[#27532f]
                  bg-[#27532f]
                  text-white
                  shadow-[0_8px_20px_rgba(39,83,47,0.16)]
                `
                : `
                  border-[#d8d0bf]
                  bg-[#fbfaf6]
                  text-[#4e5950]
                  hover:border-[#27532f]
                  hover:bg-[#eef3ec]
                  hover:text-[#27532f]
                `
            }
          `}
        >
          {servicio.subservicio}
        </button>
      );
    })}
  </div>
</aside>

          <article
            key={servicioActivo.id}
            className="
              min-w-0
              overflow-hidden
            "
          >
            <div
              className="
                border-b border-[#d8d0bf]
                bg-[#f2efe7]
                sm:p-5
                md:p-6
                lg:p-7
                xl:p-8">

              <div
                className="
                  relative
                  mx-auto
                  w-[100%] md:w-[80%] xl:w-[60%] object-contain
                  h-[500px]
                  overflow-hidden
                  rounded-xl
                  border border-[#d8d0bf]/80
                  bg-[#fbfaf6]
                  shadow-[0_14px_35px_rgba(39,83,47,0.09)]">

                    <img
                    src={servicioActivo.img}
                    alt={servicioActivo.subservicio}
                    className="
                        h-full w-full
                        object-cover object-center
                        transition-transform
                        duration-700 ease-out
                        hover:scale-[1.025]"/>

                <div
                  className="
                    pointer-events-none
                    absolute inset-x-0 bottom-0
                    h-1/3
                    bg-gradient-to-t
                    from-[#1f4326]/18
                    via-[#1f4326]/5
                    to-transparent
                  "
                />
              </div>
            </div>

            <div
              className="
                relative
                overflow-hidden
                px-5 py-8
                sm:px-8 sm:py-10
                md:px-10
                lg:px-10 lg:py-12
                xl:px-14
              "
            >
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="
                    absolute -right-24 -top-24
                    h-64 w-64
                    rounded-full
                    bg-[#27532f]/10
                    blur-3xl
                  "
                />

                <div
                  className="
                    absolute -bottom-24 left-10
                    h-52 w-52
                    rounded-full
                    bg-[#d8d0bf]/50
                    blur-3xl
                  "
                />
              </div>

              <div className="relative z-10">
                <p
                  className="
                    font-montserrat
                    text-[11px] font-semibold
                    uppercase tracking-[0.2em]
                    text-[#69806e]
                    sm:text-xs sm:tracking-[0.24em]
                  "
                >
                  {categoriaActual?.titulo}
                </p>

                <h2
                  className="
                    mt-2
                    break-words
                    font-garamond
                    text-3xl
                    leading-tight
                    text-[#27532f]
                    sm:mt-3 sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {servicioActivo.subservicio}
                </h2>

                <div className="mt-4 h-px w-20 bg-[#b8aa8e] sm:w-24" />

                <div className="mt-6 sm:mt-7">
                  <h3
                    className="
                      font-garamond
                      text-xl
                      text-[#31523a]
                      sm:text-2xl
                    "
                  >
                    Sobre el tratamiento
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-4xl
                      font-montserrat
                      text-sm
                      leading-7
                      text-[#505b52]
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    {servicioActivo.descripcion}
                  </p>
                </div>

                <div
                  className="
                    mt-8
                    flex flex-col
                    gap-3
                    sm:flex-row
                    sm:flex-wrap
                    sm:gap-4
                    lg:mt-9
                  "
                >
                  <Link
                    to={`/Servicios/${categoriaActiva}/${servicioActivo.id}`}
                    className="
                      inline-flex
                      min-h-12
                      w-full
                      items-center justify-center
                      rounded-full
                      border border-[#27532f]
                      bg-[#27532f]
                      px-6 py-3
                      text-center
                      font-garamond text-lg
                      text-white
                      shadow-[0_10px_25px_rgba(39,83,47,0.20)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-[#1f4326]
                      sm:w-auto
                      sm:min-w-[190px]
                    "
                  >
                    Ver tratamiento
                  </Link>

                  <a
                    href={`https://wa.me/5491168638712?text=${mensajeWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      min-h-12
                      w-full
                      items-center justify-center
                      rounded-full
                      border border-[#27532f]
                      bg-white/60
                      px-6 py-3
                      text-center
                      font-garamond text-lg
                      text-[#27532f]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-[#27532f]
                      hover:text-white
                      sm:w-auto
                      sm:min-w-[190px]
                    "
                  >
                    Realizar consulta
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}