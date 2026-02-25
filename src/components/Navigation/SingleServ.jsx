import { useParams } from "react-router-dom"
import { servicios } from "../../asyncMock"

export default function SingleServ(){

    const {servid} = useParams()
    const id = Number(servid)

    const servicioUnico = servicios.find((s) => s.id === id)
    console.log(servicioUnico);
    

    return <>
    


    <div>
        
        <section className="2xl:w-[70%] mx-auto bg-blue-200">
            <h1 className="text-2xl font-garamond text-center my-12">Descubri nuestro tratamiento de {servicioUnico.subservicio}</h1>
            <article className="2xl:flex 2xl:justify-around">
                <div className="2xl:w-2/5 2xl:pb-4">
                    <h2 className="font-garamond text-2xl px-8 py-4 text-[#7B5D69]">{servicioUnico.subservicio}</h2>
                    <p className="font-montserrat mb-8 px-8 py-4">{servicioUnico.explicacion}</p>
                    <button className="border border-[#7B5D69] font-garamond text-lg rounded-2xl 2xl:p-2 p-1 ml-8 
                                       hover:cursor-pointer hover:bg-[#7B5D69] hover:text-white hover:scale-105 hover:tranition-transform hover:duration-300">
                                        ¡Consultanos!
                    </button>
                </div>
                <div className="2xl:w-2/5">
                    <img className="2xl:w-[400px] 2xl:h-[320px] object-fill rounded-2xl" src="/asd.png" alt="" />
                    <p>Quizas video</p>
                </div>

            </article>
        </section>
        <p>asfasfasf</p>
    </div>

    </>
}
