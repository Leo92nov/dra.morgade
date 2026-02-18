import CardServiciosHorizontal1 from "./CardServiciosHorizontal1";
import CardServiciosHorizontal2 from "./CardServiciosHorizontal2";

export default function ServiciosView() {



    return <>

        <h1 className="mt-40 text-3xl text-center">Nuestros Servicios</h1>
        <div className="my-8">
            <CardServiciosHorizontal1 img="/ArticleServ/facial.jpg" titulo="Estética Facial" parrafo="Los tratamientos estéticos faciales son procedimientos diseñados para mejorar la calidad de la piel, mantener su salud y realzar la belleza natural del rostro sin alterar la expresión. Su objetivo principal es prevenir y tratar signos del envejecimiento, manchas, flacidez, líneas de expresión, acné y deshidratación, logrando una apariencia más fresca, luminosa y uniforme.

Estos t del tiempo." ></CardServiciosHorizontal1>
            <CardServiciosHorizontal2 img="/ArticleServ/corporal.webp" titulo="Estética Corporal" parrafo="Los tratamientos estéticos faciales son procedimientos diseñados para mejorar la calidad de la piel, mantener su salud y realzar la belleza natural del rostro sin alterar la expresión. Su objetivo principal es prevenir y tratar signos del envejecimiento, manchas, flacidez, líneas de expresión, acné y deshidratación, logrando una apariencia más fresca, luminosa y uniforme.

iempo." ></CardServiciosHorizontal2>
            <CardServiciosHorizontal1 img="/ArticleServ/Masculina.jpg" titulo="Estética Masculina" parrafo="Los tratamientos estéticos faciales son procedimientos diseñados para mejorar la calidad de la piel, mantener su salud y realzar la belleza natural del rostro sin alterar la expresión. Su objetivo principal es prevenir y tratar signos del envejecimiento, manchas, flacidez, líneas de expresión, acné y deshidratación, logrando una apariencia más fresca, luminosa y uniforme.

adanecido a lo largo del tiempo." ></CardServiciosHorizontal1>
            <CardServiciosHorizontal2 img="/ArticleServ/nutricion.webp" titulo="Consultoría de Nutrición" parrafo="Los tratamientos estéticos faciales son procedimientos diseñados para mejorar la calidad de la piel, mantener su salud y realzar la belleza natural del rostro sin alterar la expresión. Su objetivo principal es prevenir y tratar signos del envejecimiento, manchas, flacidez, líneas de expresión, acné y deshidratación, logrando una apariencia más fresca, luminosa y uniforme.

mejorandoaspecto saludable y rejuvenecido a lo largo del tiempo." ></CardServiciosHorizontal2>

        </div>


    </>

}