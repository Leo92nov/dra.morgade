import { useEffect, useState } from "react"

export default function CarruseHome() {

    const images = [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]
    )


    return <>

    

    </>
}