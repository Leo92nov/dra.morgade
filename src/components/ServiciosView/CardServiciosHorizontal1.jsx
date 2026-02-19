import { Link } from "react-router-dom";

export default function CardServiciosHorizontal1({ img, titulo, parrafo, to }) {
  return (
    <section className="w-full px-8">
      <article className="w-full">
        <div className="w-full flex items-center gap-8">
          <div className="w-3/4">
            <img
              className="w-full h-[480px] object-cover rounded-2xl"
              src={img}
              alt={titulo}
            />
          </div>

          <div className="w-1/4">
            <div className="border-b mb-6">
              <h2 className="w-full text-5xl">{titulo}</h2>
            </div>
            <p className="w-full text-2xl">{parrafo}</p>
          <div className="h-10 flex justify-center items-center w-[20%] text-white mt-4 p-4 bg-[#004225] rounded-xl hover:scale-105 transition-transform duration-400 cursor-pointer"><Link to={to}></Link>Consultar</div>
          </div>
        </div>
      </article>
    </section>
  );
}
