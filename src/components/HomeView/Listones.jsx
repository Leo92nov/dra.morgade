export default function Listones({ img, parrafo, titulo }) {
    return (
        <section>
            <div className="flex flex-col items-center justify-center text-center xl:flex">
                <img className="h-25 w-20" src={img} alt="" />
                <h2 className="text-white text-xl w-[250px] mt-2">
                    {titulo}
                </h2>
                <p className="text-white text-md w-[300px] mt-1">
                    {parrafo}
                </p>
            </div>
        </section>
    );
}
