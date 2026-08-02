import {
  GraduationCap,
  Heart,
  Leaf,
  Sprout,
  UserRound,
} from "lucide-react";

const pilares = [
  {
    id: 1,
    titulo: "Enfoque integral",
    descripcion: "Cuerpo, mente y emociones",
    icono: Leaf,
  },
  {
    id: 2,
    titulo: "Medicina personalizada",
    descripcion: "Cada paciente, único y especial",
    icono: Heart,
  },
  {
    id: 3,
    titulo: "Prevención y hábitos",
    descripcion: "Salud que se construye día a día",
    icono: Sprout,
  },
];

const formacion = [
  "Médica especialista en Estética",
  "Medica Especialista en Medicina Interna",
  "Formación en Nutrición y descenso de peso",
  "Especialización en Medicina Funcional",
  "Diplomatura en Logevidad Saludable y calidad de vida",
];

export default function NosotrasView() {
  return (
    <section
      id="nosotras"
      className="relative overflow-hidden bg-[#fbfaf6] px-6 py-20 text-[#243126] sm:px-10 lg:px-16"
    >
      <DecoracionFondo />

      <div className="relative z-10 mx-auto max-w-7xl">
        <EncabezadoNosotras />

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <FotoDoctora />

          <div className="flex flex-col justify-center">
            <InformacionDoctora />

            <div className="mt-8">
              <Pilares />
            </div>

        </div>
          </div>
            <div className="mt-10">
              <Formacion />
            </div>
      </div>
    </section>
  );
}

function EncabezadoNosotras() {
  return (
    <header className="mx-auto max-w-3xl text-center">

      <h1 className="mt-4 font-serif text-5xl font-medium text-[#31523a] sm:text-6xl lg:text-7xl">
        Dra. Morgade
      </h1>

      <div className="mt-6 flex items-center justify-center gap-4">
        <span className="h-px w-20 bg-[#d8d0bf]" />
        <Leaf className="h-5 w-5 rotate-[-25deg] text-[#78917b]" />
        <span className="h-px w-20 bg-[#d8d0bf]" />
      </div>

      <p className="mt-6 text-lg text-[#3e5945] sm:text-xl">
        Medicina que escucha, acompaña y transforma.
      </p>
    </header>
  );
}

function FotoDoctora() {
  return (
    <div className="relative min-h-[580px] overflow-hidden rounded-[2.5rem] border border-[#ddd5c5] bg-[#f3efe7] shadow-[0_20px_60px_rgba(46,70,52,0.08)]">
      {/* Reemplazá este bloque por una imagen cuando tengas la foto definitiva */}

      

      <img
        src="/Nosotras/dra.jpg"
        alt="Dra. Morgade"
        className="h-full min-h-[580px] w-full object-cover object-center"
      />
      

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#31523a]/10 via-transparent to-white/10" />
    </div>
  );
}

function InformacionDoctora() {
  return (
    <article>
      <p className="font-serif text-3xl text-[#31523a] sm:text-4xl">
        ¿Quién es la Dra. Morgade?
      </p>

      <div className="mt-6 space-y-5 text-base leading-8 text-[#404640] sm:text-lg">
        <p>
          En la clínica de la Dra. Verónica Viviana Morgade, entendemos la estética como el reflejo de una salud óptima. Con una mirada basada en la medicina clínica y funcional, diseñamos tratamientos que potencian tu bienestar desde el interior, logrando resultados reales y duraderos que priorizan el equilibrio, el cuidado médico integral y la vitalidad de tu cuerpo.
        </p>

        <p>
          La Dra. Verónica Viviana Morgade es egresada de la Facultad de Medicina de la Universidad de Buenos Aires con una sólida residencia de cuatro años en Medicina Interna, consolidando más de 25 años de trayectoria en el cuidado de la salud. Con un marcado perfil de actualización científica constante, completó su formación especializada en Metabolismo y Obesidad en prestigiosas instituciones como la Fundación Favaloro, el Hospital Austral y SAOTA.
        </p>

        <p>
          Pionera en el abordaje de la Medicina Funcional y la Longevidad Saludable desde 2008, la Dra. Morgade cuenta además con un destacado respaldo internacional en Medicina Estética avalado por la Unión Internacional de Medicina Estética de París (UIME) y la SOLAGEF. Su enfoque clínico integral se enfoca en potenciar la vitalidad del paciente mediante la optimización nutricional, la actividad física y la regulación hormonal, consolidándola como una referente de confianza para quienes buscan un envejecimiento armónico, preventivo y enfocado en la salud real.
        </p>
      </div>
    </article>
  );
}

function Pilares() {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-[#e5dfd3] bg-white/65 shadow-sm backdrop-blur-sm sm:grid-cols-3">
      {pilares.map((pilar, index) => {
        const Icono = pilar.icono;

        return (
          <article
            key={pilar.id}
            className={`flex flex-col items-center px-6 py-8 text-center ${
              index !== pilares.length - 1
                ? "border-b border-[#e5dfd3] sm:border-b-0 sm:border-r"
                : ""
            }`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8ede4]">
              <Icono className="h-7 w-7 text-[#365e40]" strokeWidth={1.6} />
            </div>

            <h3 className="mt-5 font-medium text-[#2f5038]">{pilar.titulo}</h3>

            <p className="mt-2 max-w-[180px] text-sm leading-6 text-[#5b625c]">
              {pilar.descripcion}
            </p>
          </article>
        );
      })}
    </div>
  );
}

function Formacion() {
  return (
    <section className="w-full">
      <div className="flex items-center gap-5">
        <span className="h-px flex-1 bg-[#d8d0bf]" />

        <h2 className="text-center font-serif text-2xl text-[#31523a] sm:text-3xl">
          Formación y especializaciones
        </h2>

        <span className="h-px flex-1 bg-[#d8d0bf]" />
      </div>

      <div className="mt-6 w-full rounded-3xl border border-[#ddd5c5] bg-white/55 p-7 shadow-sm backdrop-blur-sm sm:p-9">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-start">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8ede4]">
            <GraduationCap
              className="h-7 w-7 text-[#365e40]"
              strokeWidth={1.6}
            />
          </div>

          <div className="flex-1">
            <p className="leading-7 text-[#4b524c]">
              Su formación profesional se complementa con estudios,
              certificaciones y capacitaciones orientadas a brindar una
              atención médica actualizada e integral.
            </p>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {formacion.map((titulo) => (
                <li
                  key={titulo}
                  className="flex items-start gap-3 text-sm leading-6 text-[#37433a]"
                >
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#52705a]" />
                  <span>{titulo}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecoracionFondo() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#e9e5da]/70 blur-3xl" />
      <div className="absolute -right-28 top-8 h-96 w-96 rounded-full bg-[#e7eadf]/80 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#eef0e7]/80 blur-3xl" />

      <svg
        className="absolute left-0 top-0 h-56 w-56 text-[#8ba18c]/40"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-20 70C55 63 92 38 126 -10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M32 59C42 28 60 13 87 4C83 31 67 49 32 59Z"
          fill="currentColor"
        />
        <path
          d="M68 45C79 10 99 -6 128 -10C122 20 103 39 68 45Z"
          fill="currentColor"
        />
        <path
          d="M4 67C12 39 28 24 52 16C49 43 35 58 4 67Z"
          fill="currentColor"
        />
      </svg>

      <svg
        className="absolute bottom-0 right-0 h-64 w-64 rotate-180 text-[#78917b]/30"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-20 70C55 63 92 38 126 -10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M32 59C42 28 60 13 87 4C83 31 67 49 32 59Z"
          fill="currentColor"
        />
        <path
          d="M68 45C79 10 99 -6 128 -10C122 20 103 39 68 45Z"
          fill="currentColor"
        />
        <path
          d="M4 67C12 39 28 24 52 16C49 43 35 58 4 67Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}