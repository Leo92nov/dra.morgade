import BeforeAfter from "./BeforeAfter";
import CardServiciosHome from "./CardServiciosHome";
import CarruselMarcas from "./CarruselMarcas";
import CarruselTop from "./CarruselTop";
import Dra from "./Dra";
import Listones from "./Listones";


export default function Home() {

    return <>
        <CarruselTop></CarruselTop>
        <h2 className="text-center text-2xl my-8 ">Nuestros tratamientos</h2>
        <section className="flex justify-center gap-12 wrap lg:w-[70%] mx-auto ">
            <CardServiciosHome img='/HomeCards/facial.webp' servicio='Facial'/>
            <CardServiciosHome img='/HomeCards/corporal.webp' servicio='Corporal'/>
            <CardServiciosHome img='/HomeCards/capilar.webp' servicio='Capilar'/>
            <CardServiciosHome img='/HomeCards/suero.webp' servicio='Sueros'/>
            <CardServiciosHome img='/HomeCards/nutricion.webp' servicio='Nutricion'/>
        </section>

        <section className="my-16">
            <Dra></Dra>
            
        </section>

        <h2 className="text-center text-2xl my-8">Algunos de nuestros resultados</h2>
        <section className="w-full flex justify-center">
            <section className="flex flex-wrap gap-8 w-[70%]">
                <BeforeAfter antes="/antes-despues/antes-frente.jpeg" despues="/antes-despues/despues-frente.jpeg"></BeforeAfter>
                <BeforeAfter antes="/antes-despues/culo-antes.jpeg" despues="/antes-despues/culo-despues.jpeg"></BeforeAfter>
                <BeforeAfter antes="/antes-despues/labios-antes.png" despues="/antes-despues/labios-despues.png"></BeforeAfter>
                <BeforeAfter antes="/antes-despues/gallo-antes.png" despues="/antes-despues/gallo-despues.png"></BeforeAfter>
            </section>
        </section>
        <CarruselMarcas></CarruselMarcas>
    </>
}