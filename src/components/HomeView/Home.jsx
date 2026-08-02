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
    paciente: "Veronica",
    devolucion:
      "Atención perfecta. Las chicas del staff un amor, la dra que me realizó el plasma rico en plaquetas maravillosa! Calidez y una mano increíble! Realmente una experiencia muy linda! Profesionales y atentas! Sumamente recomendado!"
  },
  {
    tratamiento: "Sueroterapia",
    paciente: "Andrea",
    devolucion:
      "Una atención excelente...estoy en tratamiento con muy buenos resultados, la recomiendo siempre! GRACIAS! "
  },
  {
    tratamiento: "Pellet Hormonal",
    paciente: "Facundo",
    devolucion:
      "Excelente atención, mucha profesionalidad. Nunca me atendí con una persona tan dulce y donde se demuestra que le dedica tiempo, desempeño y pasión como la dra Morgade."
  },
  {
    tratamiento: "Tratamiento por Alopecia",
    paciente: "Carlos",
    devolucion:
      "Paciente de hace años que retoma tratamiento con la Dra Morgade, siempre un amor, actualizada en lo científico, profesional excelente, en lo personal encantadora, con escucha activa y contención afectiva siempre que la hemos necesitado. Atención personalizada y muy cuidada desde la recepción hasta la consulta con la Dra que ha cuidado de mí y de mi familia. Recomiendo este espacio de salud con absoluta confianza"
  },
  {
    tratamiento: "Relleno de labios",
    paciente: "Silvia",
    devolucion:
      "La doctora es muy amorosa, me sentí mal y me atendieron muy rápido. Todo el personal muy amoroso. Lo recomiendo 100%."
  },
  {
    tratamiento: "Radiesse",
    paciente: "Macarena",
    devolucion:
      " Hermoso lugar, calidez, atención super conforme con todos mis tratamientos realizados!!!! "
  }
  ];

  return (
    <>
      <CarruselTop />
    <div className="mt-26 mb-[-40px] flex items-center gap-6 ">
  <span className="h-px flex-1 bg-[#d8d0bf]" />

  <h1 className="text-center text-3xl font-garamond" >
    Dra. Verónica Morgade – Medicina Estética y Antiaging - Ingeniero Maschwitz
  </h1>

  <span className="h-px flex-1 bg-[#d8d0bf]" />
</div>
      <section className="my-16">
        <Dra />
      </section>


      <div className="mt-38 mb-8 flex items-center justify-center gap-6">
  <span className="h-px flex-1 bg-[#d8d0bf]" />

  <h2 className="shrink-0 text-center text-3xl font-garamond text-[#31523a]">
    Nuestros tratamientos
  </h2>

  <span className="h-px flex-1 bg-[#d8d0bf]" />
</div>
      <section className="mx-auto flex w-[90%] flex-col gap-20 py-8 xl:w-[80%]">

  <CardServiciosHome index={0}img="/HomeCards/facial.webp" servicio="Estética Facial" descripcion="Se centra en la restauración, rejuvenecimiento y armonización del rostro mediante procedimientos mínimamente invasivos. Su objetivo es optimizar la estructura cutánea y los volúmenes faciales, tratando signos de envejecimiento como arrugas y flacidez, pero siempre priorizando la naturalidad y la salud de la barrera cutánea." />
  <CardServiciosHome index={1} img="/HomeCards/corporal.webp" servicio="Estética Corporal" descripcion="Es el conjunto de protocolos terapéuticos diseñados para modelar la silueta y mejorar la calidad de los tejidos del cuerpo. Abarca desde la reducción de adiposidad localizada y el tratamiento de la celulitis hasta la reafirmación dérmica, combinando tecnología de vanguardia con un enfoque integral en la composición corporal."/>
  <CardServiciosHome index={2} img="/HomeCards/capilar.webp" servicio="Tratamiento Capilar" descripcion="Esta disciplina se enfoca en la restauración de la salud del cuero cabelludo y el fortalecimiento de la unidad folicular. A través de protocolos avanzados de bioestimulación, buscamos optimizar el ciclo de crecimiento natural, frenar el debilitamiento prematuro y recuperar el volumen perdido de forma natural y paulatina."/>
  <CardServiciosHome index={3} img="/HomeCards/laser.jpg" servicio="Tratamientos con Láser" descripcion="Representa la vanguardia tecnológica en dermatología y estética. Utiliza energía lumínica de alta precisión para corregir imperfecciones, eliminar lesiones pigmentarias, realizar depilación definitiva o promover la remodelación del colágeno, ofreciendo resultados profundos con tiempos de recuperación mínimos."/>
  <CardServiciosHome index={4} img="/HomeCards/suero.webp" servicio="Medicina Funcional" descripcion="Es un modelo médico que busca identificar la raíz de las enfermedades y desequilibrios, en lugar de solo tratar los síntomas. Considera al paciente como un sistema integrado —genética, entorno y estilo de vida—, enfocándose en la prevención y la optimización del rendimiento orgánico para alcanzar una longevidad saludable."/>
  
</section>

      <CarruselMarcas />
<div className="mt-16 mb-10 flex items-center justify-center gap-6 px-6">
  <span className="h-px flex-1 bg-[#d8d0bf]" />

  <h2 className="shrink-0 text-center text-3xl font-garamond text-[#31523a]">
    Algunos de nuestros resultados
  </h2>

  <span className="h-px flex-1 bg-[#d8d0bf]" />
</div>
      <CarruselAntesDespues></CarruselAntesDespues>

      <section className="mt-20">
        <div className="mt-16 mb-10 flex items-center justify-center gap-6 px-6">
  <span className="h-px flex-1 bg-[#d8d0bf]" />

  <h2 className="shrink-0 text-center text-3xl font-garamond text-[#31523a]">
    Testimonios de nuestros pacientes
  </h2>

  <span className="h-px flex-1 bg-[#d8d0bf]" />
</div>

        <Testimonios items={testimoniosData} />
      </section>

    </>
  );
}
