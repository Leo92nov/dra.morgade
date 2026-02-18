import BeforeAfter from "./BeforeAfter";
import CardServiciosHome from "./CardServiciosHome";
import CarruselMarcas from "./CarruselMarcas";
import CarruselTop from "./CarruselTop";
import Dra from "./Dra";
import Testimonios from "./Testimonios";


export default function Home() {

    return <>
        <CarruselTop></CarruselTop>

        <section className="my-16">
            <Dra></Dra>
            
        </section>

        <h2 className="text-center text-4xl my-8 ">Nuestros tratamientos</h2>
        <section className="flex justify-center gap-12 wrap xl:w-[80%] lg:w-[90%] mx-auto ">
            <CardServiciosHome img='/HomeCards/facial.webp' servicio='Facial'/>
            <CardServiciosHome img='/HomeCards/corporal.webp' servicio='Corporal'/>
            <CardServiciosHome img='/HomeCards/capilar.webp' servicio='Capilar'/>
            <CardServiciosHome img='/HomeCards/suero.webp' servicio='Sueros'/>
            <CardServiciosHome img='/HomeCards/nutricion.webp' servicio='Nutricion'/>
        </section>

        <h2 className="text-center text-2xl my-8">Algunos de nuestros resultados</h2>
        <section className="w-full flex justify-center">
            <section className="flex flex-wrap gap-8 w-[80%]">
                <BeforeAfter antes="/antes-despues/antes-frente.jpeg" despues="/antes-despues/despues-frente.jpeg"></BeforeAfter>
                <BeforeAfter antes="/antes-despues/culo-antes.jpeg" despues="/antes-despues/culo-despues.jpeg"></BeforeAfter>
                <BeforeAfter antes="/antes-despues/labios-antes.png" despues="/antes-despues/labios-despues.png"></BeforeAfter>
                <BeforeAfter antes="/antes-despues/gallo-antes.png" despues="/antes-despues/gallo-despues.png"></BeforeAfter>
                <BeforeAfter antes="/antes-despues/alopecia-antes.png" despues="/antes-despues/alopecia-despues.png"></BeforeAfter>
            </section>
        </section>

        <section>
            <h2 className="text-center">Nuestros pacientes:</h2>
            <Testimonios tratamiento="Descenso de peso" paciente="Marisa" devolucion="Siento que me cambió la vida desde que comencé el tratamiento. No solo he bajado de pesop sino que puedo mantenerlo en el tioempo. Ademas de sentirme súper bien. No me voy a cansar de agradecerle siempre su profesionalismo. Estoy feliz y eso lo resume todo ¡Muchas Gracias!"></Testimonios>
            <Testimonios tratamiento="Sueroterapia" paciente="Mariía Elena" devolucion="Mi experiencia con este tratamiento es mucho mas que positiva, fui a consultar a la Dra porque habia llegado a una instancia de mi vida en la cual me sentia muy agotada y practicamente no tenia ganas de nada. Desde que comencé el tratamiento fui notando que empece a recuperar energia como tambien a tener mejoras en la calidad de mi piel, cabello, y hasta de mi estado de animo en general. La verdad es que estoy súper conforme con este tratamiento y lo recomiendo muchisimo ¡Gracias!"></Testimonios>
            <Testimonios tratamiento="Pellet Hormonal" paciente="Lidia" devolucion="Para mi colocarme el pellet hormonal con la Dra Morgade fue un antes y un después. Lo llevo puesto recién 15 días... Un 8 de febrero La Dra Morgade me colocó el chip hormonal, a los cinco días ya no me dolía más ni los pies ni las manos. Hoy 9 de abril los sofocos desaparecieron en un 90%, y la líbido aumentó al 100%. Mujeres que estén en menopausia, se los recomiendo a morir.. Es más se me fue la resequedad, que para nosotras que transitamos menopausia es crucial ¡Me lo volvería a Colocar si la Dra me lo indica!"></Testimonios>
            <Testimonios tratamiento="Tratamiento por Alopecia" paciente="Carlos" devolucion="Paciente de hace años que retoma tratamiento con la Dra Morgade, siempre un amor, actualizada en lo científico, profesional excelente, en lo personal encantadora, con escucha activa y contención afectiva siempre que la hemos necesitado. Atención personalizada y muy cuidada desde la recepción hasta la consulta con la Dra que ha cuidado de mí y de mi familia. Recomiendo este espacio de salud con absoluta confianza"></Testimonios>
            <Testimonios tratamiento="Relleno de labios" paciente="Florencia" devolucion="Me realicé un tratamiento de relleno e hidratación de labios y estoy encantada con el resultado. Desde el primer momento me sentí súper contenida y asesorada por la doctora. El procedimiento fue rápido y muy cuidado. Mis labios quedaron más definidos, con más volumen y fomra natural. La hidratación se nota al instante y es un viaje de ida. Cuando la Dra. me lo recomiende sin dudas voy a repetir el tratamiento."></Testimonios>


        </section>
        <CarruselMarcas></CarruselMarcas>
    </>
}