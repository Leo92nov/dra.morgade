import BeforeAfter from "./BeforeAfter";
import CardServiciosHome from "./CardServiciosHome";
import CarruselAntesDespues from "./CarruselBeforeAfter";
import CarruselMarcas from "./CarruselMarcas";
import CarruselTop from "./CarruselTop";
import Dra from "./Dra";
import Testimonios from "./Testimonios";

export default function Home() {

  const testimoniosData = [
  {
    tratamiento: "Descenso de peso",
    paciente: "Marisa",
    devolucion:
      "Siento que me cambió la vida desde que comencé el tratamiento. No solo he bajado de peso sino que puedo mantenerlo en el tiempo. Además de sentirme súper bien. No me voy a cansar de agradecerle siempre su profesionalismo. Estoy feliz y eso lo resume todo ¡Muchas Gracias!"
  },
  {
    tratamiento: "Sueroterapia",
    paciente: "Mariía Elena",
    devolucion:
      "Mi experiencia con este tratamiento es mucho mas que positiva, fui a consultar a la Dra porque habia llegado a una instancia de mi vida en la cual me sentia muy agotada y practicamente no tenia ganas de nada. Desde que comencé el tratamiento fui notando que empece a recuperar energia como tambien a tener mejoras en la calidad de mi piel, cabello, y hasta de mi estado de animo en general. La verdad es que estoy súper conforme con este tratamiento y lo recomiendo muchisimo ¡Gracias!"
  },
  {
    tratamiento: "Pellet Hormonal",
    paciente: "Lidia",
    devolucion:
      "Para mi colocarme el pellet hormonal con la Dra Morgade fue un antes y un después. Lo llevo puesto recién 15 días... Un 8 de febrero La Dra Morgade me colocó el chip hormonal, a los cinco días ya no me dolía más ni los pies ni las manos. Hoy 9 de abril los sofocos desaparecieron en un 90%, y la líbido aumentó al 100%. Mujeres que estén en menopausia, se los recomiendo a morir.. Es más se me fue la resequedad, que para nosotras que transitamos menopausia es crucial ¡Me lo volvería a Colocar si la Dra me lo indica!"
  },
  {
    tratamiento: "Tratamiento por Alopecia",
    paciente: "Carlos",
    devolucion:
      "Paciente de hace años que retoma tratamiento con la Dra Morgade, siempre un amor, actualizada en lo científico, profesional excelente, en lo personal encantadora, con escucha activa y contención afectiva siempre que la hemos necesitado. Atención personalizada y muy cuidada desde la recepción hasta la consulta con la Dra que ha cuidado de mí y de mi familia. Recomiendo este espacio de salud con absoluta confianza"
  },
  {
    tratamiento: "Relleno de labios",
    paciente: "Florencia",
    devolucion:
      "Me realicé un tratamiento de relleno e hidratación de labios y estoy encantada con el resultado. Desde el primer momento me sentí súper contenida y asesorada por la doctora. El procedimiento fue rápido y muy cuidado. Mis labios quedaron más definidos, con más volumen y forma natural. La hidratación se nota al instante y es un viaje de ida. Cuando la Dra. me lo recomiende sin dudas voy a repetir el tratamiento."
  },
  {
    tratamiento: "Radiesse",
    paciente: "Julia",
    devolucion:
      "Me realicé un tratamiento con Radiesse y la verdad superó mis expectativas. Me lo recomendó la Dra durante una consulta para mejorar la firmeza de mi piel y recuperar volumen de manera natural, y el resultado realmente fue ese. Si bien lleva algo de tiempo ya desde las primeras semanas empecé a notar la piel más tensa, luminosa y con mejor textura. Me encantó que el cambio fuera progresivo y armónico, sin perder mi expresión. Me encontré conocidos que no veía hacía tiempo y me dijeron que rejuveneció mi cara ¡No me lo quiero dejar de hacer!"
  },
  {
    tratamiento: "Hilos PDO",
    paciente: "Graciela",
    devolucion:
      "Me hice un tratamiento con hilos en la cara y estoy más que contenta con el resultado. La Dra. me lo recomendó para mejorar la flacidez y redefinir el contorno de mi cara sin recurrir a cirugía, me daba mucho miedo, pero la Dra. fue súper comprensiva y paciente conmigo. En el momento ya noté la piel más firme y tensada, con un lifting leve pero que favoreció mucho mi cara. El tratamiento fue rápido y prácticamente indoloro. Nunca me había hecho hilos, pero me los voy a volver a colocar si la Dra. me lo recomienda. Estoy súper conforme con todo."
  },
  {
    tratamiento: "Sueroterapia",
    paciente: "Valentino",
    devolucion:
      "Después de contarle a la Dra. en la consulta sobre cómo me sentía desganado y molesto todo el tiempo, me recomendó un tratamiento de sueroterapia, el cambio llegó bastante rápido, al día siguiente diría y fue notable. Recuperé vitalidad, mi estado de ánimo dio un giro de 180 grados y hasta juraría que descanso mejor. Me gustó porque me sentí escuchado mientras estábamos en la consulta y me recomendó algo que realmente me ayudó. El tratamiento es bastante simple siento que me hizo muy bien."
  },
    {
      tratamiento: "Pellet Hormonal",
      paciente: "Barbara",
      devolucion:
        "Atravesar la menopausia estaba siendo mucho más difícil de lo que imaginaba. Me sentía cansada, con cambios de ánimo todo el tiempo. Después de conversar con la doctora decidí colocarme el pellet hormonal y la verdad es que si lo hubiera conocido antes lo hubiera hecho inmediatamente. No esperaba que funcione tan bien, en pocos días empecé a sentirme con más energía, descansaba mejor y hasta los cambios de ánimo y los sofocos se redujeron muchísimo. Me siento mas vital, con bienestar y hasta con más libido ¡El mejor autorregalo que podés hacerte!"
    }
  ];

  return (
    <>
      <CarruselTop />

      <section className="my-16">
        <Dra />
      </section>

      <h2 className="text-center text-4xl my-8 bg-gray-200">Nuestros tratamientos</h2>
      <section className="flex justify-center gap-12 flex-wrap xl:w-[80%] lg:w-[90%] mx-auto">
        <CardServiciosHome img="/HomeCards/facial.webp" servicio="Facial" />
        <CardServiciosHome img="/HomeCards/corporal.webp" servicio="Corporal" />
        <CardServiciosHome img="/HomeCards/capilar.webp" servicio="Capilar" />
        <CardServiciosHome img="/HomeCards/suero.webp" servicio="Sueros" />
        <CardServiciosHome img="/HomeCards/nutricion.webp" servicio="Nutricion" />
      </section>

      <CarruselMarcas />

      <h2 className="text-center text-4xl mt-18 bg-gray-200">
        Algunos de nuestros resultados
      </h2>

      <CarruselAntesDespues></CarruselAntesDespues>

      <section className="mt-20">
        <h2 className="text-center text-4xl mb-10 bg-gray-200">Nuestros pacientes</h2>

        <Testimonios items={testimoniosData} />
      </section>

    </>
  );
}
