export default function MenuDesplegable() {
    return (
        <section className="w-[100%] bg-gray-300 h-80 p-2 mt-8 flex justify-around">

            <div className=" w-[20%] bg-pik-200 flex flex-col justify-center hover:scale-105 transition-transform duration-300">
                <img className="h-[80%] rounded-xl" src="/NavBar/facial.png"></img>
                <h2 className="text-xl text-center">Estética Facial</h2>
            </div>

            <div className=" w-[20%] bg-pik-200 flex flex-col justify-center hover:scale-105 transition-transform duration-300">
                <img className="h-[80%] rounded-xl" src="/NavBar/corporal.jpg"></img>
                <h2 className="text-xl text-center">Estética Corporal</h2>
            </div>

            <div className=" w-[20%] bg-pik-200 flex flex-col justify-center hover:scale-105 transition-transform duration-300">
                <img className="h-[80%] rounded-xl" src="/NavBar/masculina.png"></img>
                <h2 className="text-xl text-center">Estética Masculina</h2>
            </div>

            <div className=" w-[18%] bg-pik-200 flex flex-col justify-center hover:scale-105 transition-transform duration-300">
                <img className="h-[80%] rounded-xl" src="/NavBar/nutricion.webp"></img>
                <h2 className="text-xl text-center">Nutrición</h2>
            </div>
            

        </section>
    );
}