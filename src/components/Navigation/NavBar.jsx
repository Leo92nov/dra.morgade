import NavBarButton from "./NavBarButton";

export default function NavBar() {

    return <>

        <header className="">

        
            <nav className="w-[60%] h-auto mx-auto">

                <section className="w-100% flex justify-between items-end">

                    <div className="w-[25%]">
                        <img className="h-auto w-auto" src="/NavBar/vero-morgade-header2.png" alt="" />
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