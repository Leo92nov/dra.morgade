import { Link } from "react-router-dom";

export default function CardServiciosHorizontal2({ img, titulo, parrafo, to }) {
  return (
    <section className="w-full my-22 px-8">
      <article className="w-full">
        <div className="w-full flex items-center gap-8">

          {/* TEXTO */}
          <div className="w-1/4">
            <div className="border-b mb-6">
              <h2 className="w-full text-5xl">{titulo}</h2>
            </div>
            <p className="w-full text-2xl">{parrafo}</p>
            <div className="h-10 flex justify-center items-center w-[20%] text-white mt-4 p-4 bg-[#004225] rounded-xl hover:scale-105 transition-transform duration-400 cursor-pointer"><Link to={to}></Link>Consultar</div>
          </div>

          {/* IMAGEN */}
          <div className="w-3/4">
            <img
              className="w-full h-[480px] object-cover rounded-2xl"
              src={img}
              alt={titulo}
            />
          </div>

        </div>
      </article>
    </section>
  );
}
