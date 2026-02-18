import NavBarButton from "./NavBarButton";

export default function NavBar() {

    return <>

        <header className="h-auto">

        
            <nav className="w-[60%] h-auto mx-auto ">

                <section className="w-100% flex justify-between items-center">

                    <div className="w-[25%]">
                        <img className="h-auto w-full pt-1" src="/NavBar/dra3.png" alt="" />
                    </div>

                    <div className="w-1/2 flex gap-8 justify-end items-center">
                        <NavBarButton nombre="Inicio" to="/"></NavBarButton>
                        <NavBarButton nombre="Servicios" to="/Servicios"></NavBarButton>
                        <NavBarButton nombre="Nosotras" to="/Nosotras"></NavBarButton>
                        <NavBarButton nombre="Contacto" to="/Contacto"></NavBarButton>

                    </div>

                </section>
            </nav>
        </header>

    </>
}