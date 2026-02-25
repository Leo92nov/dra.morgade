import CardServiciosHorizontal1 from "./CardServiciosHorizontal1";
import CardServiciosHorizontal2 from "./CardServiciosHorizontal2";

export default function ServiciosView() {



    return <>

        <h1 className="mt-20 text-3xl font-garamond text-center lg:mb-16 3xl:mb-[-4px] bg-gray-100">Nuestros Servicios</h1>
        <div className="mb-20 h-auto
                        2xl:mb-20">
            <CardServiciosHorizontal1 img="/ArticleServ/facial.webp" titulo="Estética Facial" parrafo="Los tratamientos de estética facial están orientados a mejorar la calidad de la piel y resaltar la belleza natural del rostro de forma segura y personalizada. Permiten prevenir y tratar signos de envejecimiento, manchas, líneas de expresión, flacidez y deshidratación, favoreciendo una piel más luminosa, uniforme y saludable, con resultados progresivos que respetan la expresión natural y acompañan el paso del tiempo." ></CardServiciosHorizontal1>
            <CardServiciosHorizontal2 img="/ArticleServ/corporal.webp" titulo="Estética Corporal" parrafo="Los tratamientos de estética corporal están diseñados para mejorar la apariencia y la calidad de la piel, ayudando a reducir adiposidad localizada, flacidez, celulitis y retención de líquidos. A través de técnicas personalizadas y tecnología específica, permiten modelar la silueta de manera progresiva y natural, favoreciendo una piel más firme, uniforme y saludable, respetando las características corporales de cada persona." ></CardServiciosHorizontal2>
            <CardServiciosHorizontal1 img="/ArticleServ/Masculina.webp" titulo="Tratamiento Capilar" parrafo="Los tratamientos de estética masculina están orientados a mejorar la calidad de la piel y la apariencia general, respetando las características propias del rostro y el cuerpo masculino. Incluyen abordajes para el cuidado facial y corporal, tratamientos capilares orientados a la alopecia y terapias médicas destinadas a optimizar los niveles hormonales, contribuyendo a la recuperación de la vitalidad y el bienestar. Su objetivo es lograr resultados naturales que acompañen el paso del tiempo, favoreciendo una imagen más saludable, armónica y cuidada." ></CardServiciosHorizontal1>
            <CardServiciosHorizontal2 img="/ArticleServ/nutricion.webp" titulo="Medicina Funcional" parrafo="Los tratamientos de medicina funcional están orientados a identificar y abordar los desequilibrios que afectan el funcionamiento integral del organismo. A través de evaluaciones personalizadas y un análisis profundo de los hábitos, el entorno y los parámetros metabólicos, se busca intervenir sobre las causas subyacentes de diversas alteraciones, favoreciendo la recuperación del equilibrio interno. El enfoque se centra en optimizar la función hormonal, digestiva e inmunológica, promoviendo energía sostenida, bienestar general y una mejora progresiva en la calidad de vida a largo plazo." ></CardServiciosHorizontal2>
            <CardServiciosHorizontal1 img="/ArticleServ/laser.webp" titulo="Tratamientos con Láser" parrafo="Los tratamientos con láser en medicina estética están orientados a mejorar la calidad de la piel y optimizar la apariencia general del rostro y el cuerpo. Permiten abordar diversas alteraciones cutáneas como manchas, lesiones pigmentarias, cicatrices, signos de envejecimiento, flacidez leve y vello no deseado, adaptándose a las características y necesidades de cada paciente. Asimismo, existen aplicaciones específicas para el tratamiento vascular y la estimulación del colágeno, favoreciendo una piel más uniforme, luminosa y firme. Cada procedimiento se planifica de manera personalizada, priorizando la seguridad y la obtención de resultados progresivos y naturales." ></CardServiciosHorizontal1>
        </div>


    </>

}