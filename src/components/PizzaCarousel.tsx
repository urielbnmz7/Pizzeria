"use client";

import { useState } from "react";
import { pizzas } from "@/lib/pizzas";
import PizzaImage from "./PizzaImage";

export default function PizzaCarousel() {
  const [active, setActive] = useState(0);
  const total = pizzas.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const leftIdx  = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  const touchStartX = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => touchStartX[1](e.touches[0].clientX);
  const handleTouchEnd   = (e: React.TouchEvent) => {
    const diff = touchStartX[0] - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
  };

  return (
    <div
      className="w-full flex flex-col items-center gap-8 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── CARRUSEL ── */}
      <div className="relative w-full max-w-5xl h-[640px] md:h-[720px] flex items-end justify-center px-6 pb-0">

        {/* Slot IZQUIERDA — solo desktop */}
        <button
          onClick={prev}
          aria-label="Pizza anterior"
          className="hidden md:flex flex-col items-center gap-3 absolute left-4 bottom-0 w-[25%] opacity-50 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          <PizzaImage src={pizzas[leftIdx].image} alt={pizzas[leftIdx].name} size="md" />
          <MiniPill name={pizzas[leftIdx].name} />
        </button>

        {/* Slot CENTRAL */}
        <div className="relative flex flex-col items-center gap-5 w-full md:w-[42%] z-20">
          {/* Pizza flotante */}
          <PizzaImage src={pizzas[active].image} alt={pizzas[active].name} size="hero" />

          {/* Info card separada */}
          <InfoCard pizza={pizzas[active]} />
        </div>

        {/* Slot DERECHA — solo desktop */}
        <button
          onClick={next}
          aria-label="Pizza siguiente"
          className="hidden md:flex flex-col items-center gap-3 absolute right-4 bottom-0 w-[25%] opacity-50 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          <PizzaImage src={pizzas[rightIdx].image} alt={pizzas[rightIdx].name} size="md" />
          <MiniPill name={pizzas[rightIdx].name} />
        </button>
      </div>

      {/* ── NAVEGACIÓN ── */}
      <div className="flex items-center gap-5">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
          style={{ background: "#292524", border: "1px solid #3a3330" }}
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
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "2rem" : "0.625rem",
                height: "0.625rem",
                background: i === active ? "#D97706" : "#3a3330",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-11 h-11 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
          style={{ background: "#292524", border: "1px solid #3a3330" }}
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

/* ── Info card — elemento independiente ── */
function InfoCard({ pizza }: { pizza: (typeof pizzas)[0] }) {
  return (
    <div className="w-full rounded-2xl px-5 py-4" style={{ background: "#292524", border: "1px solid #3a3330" }}>
      {pizza.isSpecial && (
        <span className="inline-block text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wide mb-2" style={{ background: "#D97706", color: "#1C1917" }}>
          ⭐ La Especialidad
        </span>
      )}
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="text-white font-bold text-xl leading-tight">{pizza.name}</h3>
        <div className="flex flex-col items-end shrink-0">
          {pizza.startingAt && (
            <span className="text-white/40 text-xs leading-none mb-0.5">desde</span>
          )}
          <span className="text-xl font-extrabold leading-tight" style={{ color: "#D97706" }}>
            ${pizza.price}
            <span className="text-xs font-normal text-white/40 ml-1">USD</span>
          </span>
        </div>
      </div>
      <p className="text-white/40 text-sm line-clamp-1 mb-3">{pizza.description}</p>
      <button
        className="w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5"
        style={{ background: "#D97706", color: "#1C1917" }}
      >
        Ver pizza
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

/* ── Mini pill — para cards laterales ── */
function MiniPill({ name }: { name: string }) {
  return (
    <div className="w-full rounded-xl px-4 py-2 text-center" style={{ background: "#292524", border: "1px solid #3a3330" }}>
      <p className="text-white/50 font-semibold text-xs truncate">{name}</p>
    </div>
  );
}
