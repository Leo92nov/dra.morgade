export default function Footer() {

    return <>

        <footer className="bg-[#212121] w-full pb-8 overflow-x-hidden">

            <div className="flex flex-wrap lg:justify-between">

                <section className="flex flex-col gap-4 items-center pl-4 w-[100%]
                                    md:w-[50%] md:flex md:flex-col md:items-center md:mt-12 md:mx-auto 
                                    lg:w-[50%]
                                    2xl:w-[33%] 
                ">
                    <img className="w-20 h-20 mt-2" src="/Logos/logoVMNF.webp" alt="" />
                    <h2 className="text-white pt-2 font-montserrat">Dra. Verónica Morgade</h2>
                    <h2 className="text-white pt-2 font-montserrat">Mendoza 1667 Quo Container Center</h2>
                    <h2 className="text-white pt-2 font-montserrat">Ingeniero Maschwitz CP:1623</h2>
                    <h2 className="text-white pt-2 font-montserrat">Buenos Aires, Argentina</h2>
                    <h2 className="text-white pt-2 font-montserrat">Piso 1 Local 17</h2>
                </section>

                <section className="flex flex-col jutify-start items-center gap-8 w-[100%]
                                    md:w-[70%] md:flex md:flex-col md:items-center md:mt-12 md:mx-auto 
                                    lg:w-[50%]
                                    2xl:w-[33%]">
                    <h2 className="mt-6 text-white font-garamond text-2xl">Veni a Visitarnos!</h2>
                    <iframe className="w-115 h-60 mt-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.48112148252636!2d-58.74722817116939!3d-34.380412567047706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9fc3f5b326f9%3A0x96e9e79868b7a633!2sCl%C3%ADnica%20de%20Nutrici%C3%B3n%20y%20Est%C3%A9tica%20Dra.%20Ver%C3%B3nica%20Morgade!5e0!3m2!1ses!2sar!4v1770841332106!5m2!1ses!2sar" loading="lazy"></iframe>
                </section>

                <section className="mt-2 flex flex-col items-center w-[100%]
                                    md:w-[50%] md:flex md:flex-col md:items-center md:mt-12 md:mx-auto 
                                    lg:w-[50%] lg:flex lg:flex-col lg:items-center lg:mt-12
                                    xl:mt-12
                                    2xl:pl-36 2xl:w-[33%] 2xl:mt-4">

                    <h2 className="text-white pt-4 text-2xl mb-8 font-garamond
                    
                                    xl:text-center ">
                        Nuestras Redes:
                    </h2>
                    <ul className="gap-4 h-auto flex flex-col items-center
                                   lg:flex lg:flex-col lg:items-center
                                   xl:w-[50%]xl:flex xl:flex-col xl:mx-[30%]
                                   2xl:flex 2xl:flex-col 2xl:items-start 2xl:m-0 2xl:w-[100%]
                                   ">
                        <li className="w-[100%] 2xl:w-auto h-10 relative inline-block text-gray-700 font-montserrat hover:text-[#7B5D69] 
                            transition-colors duration-300
                            before:content-['']
                            before:absolute
                            before:left-1/2
                            before:bottom-0
                            before:h-[2px]
                            before:w-0
                            before:bg-[#7B5D69]
                            before:transition-all
                            before:duration-300
                            hover:before:left-0
                            hover:before:w-[105%]">
                            <a className="w-full h-full text-white flex items-center gap-8 italic transition-transform duration-300 hover:scale-101" href="https://www.instagram.com/dra.morgade">
                                <img className="w-6 h-6 transition-transform duration-300 hover:scale-110" src="/NavBar/igF.svg" alt="" /> /dra.morgade
                            </a>
                        </li>
                        <li className="w-[100%] 2xl:w-auto h-10 relative inline-block font-montserrat text-gray-700
          
                            transition-colors duration-400
                            before:content-['']
                            before:absolute
                            before:left-1/2
                            before:bottom-0
                            before:h-[2px]
                            before:w-0
                            before:bg-[#7B5D69]
                            before:transition-all
                            before:duration-300
                            hover:before:left-0
                            hover:before:w-[105%]">
                            <a className="w-full h-full text-white flex items-center gap-8 italic transition-transform duration-300 hover:scale-101" href="https://www.facebook.com/dra.morgade">
                                <img className="w-6 h-6 transition-transform duration-300 hover:scale-110" src="/NavBar/fbF.svg" alt="" /> /dra.morgade
                            </a>
                        </li>
                        <li className="w-[100%] 2xl:w-auto h-10 relative font-montserrat inline-block text-gray-700 
                            hover:text-[#7B5D69] 
                            transition-colors duration-300
                            before:content-['']
                            before:absolute
                            before:left-1/2
                            before:bottom-0
                            before:h-[2px]
                            before:w-0
                            before:bg-[#7B5D69]
                            before:transition-all
                            before:duration-300
                            hover:before:left-0
                            hover:before:w-[105%]">
                            <a className="w-full h-full text-white flex items-center gap-8 italic transition-transform duration-300 hover:scale-101" href="https://wa.me/5491168638712?text=¡Hola%20Dra.%20Morgade!">
                                <img className="w-6 h-6 transition-transform duration-300 hover:scale-110" src="/NavBar/wspF.svg" alt="" /> (+54 11) 15-6863-8712
                            </a>
                        </li>
                        <li className="w-[100%] 2xl:w-auto h-10 relative font-montserrat inline-block text-gray-700
                            hover:text-[#7B5D69] 
                            transition-colors duration-300
                            before:content-['']
                            before:absolute
                            before:left-1/2
                            before:bottom-0
                            before:h-[2px]
                            before:w-0
                            before:bg-[#7B5D69]
                            before:transition-all
                            before:duration-300
                            hover:before:left-0
                            hover:before:w-[105%]">
                            <a className="w-full h-full text-white flex items-center gap-8 italic transition-transform duration-300 hover:scale-101" href="https://www.facebook.com/dra.morgade">
                                <img className="w-6 h-6 transition-transform duration-300 hover:scale-110" src="/Svgs/ytb.svg" alt="" />
                            </a>
                        </li>

                    </ul>

                </section>

            </div>

        </footer>

    </>
}