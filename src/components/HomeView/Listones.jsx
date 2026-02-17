export default function Listones({ img, parrafo, titulo }) {
    return (
        <section>
            <div className="flex flex-col items-center justify-center w-auto ">
                <img className="h-25 w-20" src={img} alt="" />
                <h2 className="text-white text-center text-xl w-[250px]">{titulo}</h2>
                <h2 className="text-white text-center text-md w-[300px]">
                    {parrafo}
                </h2>
            </div>
        </section>
    );
}