import { Link, useParams } from "react-router-dom"
import { servicios } from "../../asyncMock"

export default function ServiciosGenerales() {

    const { categoria } = useParams();
    console.log(categoria);

    const serviciosFiltrados = servicios.filter((s) => s.servicio === categoria)
    console.log(serviciosFiltrados);

    const titulo = serviciosFiltrados[0].rama
    const id = serviciosFiltrados[0].id

    return (<>

        <h1 className="font-garamond text-3xl text-center mt-12">Nuestros servicios de {titulo}</h1>
        <section className="w-[90%] mx-auto flex justify-center flex-wrap gap-8 my-12
                            lg:w-[80%]">
            {serviciosFiltrados.map((s) => (
                <article key={s.id} className="w-[80%] rounded-xl flex flex-col mx-12 mb-12 mt-8 justify-between grayscale hover:grayscale-0 hover:scale-102 hover:transform-transition hover:duration-400 border border-[#7B5D69]
                                               md:w-[55%] 
                                               lg:w-[40%] 
                                               2xl:w-[30%]">

                    <div className="w-full h-[300px] mb-2">
                        <img className="w-full h-full object-fill rounded-t-xl" src="/asd.png" alt="" />
                    </div>

                    <h2 className="text-xl font-garamond text-center pb-2 text-[#7B5D69]">
                        {s.subservicio}
                    </h2>

                    <p className="font-montserrat pb-2 text-sm px-4">{s.descripcion}</p>

                    <div className="flex justify-between items-end p-4">
                        <Link to={`/Servicios/${categoria}/${s.id}`}><button className="font-garamond border border-[#7B5D69] p-2 rounded-3xl cursor-pointer hover:bg-[#7B5D69] hover:text-white hover:scale-110 hover:transition-transform hover:duration-300">Ver más...</button></Link>
                        <a href={`https://wa.me/5491168638712?text=¡Hola%20Dra.%20Morgade!%20Me%20gustaría%20agendar%20una%20consulta%20para%20${s.subservicio}%20de%20${titulo}`}><button className="font-garamond border border-[#7B5D69] p-2 rounded-2xl cursor-pointer hover:bg-[#7B5D69] hover:text-white hover:scale-110 hover:transition-transform hover:duration-300">Realizar Consulta</button></a>
                    </div>
                </article>
            ))}

        </section>

    </>
    );
}