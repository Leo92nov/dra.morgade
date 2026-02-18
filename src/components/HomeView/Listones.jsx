export default function Listones({ img, parrafo, titulo }) {
    return (
        <section>
            <div className="flex flex-col items-center justify-center text-center xl:flex">
                <img className="h-25 w-20" src={img} alt="" />
                <h2 className=" text-black text-xl w-[250px] mt-2 font-bold ">
                    {titulo}
                </h2>
                <p className=" text-black text-md w-[300px] text-center mt-2 font-bold">
                    {parrafo}
                </p>
            </div>
        </section>
    );
}
