import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBarButton from "./NavBarButton";
import NavBarButtonServicios from "./NavBarButtonServicios";
import { servicios } from "../../asyncMock";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
const location = useLocation();
const isHome = location.pathname === "/";
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
  className={`sticky top-0 z-50 w-full bg-transparent transition-transform duration-300 ${
    !isHome ? "shadow-md border-b border-gray-200" : ""
  } ${
    show ? "translate-y-0" : "-translate-y-full"
  }`}
>
      <nav className="w-full mx-auto">

        {/* MOBILE */}
<section className="lg:hidden w-full">
  {/* Logo */}
  <div className="w-full flex flex-col items-center pt-3 pb-4">
    <Link
      to="/"
      className="flex justify-center"
      onClick={closeAll}
    >
      <img
        className="h-[72px] w-auto"
        src="/Logos/logonv.webp"
        alt="Dra. Verónica Morgade"
      />
    </Link>

    {/* Línea + hamburguesa */}
    <button
      type="button"
      onClick={() => setMobileOpen((v) => !v)}
      aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
      className="mt-3 flex w-full items-center justify-center px-4"
    >
      <span className="h-px flex-1 bg-[#d8d0bf]" />

      <span className="relative mx-5 flex h-6 w-6 items-center justify-center">
        <span
          className={`absolute h-[2px] w-6 bg-[#27532f] transition-all duration-300 ${
            mobileOpen ? "rotate-45" : "-translate-y-2"
          }`}
        />

        <span
          className={`absolute h-[2px] w-6 bg-[#27532f] transition-all duration-300 ${
            mobileOpen ? "opacity-0" : ""
          }`}
        />

        <span
          className={`absolute h-[2px] w-6 bg-[#27532f] transition-all duration-300 ${
            mobileOpen ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </span>

      <span className="h-px flex-1 bg-[#d8d0bf]" />
    </button>
  </div>

  {/* Menú desplegable */}
  <div
    className={`overflow-hidden transition-all duration-300 ease-out ${
      mobileOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="px-4 pt-4 pb-4">
      <div className="flex flex-col gap-2">

        <Link
          to="/"
          className="px-4 py-3 rounded-xl hover:bg-black/5"
          onClick={closeAll}
        >
          <h2 className="text-xl font-garamond">Inicio</h2>
        </Link>

        <Link
          to="/Servicios"
          className="px-4 py-3 rounded-xl hover:bg-black/5"
          onClick={closeAll}
        >
          <h2 className="text-xl font-garamond">Servicios</h2>
        </Link>

        <Link
          to="/Nosotras"
          className="px-4 py-3 rounded-xl hover:bg-black/5"
          onClick={closeAll}
        >
          <h2 className="text-xl font-garamond">Nosotras</h2>
        </Link>

        <Link
          to="/Contacto"
          className="px-4 py-3 rounded-xl hover:bg-black/5"
          onClick={closeAll}
        >
          <h2 className="text-xl font-garamond">Contacto</h2>
        </Link>

      </div>
    </div>
  </div>
</section>

        {/* DESKTOP */}
<section className="hidden lg:block w-full">
  <div className="w-full flex justify-center items-center gap-16">
    <NavBarButton
      nombre="Inicio"
      to="/"
      darkText={!isHome}
    />

    <NavBarButtonServicios
      nombre="Servicios"
      to="/Servicios"
      darkText={!isHome}
    />

    <Link to="/">
      <img className="h-[100px]" src="/Logos/logonv.webp" alt="" />
    </Link>

    <NavBarButton
      nombre="Nosotras"
      to="/Nosotras"
      darkText={!isHome}
    />

    <NavBarButton
      nombre="Contacto"
      to="/Contacto"
      darkText={!isHome}
    />
  </div>
</section>

      </nav>
    </header>
  );
}