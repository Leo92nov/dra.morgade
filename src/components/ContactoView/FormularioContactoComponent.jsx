import { useState } from "react";

export default function FormularioContactoComponent() {
  const [contactoForm, setContactoForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setContactoForm({
      ...contactoForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactoFormCreado = {
      id: crypto.randomUUID(),
      ...contactoForm,
    };

    console.log(contactoFormCreado);

    await enviarForm(contactoFormCreado);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 my-12">
      <form
        onSubmit={handleSubmit}
        className="
          max-w-3xl mx-auto
          bg-white
          border border-gray-200
          shadow-md
          rounded-2xl
          p-6 sm:p-10
        "
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#004225]">
            Reserva tu turno
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-24 bg-gradient-to-r from-[#B8963E] via-[#E6C97A] to-[#B8963E]" />

          <p className="mt-4 text-gray-600">
            Completá tus datos y nos contactamos a la brevedad para coordinar.
          </p>
        </div>

        {/* Fields */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Nombre */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={contactoForm.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="
                w-full h-12 px-4
                rounded-xl
                border border-gray-200
                bg-[#fbfbfa]
                focus:outline-none
                focus:ring-2 focus:ring-[#004225]/30
                focus:border-[#004225]/40
                transition
              "
            />
          </div>

          {/* Apellido */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600" htmlFor="apellido">
              Apellido
            </label>
            <input
              id="apellido"
              type="text"
              name="apellido"
              value={contactoForm.apellido}
              onChange={handleChange}
              placeholder="Tu apellido"
              className="
                w-full h-12 px-4
                rounded-xl
                border border-gray-200
                bg-[#fbfbfa]
                focus:outline-none
                focus:ring-2 focus:ring-[#004225]/30
                focus:border-[#004225]/40
                transition
              "
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm text-gray-600" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={contactoForm.email}
              onChange={handleChange}
              placeholder="tuemail@dominio.com"
              className="
                w-full h-12 px-4
                rounded-xl
                border border-gray-200
                bg-[#fbfbfa]
                focus:outline-none
                focus:ring-2 focus:ring-[#004225]/30
                focus:border-[#004225]/40
                transition
              "
            />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm text-gray-600" htmlFor="telefono">
              Teléfono / WhatsApp
            </label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              value={contactoForm.telefono}
              onChange={handleChange}
              placeholder="Ej: +54 9 11 1234-5678"
              className="
                w-full h-12 px-4
                rounded-xl
                border border-gray-200
                bg-[#fbfbfa]
                focus:outline-none
                focus:ring-2 focus:ring-[#004225]/30
                focus:border-[#004225]/40
                transition
              "
            />
            <p className="text-xs text-gray-500">
              Usaremos este número solo para coordinar tu turno.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            Al enviar, aceptás que te contactemos para coordinar.
          </p>

          <button
            type="submit"
            className="
              h-12 px-8
              rounded-xl
              bg-[#004225] text-white
              shadow-sm
              hover:scale-105
              transition-transform duration-300
              w-full sm:w-auto
            "
          >
            Continuar
          </button>
        </div>
      </form>
    </section>
  );
}
