import MapaComponent from "./MapaComponent";
import FormularioContactoComponent from "./FormularioContactoComponent"

export default function ContactView() {
  return (
    <main className="w-full bg-[#f5f5f3]">
      
      <div className="h-16" />

      <header className="text-center px-4">
        <h1 className="text-4xl text-[#004225] font-semibold py-6">
          Acercate a conocernos
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Te esperamos para asesorarte con un enfoque médico y personalizado.
        </p>
      </header>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* MAPA */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white">
            <MapaComponent />
          </div>

          {/* INFO */}
          <div className="rounded-2xl shadow-md border border-gray-200 bg-white p-10 flex flex-col justify-between">
            
            <div>
              <h2 className="text-3xl text-[#004225] font-semibold mb-8">
                Clínica de Nutrición y Estética
              </h2>

              <div className="space-y-6 text-gray-700">
                
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500">
                    Dirección
                  </p>
                  <p className="mt-1">
                    Mendoza 1667, Quo Container Center
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500">
                    Teléfono / WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5491168638712"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-[#004225] underline underline-offset-4 hover:opacity-80 transition"
                  >
                    (+54 11) 15-6863-8712
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500">
                    Horarios de atención
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>Martes a Viernes: 10:00 a 19:00</li>
                    <li>Sábados: 10:00 a 14:00</li>
                    <li>Domingos y Lunes: Cerrado</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* BOTONES */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              
              <a
                href="https://wa.me/5491168638712"
                target="_blank"
                rel="noreferrer"
                className="
                  h-12 px-6
                  flex items-center justify-center
                  bg-[#004225]
                  text-white
                  rounded-xl
                  hover:scale-105
                  transition-transform duration-300
                "
              >
                Consultar por WhatsApp
              </a>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="
                  h-12 px-6
                  flex items-center justify-center
                  border border-[#004225]
                  text-[#004225]
                  rounded-xl
                  hover:bg-[#004225] hover:text-white
                  transition-colors duration-300
                "
              >
                Cómo llegar
              </a>

            </div>

          </div>

        </div>
      </section>

     {/*  <FormularioContactoComponent></FormularioContactoComponent> */}

    </main>
    
  );
}
