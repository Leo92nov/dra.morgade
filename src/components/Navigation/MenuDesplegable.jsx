import { Link } from "react-router-dom";
import CardMenuDesplegable from "./CardMenuDesplegable";

export default function MenuDesplegable() {
    return (
        <section
            className="
        w-auto 
        h-auto 

        
        bg-white/90
        backdrop-blur-lg
        border border-white/30
        shadow-lg
      "
        >
            <ul>
                {/* <Link to="/Servicios/Facial"> <li className="text-xl hover:bg-red-100 p-4 italic">Estética Facial</li></Link> */}
                <Link to="/Servicios/Facial"> <li className="text-xl hover:bg-red-100 p-4 italic"><CardMenuDesplegable
                
                to="/Servicios/Facial"
            /></li></Link> 
                <Link to="/Servicios/Corporal"><li className="text-xl hover:bg-red-100 p-4 italic">Estética Corporal</li></Link>
                <Link to="/Servicios/Masculinos"><li className="text-xl hover:bg-red-100 p-4 italic">Estetica masculina</li></Link>
                <Link to="/Servicios/Nutricion"><li className="text-xl hover:bg-red-100 p-4 italic">Medicina Funcional</li></Link>
            </ul>
            { <CardMenuDesplegable
                
                to="/Servicios/Facial"
            />
/*
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
            /> */}
        </section>
    );
}