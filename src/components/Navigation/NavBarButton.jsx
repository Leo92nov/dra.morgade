import { Link } from "react-router-dom";


export default function NavBarButton({to, nombre}){

    return<>

    

        <button className="text-gray-500 text-xl border-t-2 border-transparent hover:scale-105 transition-transform duration-300 hover:border-t-[#004225] hover:text-[#004225]"><Link to={to}>{nombre}</Link></button>

    
    </>
}