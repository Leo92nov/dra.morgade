export default function Listones({ img, parrafo, titulo }) {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center">
        <img className="h-10 w-10 md:h-18 md:w-15 xl:h-25 lg:w-20" src={img} alt="" />

        <h2 className="text-black text-lg w-full mt-2 font-bold font-garamond
                       xsm:text-xl xsm:text-[#7B5D69]">
          {titulo}
        </h2>

        <p className="text-black text-sm  w-full mt-2 font-montserrat
                      2xl:w-[240px]
                      sm:text-base">
          {parrafo}
        </p>
      </div>
    </section>
  );
}