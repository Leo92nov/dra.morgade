export default function IconWsp() {
  return (
    <a
      href="https://wa.me/5491168638712"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 hover:scale-105
        z-[9999]
        group
      "
    >
      {/* Halo */}
      <span
        className="
          absolute inset-0
          rounded-full
          bg-green-500/40
          animate-ping
          [animation-duration:4s]
        "
      />

      {/* Botón */}
     
        <img
          src="/Svgs/iconWsp.svg"
          alt="WhatsApp"
          className="w-16 h-16"
        />
      
    </a>
  );
}
