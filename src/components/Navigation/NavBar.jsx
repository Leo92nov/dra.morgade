import { useEffect, useState } from "react";
import NavBarButton from "./NavBarButton";
import NavBarButtonServicios from "./NavBarButtonServicios";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // cambia estilo al bajar un poquito
      setIsScrolled(currentScroll > 20);

      // esconder/mostrar según dirección
      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const darkText = isScrolled; // cuando se scrollea, texto oscuro (sobre fondo blanco más sólido)

  return (
    <>
      {/* Spacer para que el contenido no quede debajo del fixed */}
      <div className="h-[90px] bg-gray-500" />

      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${show ? "translate-y-0" : "-translate-y-full"}
          ${
            isScrolled
              ? "bg-white/10 backdrop-blur-md shadow-md"
              : "bg-white/30 backdrop-blur-md"
          }
        `}
      >
        <nav className="w-full mx-auto">
          <section className="w-full flex justify-between items-center">
            <div className="w-full flex 2xl:gap-16 md:gap-8 justify-center items-center">
              <NavBarButton nombre="Inicio" to="/" darkText={darkText} />

              <NavBarButtonServicios
                nombre="Servicios"
                to="/Servicios"
                darkText={darkText}
              />

              <div className="w-[25%]">
                <img className="h-[100px] w-full pt-1" src="/Logos/vm(3)4.png" alt="" />
              </div>

              <NavBarButton nombre="Nosotras" to="/Nosotras" darkText={darkText} />
              <NavBarButton nombre="Contacto" to="/Contacto" darkText={darkText} />
            </div>
          </section>
        </nav>
      </header>
    </>
  );
}
