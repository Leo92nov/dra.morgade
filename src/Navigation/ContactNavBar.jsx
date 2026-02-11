import { Link } from "react-router-dom";
export default function ContactNavBar() {

    return <>

        <section className="w-[100%] h-6 border-b-1 border-gray-300 mb-8 mt-8 flex justify-beetween" >
            <div className="w-[50%] 2xl:w-[70%] mr-auto ml-auto bg-ed-200 flex">
                <section className="flex items-center gap-12 w-1/2 mb-2">
                    <button className="text-gray-400"><Link to="https://wa.me/5491168638712">(+54 11) 15-6863-8712 </Link></button>
                    <a href="mailto:lnonino92@gmail.com?subject=Consulta&body=Hola%20quiero%20información" className="text-gray-400">lnonino92@gmail.COM</a>
                </section>

                <section className="flex w-1/2">

                    <ul className="w-full flex justify-end items-center gap-2 mb-2">
                        <li className="w-6 h-6">
                            <a className="w-full h-full" href="https://www.instagram.com/dra.morgade">
                                <img className="w-full h-full" src="/NavBar/ig.svg" alt="" />
                            </a>
                        </li>
                        <li className="w-6 h-6">
                            <a className="w-full h-full" href="https://www.facebook.com/dra.morgade">
                                <img className="w-full h-full hover:text-green-600" src="/NavBar/fb.svg" alt="" />
                            </a>
                        </li>
                        <li className="w-6 h-6">
                            <a className="w-full h-full" href="https://www.facebook.com/dra.morgade">
                                <img className="w-full h-full" src="/NavBar/ytb.svg" alt="" />
                            </a>
                        </li>
                        <li className="w-6 h-6">
                            <a className="w-full h-full" href="https://www.facebook.com/dra.morgade">
                                <img className="w-full h-full" src="/NavBar/gm.svg" alt="" />
                            </a>
                        </li>

                    </ul>

                </section>

            </div>
        </section>

    </>
}