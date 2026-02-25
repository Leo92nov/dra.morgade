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
        setShow(false);
      } else {
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
        sticky top-0 z-50 w-full
        bg-white shadow-md
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="w-full mx-auto">
        <section className="w-full flex justify-between items-center">
          <div className="w-full flex 2xl:gap-16 md:gap-8 justify-center items-center">
            <NavBarButton nombre="Inicio" to="/" darkText={true} />

            <NavBarButtonServicios
              nombre="Servicios"
              to="/Servicios"
              darkText={true}
            />

            <div className="w-[25%]">
              <a href="./">
                <img
                  className="h-[100px] w-full pt-1"
                  src="/Logos/logonv.webp"
                  alt=""
                />
              </a>
            </div>

            <NavBarButton nombre="Nosotras" to="/Nosotras" darkText={true} />
            <NavBarButton nombre="Contacto" to="/Contacto" darkText={true} />
          </div>
        </section>
      </nav>
    </header>
  );
}
