export default function CardServiciosHome({ img, servicio }) {

    function handleClick() {

        window.location.href = '/Servicios'
    }

    return <>

        <article className="w-50">
            <img className="h-50 w-50 rounded-2xl" src={img} alt="" />
            <h2 className="text-center mt-2 text-xl">{servicio}</h2>
            <div className="w-[50%] border border-[#004225] mx-auto my-4"></div>
            <p>Lorem ipsum dolor sit amet conse ctetur adi pisi cing elit.</p>
            <div className="flex justify-center">
                <button className="cursor-pointer mt-4 text-center border border-[#004225] hover:text-white hover:bg-[#004225] rounded-2xl p-1 hover:scale-115 transition-trnasfor duration-300" onClick={handleClick}>Ver mas...</button>
            </div>
        </article>

    </>

}