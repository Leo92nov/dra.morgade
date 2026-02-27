import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavBarButton from "./NavBarButton";
import NavBarButtonServicios from "./NavBarButtonServicios";
import { servicios } from "../../asyncMock";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const lastScrollRef = useRef(0);

  const categorias = useMemo(() => {
    const cats = servicios?.map((s) => s.servicio).filter(Boolean) ?? [];
    return [...new Set(cats)];
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const last = lastScrollRef.current;

      if (currentScroll > last && currentScroll > 80) setShow(false);
      else setShow(true);

      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) setServicesOpen(false);
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const slug = (str = "") =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .replace(/\s+/g, "");

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full mx-auto">

        {/* MOBILE */}
        <section className="lg:hidden w-full">
          <div className="w-full flex items-center justify-between px-4">
            <Link to="/" className="flex items-center py-2" onClick={closeAll}>
              <img className="h-[72px] w-auto" src="/Logos/logonv.webp" alt="" />
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-3 rounded-xl hover:bg-black/5 active:scale-95 transition"
            >
              <span className="block w-6 h-[2px] bg-black mb-1" />
              <span className="block w-6 h-[2px] bg-black mb-1" />
              <span className="block w-6 h-[2px] bg-black" />
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              mobileOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-4">
              <div className="flex flex-col gap-2 pt-2">

                <Link to="/" className="px-4 py-3 rounded-xl hover:bg-black/5" onClick={closeAll}>
                  <h2 className="text-xl font-garamond">Inicio</h2>
                </Link>

                {/* SERVICIOS */}
                <div>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="w-full px-4 py-3 rounded-xl hover:bg-black/5 flex justify-between"
                  >
                    <h2 className="text-xl font-garamond">Servicios</h2>
                    <span className={servicesOpen ? "rotate-180 transition" : "transition"}>
                      ▾
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-200 overflow-hidden ${
                      servicesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-2">
                      <Link
                        to="/Servicios"
                        className="block px-3 py-2 font-semibold text-[#7B5D69]"
                        onClick={closeAll}
                      >
                        Ver todos
                      </Link>

                      <div className="my-1 h-px bg-[#7B5D69]/70" />

                      {categorias.map((cat) => (
                        <Link
                          key={cat}
                          to={`/Servicios/${slug(cat)}`}
                          className="block px-3 py-2 hover:bg-black/5 rounded-xl"
                          onClick={closeAll}
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/Nosotras" className="px-4 py-3 rounded-xl hover:bg-black/5" onClick={closeAll}>
                  <h2 className="text-xl font-garamond">Nosotras</h2>
                </Link>

                <Link to="/Contacto" className="px-4 py-3 rounded-xl hover:bg-black/5" onClick={closeAll}>
                  <h2 className="text-xl font-garamond">Contacto</h2>
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP */}
        <section className="hidden lg:block w-full">
          <div className="w-full flex justify-center items-center gap-16">
            <NavBarButton nombre="Inicio" to="/" darkText />
            <NavBarButtonServicios nombre="Servicios" to="/Servicios" darkText />
            <Link to="/">
              <img className="h-[100px]" src="/Logos/logonv.webp" alt="" />
            </Link>
            <NavBarButton nombre="Nosotras" to="/Nosotras" darkText />
            <NavBarButton nombre="Contacto" to="/Contacto" darkText />
          </div>
        </section>

      </nav>
    </header>
  );
}