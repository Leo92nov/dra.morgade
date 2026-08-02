import { MessageCircle, MapPin, Clock3, Navigation } from "lucide-react";
import MapaComponent from "./MapaComponent";

export default function ContactView() {
  const telefono = "5491168638712";

  const mensajeWhatsApp = encodeURIComponent(
    "¡Hola Dra. Morgade! Me gustaría solicitar un turno."
  );

  return (
    <main
      className="
        relative min-h-screen w-full overflow-hidden
        bg-gradient-to-b
        from-[#f5f5f3]
        via-[#fbfaf6]
        to-[#eef3ec]
      "
    >
      {/* Decoración general de fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute -left-32 top-32
            h-96 w-96 rounded-full
            bg-[#27532f]/5 blur-3xl
          "
        />

        <div
          className="
            absolute -right-32 top-[35%]
            h-96 w-96 rounded-full
            bg-[#d8d0bf]/40 blur-3xl
          "
        />
      </div>

      <div className="h-16" />

      {/* ENCABEZADO */}
      <header className="relative z-10 px-4 text-center">
        <p
          className="
            font-montserrat text-xs font-semibold
            uppercase tracking-[0.3em]
            text-[#69806e]
          "
        >
          Estamos para acompañarte
        </p>

        <h1
          className="
            py-4 font-garamond
            text-4xl font-semibold
            text-[#27532f]
            sm:text-5xl
          "
        >
          Acercate a conocernos
        </h1>

        <div className="mx-auto h-px w-24 bg-[#b8aa8e]" />

      </header>

      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* MAPA + INFORMACIÓN */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* MAPA */}
            <article
              className="
                relative overflow-hidden
                rounded-3xl
                border border-[#d8d0bf]
                bg-gradient-to-br
                from-[#eef3ec]
                via-[#fbfaf6]
                to-[#f2eee4]
                shadow-[0_18px_45px_rgba(39,83,47,0.10)]
              "
            >
              <div className="pointer-events-none absolute inset-0 z-10">
                <div
                  className="
                    absolute -left-16 -top-16
                    h-44 w-44 rounded-full
                    bg-[#27532f]/10 blur-3xl
                  "
                />
              </div>

              <div className="relative h-full min-h-[420px] overflow-hidden">
                <MapaComponent />
              </div>
            </article>

            {/* INFORMACIÓN */}
            <article
              className="
                relative flex flex-col justify-between
                overflow-hidden rounded-3xl
                border border-[#d8d0bf]
                bg-gradient-to-br
                from-[#eef3ec]
                via-[#fbfaf6]
                to-[#f2eee4]
                p-6
                shadow-[0_18px_45px_rgba(39,83,47,0.10)]
                sm:p-10
              "
            >
              {/* Decoración suave */}
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="
                    absolute -right-20 -top-20
                    h-56 w-56 rounded-full
                    bg-[#27532f]/10 blur-3xl
                  "
                />
              </div>

              <div className="relative z-10">
                <p
                  className="
                    mb-2 font-montserrat text-xs font-semibold
                    uppercase tracking-[0.25em]
                    text-[#69806e]
                  "
                >
                  Información de contacto
                </p>

                <h2
                  className="
                    font-garamond text-3xl
                    font-semibold text-[#27532f]
                  "
                >
                  Clínica de Nutrición y Estética
                </h2>

                <div className="mt-3 h-px w-24 bg-[#b8aa8e]" />

                <div className="mt-8 space-y-7">
                  {/* DIRECCIÓN */}
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-[#27532f]/10
                        text-[#27532f]
                      "
                    >
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <p
                        className="
                          font-montserrat text-xs font-semibold
                          uppercase tracking-[0.18em]
                          text-[#69806e]
                        "
                      >
                        Dirección
                      </p>

                      <p
                        className="
                          mt-2 font-montserrat
                          leading-7 text-[#556057]
                        "
                      >
                        Mendoza 1667, Quo Container Center
                      </p>

                      <p className="font-montserrat text-[#556057]">
                        Piso 1, Local 17
                      </p>
                    </div>
                  </div>

                  {/* TELÉFONO */}
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-[#27532f]/10
                        text-[#27532f]
                      "
                    >
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div>
                      <p
                        className="
                          font-montserrat text-xs font-semibold
                          uppercase tracking-[0.18em]
                          text-[#69806e]
                        "
                      >
                        Teléfono / WhatsApp
                      </p>

                      <a
                        href={`https://wa.me/${telefono}?text=${mensajeWhatsApp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          mt-2 inline-block
                          font-montserrat
                          text-[#27532f]
                          underline underline-offset-4
                          transition-opacity duration-300
                          hover:opacity-70
                        "
                      >
                        (+54 11) 15-6863-8712
                      </a>
                    </div>
                  </div>

                  {/* HORARIOS */}
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-[#27532f]/10
                        text-[#27532f]
                      "
                    >
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <div>
                      <p
                        className="
                          font-montserrat text-xs font-semibold
                          uppercase tracking-[0.18em]
                          text-[#69806e]
                        "
                      >
                        Horarios de atención
                      </p>

                      <ul
                        className="
                          mt-2 space-y-1
                          font-montserrat
                          leading-7 text-[#556057]
                        "
                      >
                        <li>Martes a viernes: 10:00 h a 19:00 h</li>
                        <li>Sábados, domingos y lunes: cerrado</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTONES */}
              <div
                className="
                  relative z-10 mt-10
                  flex flex-col gap-4
                  sm:flex-row
                "
              >
                <a
                  href={`https://wa.me/${telefono}?text=${mensajeWhatsApp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex h-12
                    items-center justify-center
                    gap-3 rounded-full
                    border border-[#27532f]
                    bg-[#27532f]
                    px-7
                    font-garamond text-lg text-white
                    shadow-[0_10px_25px_rgba(39,83,47,0.20)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    hover:bg-[#1f4326]
                  "
                >
                  <MessageCircle className="h-5 w-5" />
                  Consultar
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Clínica+de+Nutrición+y+Estética+Dra+Verónica+Morgade+Quo+Container+Mendoza+1667+Ingeniero+Maschwitz+Buenos+Aires"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex h-12
                    items-center justify-center
                    gap-3 rounded-full
                    border border-[#27532f]
                    bg-white/40
                    px-7
                    font-garamond text-lg
                    text-[#27532f]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    hover:bg-[#27532f]
                    hover:text-white
                  "
                >
                  <Navigation className="h-5 w-5" />
                  Cómo llegar
                </a>
              </div>
            </article>
          </div>

          {/* BANNER SOLICITAR TURNO */}
          <section
            className="
              relative mt-10 w-full overflow-hidden
              rounded-3xl border border-[#d8d0bf]
              bg-gradient-to-r
              from-[#eef3ec]
              via-[#fbfaf6]
              to-[#f2eee4]
              px-6 py-8
              shadow-[0_12px_35px_rgba(39,83,47,0.10)]
              sm:px-10
              lg:px-14
            "
          >
            <div className="pointer-events-none absolute inset-0">
              <div
                className="
                  absolute -left-20 -top-24
                  h-56 w-56 rounded-full
                  bg-[#27532f]/10 blur-3xl
                "
              />

              <div
                className="
                  absolute -bottom-28 right-0
                  h-64 w-64 rounded-full
                  bg-[#d8d0bf]/60 blur-3xl
                "
              />
            </div>

            <div
              className="
                relative z-10
                flex flex-col items-center justify-between
                gap-7 text-center
                lg:flex-row lg:text-left
              "
            >
              <div className="max-w-2xl">
                <p
                  className="
                    mb-2 font-montserrat text-xs font-semibold
                    uppercase tracking-[0.25em]
                    text-[#69806e]
                  "
                >
                  Atención personalizada
                </p>

                <h2
                  className="
                    font-garamond text-3xl
                    font-semibold text-[#27532f]
                    sm:text-4xl
                  "
                >
                  Solicitá un turno con nuestro equipo
                </h2>

                <div className="mx-auto mt-3 h-px w-24 bg-[#b8aa8e] lg:mx-0" />

                <p
                  className="
                    mt-4 font-montserrat
                    text-sm leading-7 text-[#556057]
                    sm:text-base
                  "
                >
                  Comunicate con nosotros por WhatsApp para coordinar tu consulta
                  y recibir asesoramiento sobre el tratamiento indicado para vos.
                </p>
              </div>

              <a
                href={`https://wa.me/${telefono}?text=${mensajeWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex min-w-[240px]
                  shrink-0 items-center justify-center
                  gap-3 rounded-full
                  border border-[#27532f]
                  bg-[#27532f]
                  px-8 py-3.5
                  font-garamond text-lg text-white
                  shadow-[0_10px_25px_rgba(39,83,47,0.22)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:bg-[#1f4326]
                  hover:shadow-[0_15px_30px_rgba(39,83,47,0.28)]
                "
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar turno
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}