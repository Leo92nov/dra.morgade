import { useEffect, useState } from "react";

export default function SliderHome() {

  const images = [
    "/SliderHome/1.jpg",
    "/SliderHome/2.jpg",
    "/SliderHome/3.webp",
    "/SliderHome/4.jpg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative w-[60%] h-[500px] overflow-hidden rounded-xl ml-auto mr-auto">

      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute w-full h-full object-cover 
          transition-opacity duration-3000
          ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

    </div>
  );
}