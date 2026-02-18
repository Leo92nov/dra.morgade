import CardServiciosHorizontal1 from "./CardServiciosHorizontal1";
import CardServiciosHorizontal2 from "./CardServiciosHorizontal2";

export default function ServiciosView() {



    return <>

        <h1 className="mt-10 text-3xl text-center">Nuestros Servicios</h1>
        <div className="my-8">
            <CardServiciosHorizontal1 img="/ArticleServ/facial.jpg" titulo="Estética Facial" parrafo="Los tratamientos de estética facial están orientados a mejorar la calidad de la piel y resaltar la belleza natural del rostro de forma segura y personalizada. Permiten prevenir y tratar signos de envejecimiento, manchas, líneas de expresión, flacidez y deshidratación, favoreciendo una piel más luminosa, uniforme y saludable, con resultados progresivos que respetan la expresión natural y acompañan el paso del tiempo." ></CardServiciosHorizontal1>
            <CardServiciosHorizontal2 img="/ArticleServ/corporal.png" titulo="Estética Corporal" parrafo="Los tratamientos de estética corporal están diseñados para mejorar la apariencia y la calidad de la piel, ayudando a reducir adiposidad localizada, flacidez, celulitis y retención de líquidos. A través de técnicas personalizadas y tecnología específica, permiten modelar la silueta de manera progresiva y natural, favoreciendo una piel más firme, uniforme y saludable, respetando las características corporales de cada persona." ></CardServiciosHorizontal2>
            <CardServiciosHorizontal1 img="/ArticleServ/Masculina.jpg" titulo="Estética Masculina" parrafo="Los tratamientos de estética masculina están orientados a mejorar la calidad de la piel y la apariencia general, respetando las características propias del rostro y el cuerpo masculino. Incluyen abordajes para el cuidado facial y corporal, tratamientos capilares orientados a la alopecia y terapias médicas destinadas a optimizar los niveles hormonales, contribuyendo a la recuperación de la vitalidad y el bienestar. Su objetivo es lograr resultados naturales que acompañen el paso del tiempo, favoreciendo una imagen más saludable, armónica y cuidada." ></CardServiciosHorizontal1>
            <CardServiciosHorizontal2 img="/ArticleServ/nutricion.webp" titulo="Consultoría de Nutrición" parrafo="La consultoría nutricional orientada al descenso de peso está enfocada en mejorar la composición corporal y promover hábitos alimentarios sostenibles en el tiempo. A través de planes personalizados adaptados a las necesidades y objetivos de cada persona, se busca reducir el exceso de grasa corporal de manera progresiva y saludable, favoreciendo el equilibrio metabólico, el bienestar general y el mantenimiento de los resultados a largo plazo." ></CardServiciosHorizontal2>

        </div>


    </>

}