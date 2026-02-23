export default function CardServiciosHome({ img, servicio }) {

    function handleClick() {
        window.location.href = '/Servicios'
    }

    return (
        <>
            <article className="w-50">

                {/* Contenedor para recortar el zoom */}
                <div className="overflow-hidden rounded-2xl">
                    <img
                        className="
                            h-50 w-50 object-cover
                            transition-transform duration-700 ease-out
                            hover:scale-[1.06]
                        "
                        src={img}
                        alt=""
                    />
                </div>

                <h2 className="text-center mt-2 text-xl font-garamond">{servicio}</h2>

                <div className="w-[50%] border border-[#D6CBCB] mx-auto my-4"></div>

                <p className="font-montserrat text-sm">Lorem ipsum dolor sit amet conse ctetur adi pisi cing elit.</p>

                <div className="flex justify-center">
                    <button
                        className="
                            cursor-pointer mt-4 text-center
                            border border-[#D6CBCB] font-garamond text-lg
                            hover:text-white hover:bg-[#7B5D69]
                            rounded-2xl p-1
                            hover:scale-105
                            transition-transform duration-300
                        "
                        onClick={handleClick}
                    >
                        Conocer más...
                    </button>
                </div>

            </article>
        </>
    )
}
