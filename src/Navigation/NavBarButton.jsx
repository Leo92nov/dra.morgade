import { Link } from "react-router-dom";


export default function NavBarButton({to, nombre}){

    return<>

    

        <button className="text-[#004225] text-2xl border-t-2 border-transparent hover:border-t-[#004225]"><Link to={to}>{nombre}</Link></button>

    
    </>
}