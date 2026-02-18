import { Link } from "react-router-dom"

export default function CardMenuDesplegable({to, img, titulo}) {


    return <>

        <div className=" w-[20%] bg-pik-200 flex flex-col justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Link to={to}>
            <img className="h-[80%] rounded-xl" src={img}></img>
            <h2 className="text-xl text-center">{titulo}</h2></Link>
        </div>

    </>

}
