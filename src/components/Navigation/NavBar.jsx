import { useEffect, useState } from "react";
import NavBarButton from "./NavBarButton";
import NavBarButtonServicios from "./NavBarButtonServicios";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 80) {
      // scroll hacia abajo
      setShow(false);
    } else {
      // scroll hacia arriba
      setShow(true);
    }

    setLastScroll(currentScroll);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScroll]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="w-full mx-auto">
        <section className="w-full flex justify-between items-center">
          <div className="w-full flex 2xl:gap-16 md:gap-8 justify-center items-center">
            <NavBarButton nombre="Inicio" to="/" />
            <NavBarButtonServicios nombre="Servicios" to="/Servicios" />

            <div className="w-[25%]">
              <img className="h-auto w-full pt-1" src="/NavBar/dra3.png" alt="" />
            </div>

            <NavBarButton nombre="Nosotras" to="/Nosotras" />
            <NavBarButton nombre="Contacto" to="/Contacto" />
          </div>
        </section>
      </nav>
    </header>
  );
}
