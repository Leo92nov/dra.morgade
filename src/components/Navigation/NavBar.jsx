import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavBarButton from "./NavBarButton";
import NavBarButtonServicios from "./NavBarButtonServicios";
import { servicios } from "../../asyncMock"; // 👈 AJUSTÁ esta ruta

export default function NavBar() {
  const [show, setShow] = useState(true);

  // Mobile states
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const lastScrollRef = useRef(0);

  // ✅ categorías dinámicas: /Servicios/:categoria
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

  // helper para URL-safe (sin espacios/acentos)
  const slug = (str = "") =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .replace(/\s+/g, "");

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
        {/* ====================== */}
        {/* MOBILE/TABLET (<lg)    */}
        {/* ====================== */}
        <section className="lg:hidden w-full">
          <div className="w-full flex items-center justify-between px-4">
            {/* Logo izquierda */}
            <Link to="/" className="flex items-center py-2" onClick={closeAll}>
              <img className="h-[72px] w-auto" src="/Logos/logonv.webp" alt="" />
            </Link>

            {/* Hamburguesa derecha */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-3 rounded-xl hover:bg-black/5 active:scale-95 transition"
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
            >
              <span className="block w-6 h-[2px] bg-black mb-1" />
              <span className="block w-6 h-[2px] bg-black mb-1" />
              <span className="block w-6 h-[2px] bg-black" />
            </button>
          </div>

          {/* Panel desplegable hacia abajo */}
          <div
            className={`
              overflow-hidden
              transition-all duration-300 ease-out
              ${mobileOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div
              className={`
                px-4 pb-4
                transition-transform duration-300 ease-out
                ${mobileOpen ? "translate-y-0" : "-translate-y-2"}
              `}
            >
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  to="/"
                  className="w-full px-4 py-3 rounded-xl hover:bg-black/5 transition"
                  onClick={closeAll}
                >
                  <h2 className="text-xl font-garamond">Inicio</h2>
                </Link>

                {/* Servicios + submenú */}
<div className="relative">
  <button
    type="button"
    onClick={() => setServicesOpen((v) => !v)}
    className="w-full px-4 py-3 rounded-xl hover:bg-black/5 transition flex items-center justify-between"
    aria-expanded={servicesOpen}
  >
    <h2 className="text-xl font-garamond">Servicios</h2>
    <span className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
      ▾
    </span>
  </button>

  {/* MOBILE (<lg): dropdown hacia abajo */}
  <div
    className={`
      lg:hidden
      mt-2 ml-2
      rounded-2xl bg-white 
      transition-all duration-200
      ${servicesOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"}
      overflow-hidden
    `}
  >
    <div className="p-2">
      <Link
        to="/Servicios"
        className="block px-3 py-2 rounded-xl hover:bg-black/5 transition text-[#7B5D69] font-semibold"
        onClick={closeAll}
      >
       <p className="font-garamond text-xl">Ver todos</p>
      </Link>

      <div className="my-1 h-px bg-[#7B5D69]/70" />

      {categorias.map((cat) => (
        <Link
          key={cat}
          to={`/Servicios/${slug(cat)}`}
          className="block px-3 py-2 rounded-xl hover:bg-black/5 transition"
          onClick={closeAll}
        >
          {cat}
        </Link>
      ))}
    </div>
  </div>

  {/* DESKTOP (>=lg): submenú hacia la izquierda */}
  <div
    className={`
      hidden lg:block
      absolute top-0 right-full mr-2 z-50
      w-[240px]
      rounded-2xl shadow-lg bg-white border border-black/10
      origin-top-right
      transition-all duration-200
      ${
        servicesOpen
          ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
          : "opacity-0 scale-95 translate-x-2 pointer-events-none"
      }
    `}
  >
    <div className="p-2">
      <Link
        to="/Servicios"
        className="block px-3 py-2 rounded-xl hover:bg-black/5 transition font-semibold"
        onClick={closeAll}
      >
        Ver todos
      </Link>

      <div className="my-1 h-px bg-black/10" />

      {categorias.map((cat) => (
        <Link
          key={cat}
          to={`/Servicios/${slug(cat)}`}
          className="block px-3 py-2 rounded-xl hover:bg-black/5 transition"
          onClick={closeAll}
        >
          {cat}
        </Link>
      ))}
    </div>
  </div>
</div>

                <Link
                  to="/Nosotras"
                  className="w-full px-4 py-3 rounded-xl hover:bg-black/5 transition"
                  onClick={closeAll}
                >
                 <h2 className="text-xl font-garamond">Nosotras</h2>
                </Link>

                <Link
                  to="/Contacto"
                  className="w-full px-4 py-3 rounded-xl hover:bg-black/5 transition"
                  onClick={closeAll}
                >
                  <h2 className="text-xl font-garamond">Contacto</h2>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== */}
        {/* DESKTOP (>=lg)         */}
        {/* ====================== */}
        <section className="hidden lg:block w-full">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex 2xl:gap-16 md:gap-8 justify-center items-center">
              <NavBarButton nombre="Inicio" to="/" darkText={true} />
              <NavBarButtonServicios nombre="Servicios" to="/Servicios" darkText={true} />

              <div className="w-[25%] lg:w-[35%] xl:w-[25%]">
                <Link to="/">
                  <img className="h-[100px] w-full pt-1" src="/Logos/logonv.webp" alt="" />
                </Link>
              </div>

              <NavBarButton nombre="Nosotras" to="/Nosotras" darkText={true} />
              <NavBarButton nombre="Contacto" to="/Contacto" darkText={true} />
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
}