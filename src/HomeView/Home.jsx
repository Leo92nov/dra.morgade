import BeforeAfter from "./BeforeAfter";
import SliderHome from "./SliderHome";

export default function Home() {

    return <>

        <SliderHome></SliderHome>

        <h2 className="text-center text-2xl my-8">Algunos de nuestros resultados</h2>
        <section className="flex flex-wrap">
            <BeforeAfter antes="/antes-despues/antes-frente.jpeg" despues="/antes-despues/despues-frente.jpeg"></BeforeAfter>
            <BeforeAfter antes="/antes-despues/culo-antes.jpeg" despues="/antes-despues/culo-despues.jpeg"></BeforeAfter>
            <BeforeAfter antes="/antes-despues/labios-antes.png" despues="/antes-despues/labios-despues.png"></BeforeAfter>
            <BeforeAfter antes="/antes-despues/antes-frente.jpeg" despues="/antes-despues/despues-frente.jpeg"></BeforeAfter>
        </section>
    </>
}