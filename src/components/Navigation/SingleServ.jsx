import { useParams } from "react-router-dom"
import { servicios } from "../../asyncMock"

export default function SingleServ() {

    const { servid } = useParams()
    const id = Number(servid)

    const servicioUnico = servicios.find((s) => s.id === id)
    console.log(servicioUnico);


    return <>



        <main>

            <section className="2xl:w-[70%]
                            xl: w-[80%]
                            lg:w-[90%] lg:mx-auto                          
                            w-full">
                <h1 className="text-3xl font-garamond text-center my-12">Descubrí nuestro tratamiento de {servicioUnico.subservicio}</h1>
                <article className="2xl:flex 2xl:flex-row 2xl:justify-around
                                xl:flex xl:justify-around
                                lg:flex lg:flex-row
                                md:flex md:flex-row
                                flex flex-col-reverse">
                    <div className="2xl:w-2/5 2xl:pb-4
                                xl:w-2/5
                                lg:w-2/5
                                md:w-3/5
                                w-full">
                        <h2 className="font-garamond text-2xl px-8 py-4 text-[#7B5D69]">{servicioUnico.subservicio}</h2>
                        <p className="font-montserrat mb-8 px-8 py-4">{servicioUnico.explicacion}</p>
                        <button className="border border-[#7B5D69] font-garamond text-lg rounded-2xl 2xl:p-2 p-1 ml-8 
                                       hover:cursor-pointer hover:bg-[#7B5D69] hover:text-white hover:scale-105 hover:tranition-transform hover:duration-300">
                            ¡Consultanos!
                        </button>
                    </div>
                    <div className="2xl:w-2/5
                                xl:w-2/5
                                lg:w-3/5
                                md:w-2/5
                                w-full
                                ">
                        <img className="2xl:w-[400px] 2xl:h-[320px] object-fill rounded-2xl" src="/asd.png" alt="" />
                    </div>

                </article>
            </section>
            {servicioUnico.video && (<section className="2xl:w-[70%]
                            xl: w-[80%]
                            lg:w-[90%] lg:mx-auto                          
                            w-full">
                <section className="mb-16 flex flex-col items-center mt-8">
                    <h2 className="mb-12 mt-8 text-2xl font-garamond text-center">Procedimiento de {servicioUnico.subservicio}</h2>
                    <iframe src={servicioUnico.video} frameborder="0" className="w-150 h-150 object-cover"></iframe>
                </section>
            </section>)}
        </main>

    </>
}
