import ContactNavBar from "./ContactNavBar";
import NavBarButton from "./NavBarButton";

export default function NavBar() {

    return <>

        <header>

            <ContactNavBar></ContactNavBar>
            <nav className="w-[70%] h-auto mr-auto ml-auto">

                <section className="w-100% flex justify-between">

                    <div >
                        <img className="h-30 w-150" src="/NavBar/vero-morgade-header.png" alt="" />
                    </div>

                    <div className="w-1/2 bg-red-200 flex gap-8 justify-end">
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