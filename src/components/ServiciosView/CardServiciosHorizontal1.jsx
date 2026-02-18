export default function CardServiciosHorizontal1({ img, titulo, parrafo }) {
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
          </div>
        </div>
      </article>
    </section>
  );
}
