import CardMenuDesplegable from "./CardMenuDesplegable";

export default function MenuDesplegable() {
    return (
        <section className="w-[100%] bg-gray-100 h-80 p-2 mt-12 flex justify-around px-auto">

            <CardMenuDesplegable img="/NavBar/facial.png" titulo="Estética Facial" to="/Servicios/Facial"> </CardMenuDesplegable>
            <CardMenuDesplegable img="/NavBar/corporal.jpg" titulo="Estética Corporal" to="/Servicios/Corporal"> </CardMenuDesplegable>
            <CardMenuDesplegable img="/NavBar/masculina.png" titulo="Estética Masculina" to="/Servicios/Masculinos"> </CardMenuDesplegable>
            <CardMenuDesplegable img="/NavBar/nutricion.webp" titulo="Consultoria de Nutricion" to="/Servicios/Nutricion"> </CardMenuDesplegable>
        
        </section>
    );
}