"use client";

import { useState } from "react";
import { pizzas } from "@/lib/pizzas";

const cardBg: Record<string, string> = {
  hawaiana: "from-yellow-300 via-orange-300 to-amber-400",
  mexicana: "from-red-400 via-orange-400 to-red-500",
  pepperoni: "from-red-300 via-rose-400 to-red-500",
  alpastor: "from-orange-300 via-amber-400 to-orange-500",
  mixta: "from-orange-200 via-yellow-300 to-orange-400",
};

export default function PizzaCarousel() {
  const [active, setActive] = useState(0);
  const total = pizzas.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const leftIdx = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  return (
    <div className="w-full flex flex-col items-center gap-10 select-none">

      {/* ── CARRUSEL ── */}
      <div className="relative w-full max-w-5xl h-[440px] flex items-center justify-center px-4">

        {/* Carta IZQUIERDA */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 w-[28%] h-[360px] rounded-2xl overflow-hidden opacity-50 hover:opacity-70 transition-all duration-300 cursor-pointer shadow-md"
          aria-label="Pizza anterior"
        >
          <Card pizza={pizzas[leftIdx]} active={false} />
        </button>

        {/* Carta CENTRAL */}
        <div className="relative z-20 w-[44%] h-[440px] rounded-2xl overflow-hidden shadow-xl shadow-orange-200 transition-all duration-300">
          <Card pizza={pizzas[active]} active={true} />
        </div>

        {/* Carta DERECHA */}
        <button
          onClick={next}
          className="absolute right-0 z-10 w-[28%] h-[360px] rounded-2xl overflow-hidden opacity-50 hover:opacity-70 transition-all duration-300 cursor-pointer shadow-md"
          aria-label="Pizza siguiente"
        >
          <Card pizza={pizzas[rightIdx]} active={false} />
        </button>
      </div>

      {/* ── NAVEGACIÓN ── */}
      <div className="flex items-center gap-5">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full border-2 border-orange-200 bg-white flex items-center justify-center text-orange-400 hover:border-orange-400 hover:text-orange-500 transition-all duration-200 shadow-sm"
          aria-label="Anterior"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {pizzas.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Pizza ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 h-2.5 bg-orange-500"
                  : "w-2.5 h-2.5 bg-orange-200 hover:bg-orange-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-11 h-11 rounded-full border-2 border-orange-200 bg-white flex items-center justify-center text-orange-400 hover:border-orange-400 hover:text-orange-500 transition-all duration-200 shadow-sm"
          aria-label="Siguiente"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Card({ pizza, active }: { pizza: (typeof pizzas)[0]; active: boolean }) {
  const bg = cardBg[pizza.id] ?? "from-orange-200 to-amber-300";

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${bg} flex flex-col justify-end`}>

      {/* Badge especialidad */}
      {pizza.isSpecial && (
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
          ⭐ Especialidad
        </div>
      )}

      {/* Emoji central */}
      <div className="absolute inset-0 flex items-center justify-center pb-6">
        <span className={`transition-all duration-300 drop-shadow-md ${active ? "text-[100px]" : "text-[65px]"}`}>
          {pizza.emoji}
        </span>
      </div>

      {/* Overlay blanco inferior */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-white via-white/90 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 p-5 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center text-base shrink-0">
            🍕
          </div>
          <h3 className="text-gray-800 font-bold text-lg leading-tight">{pizza.name}</h3>
        </div>

        {active && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {pizza.description}
          </p>
        )}

        {active && (
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-orange-100">
            <span className="text-2xl font-extrabold text-orange-500">
              ${pizza.price}
              <span className="text-sm font-normal text-gray-400 ml-1">MXN</span>
            </span>
            <span className="flex items-center gap-1 text-sm font-semibold text-orange-500 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full hover:bg-orange-100 transition-colors cursor-pointer">
              Ver pizza
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
