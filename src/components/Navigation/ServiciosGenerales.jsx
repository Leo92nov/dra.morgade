import { Link, useParams } from "react-router-dom";
import { servicios } from "../../asyncMock";

export default function ServiciosGenerales() {
  const { categoria } = useParams();

  const slug = (str = "") =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .replace(/\s+/g, "");

  const serviciosFiltrados = servicios.filter(
    (s) => slug(s.servicio) === categoria
  );

  if (!serviciosFiltrados.length) {
    return (
      <h1 className="text-center mt-20 text-2xl font-garamond">
        Categoría no encontrada
      </h1>
    );
  }

  const titulo = serviciosFiltrados[0].rama;

  return (
    <>
      <div className="mt-12 flex items-center justify-center gap-6">
  <span className="h-px flex-1 bg-[#d8d0bf]" />

  <h1 className="shrink-0 text-center text-3xl font-garamond text-[#31523a]">
    Nuestros servicios de {titulo}
  </h1>

  <span className="h-px flex-1 bg-[#d8d0bf]" />
</div>

      <section className="w-[90%] mx-auto flex justify-center flex-wrap gap-8 my-12 lg:w-[80%]">
        {serviciosFiltrados.map((s) => (
          <article
            key={s.id}
            className="w-[80%] rounded-xl flex flex-col mx-12 mb-12 mt-8 justify-between border border-[#27532f]
                       md:w-[55%] lg:w-[35%] 2xl:w-[25%]"
          >
            <div className="w-full h-[300px] mb-2">
              <img className="w-full h-full object-fill rounded-t-xl" src={s.img} alt="" />
            </div>

            <h2 className="text-xl font-garamond text-center pb-2 text-[#27532f]">
              {s.subservicio}
            </h2>

            <p className="font-montserrat pb-2 text-sm px-4">
              {s.descripcion}
            </p>

            <div className="flex justify-between items-end p-4">
              <Link to={`/Servicios/${categoria}/${s.id}`}>
                <button className="font-garamond border border-[#27532f] p-2 rounded-3xl hover:bg-[#27532f] hover:text-white transition">
                  Ver más...
                </button>
              </Link>

              <a
                href={`https://wa.me/5491168638712?text=Hola%20Dra.%20Morgade!%20Quiero%20consultar%20sobre%20${s.subservicio}`}
              >
                <button className="font-garamond border border-[#27532f] p-2 rounded-3xl hover:bg-[#27532f] hover:text-white transition">
                  Realizar Consulta
                </button>
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}