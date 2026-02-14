export default function CarruselMarcas() {

    return <>
    <h2 className="text-center mt-8 text-2xl">Nuestras Marcas</h2>
      <section className="overflow-hidden my-8">
  <div className="flex w-max animate-scroll">
    {/* primera tanda */}
    {[...Array(16)].map((_, i) => (
      <img key={`a-${i}`} src={`/carrusel-marcas/${i + 1}.png`} className="h-16 mx-6" />
    ))}

    {/* duplicado para loop infinito */}
    {[...Array(16)].map((_, i) => (
      <img key={`b-${i}`} src={`/carrusel-marcas/${i + 1}.png`} className="h-16 mx-6" />
    ))}
  </div>
</section>
    </>
}