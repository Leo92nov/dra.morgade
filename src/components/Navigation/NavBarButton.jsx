import { Link } from "react-router-dom";


export default function NavBarButton({to, nombre}){

    return<>

    
<button
  className="
    relative pb-1 pt-4
    text-white text-xl bold
    hover:scale-105
    transition-transform duration-500
    hover:text-[#004225]

    after:content-['']
    after:absolute
    after:left-0
    after:top-0
    after:h-[2px]
    after:w-full
    after:bg-[#004225]
    after:origin-center
    after:scale-x-0
    after:transition-transform
    after:duration-300

    hover:after:scale-x-100
  "
>
  <Link to={to}>{nombre}</Link>
</button>

    
    </>
}