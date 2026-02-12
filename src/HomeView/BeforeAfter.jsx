import { useEffect, useRef, useState } from "react";

export default function BeforeAfterElfsight({ antes, despues, initial = 50 }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(initial);
  const dragging = useRef(false);

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const setFromClientX = (clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(clamp(pct, 0, 100));
  };

  const onPointerDown = (e) => {
    dragging.current = true;
    ref.current?.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = (e) => {
    dragging.current = false;
    ref.current?.releasePointerCapture?.(e.pointerId);
  };

  useEffect(() => {
    const stop = () => (dragging.current = false);
    window.addEventListener("pointerup", stop);
    return () => window.removeEventListener("pointerup", stop);
  }, []);

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        className="relative w-full aspect-square overflow-hidden rounded-2xl select-none touch-none cursor-ew-resize"
      >
        {/* ANTES (lado izquierdo) */}
        <img
          src={antes}
          alt="Antes"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
          }}
        />

        {/* DESPUÉS (lado derecho) */}
        <img
          src={despues}
          alt="Después"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            clipPath: `polygon(${pos}% 0, 100% 0, 100% 100%, ${pos}% 100%)`,
          }}
        />

        {/* Labels */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-black/45 text-white backdrop-blur">
            Antes
          </span>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-black/45 text-white backdrop-blur">
            Después
          </span>
        </div>

        {/* Línea divisoria */}
        <div
          className="absolute top-0 h-full w-[2px] bg-white/90 shadow-lg z-20"
          style={{ left: `${pos}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 z-30"
          style={{ left: `calc(${pos}% - 22px)` }}
        >
          <div className="w-11 h-11 rounded-full bg-white shadow-xl border border-black/10 flex items-center justify-center">
            <div className="flex items-center gap-2 opacity-70 select-none">
              <span className="text-xl leading-none">‹</span>
              <span className="text-xl leading-none">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
