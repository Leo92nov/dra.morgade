import CardMenuDesplegable from "./CardMenuDesplegable";

export default function MenuDesplegable() {
    return (
        <section
            className="
        w-full 
        h-80 
        mt-12 
        p-4
        flex justify-around items-center
        
        bg-white/30
        backdrop-blur-lg
        border border-white/30
        shadow-lg
      "
        >
            <CardMenuDesplegable
                img="/NavBar/facial.png"
                titulo="Estética Facial"
                to="/Servicios/Facial"
            />

            <CardMenuDesplegable
                img="/NavBar/corporal.jpg"
                titulo="Estética Corporal"
                to="/Servicios/Corporal"
            />

            <CardMenuDesplegable
                img="/NavBar/masculina.png"
                titulo="Estética Masculina"
                to="/Servicios/Masculinos"
            />

            <CardMenuDesplegable
                img="/NavBar/nutricion.webp"
                titulo="Consultoria de Nutricion"
                to="/Servicios/Nutricion"
            />
        </section>
    );
}