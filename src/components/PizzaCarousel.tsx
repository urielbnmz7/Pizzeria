"use client";

import { useState } from "react";
import Image from "next/image";
import { pizzas } from "@/lib/pizzas";
import PizzaImage from "./PizzaImage";
import PizzaDetailModal from "./PizzaDetailModal";

export default function PizzaCarousel() {
  const [active, setActive] = useState(0);
  const total = pizzas.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const leftIdx  = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  const [modalOpen, setModalOpen] = useState(false);

  const touchStartX = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => touchStartX[1](e.touches[0].clientX);
  const handleTouchEnd   = (e: React.TouchEvent) => {
    const diff = touchStartX[0] - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
  };

  return (
    <>
    {modalOpen && (
      <PizzaDetailModal pizza={pizzas[active]} onClose={() => setModalOpen(false)} />
    )}
    <div
      className="w-full h-full flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ════════════════════════════
          MOBILE — una card fluida
      ════════════════════════════ */}
      <div className="flex md:hidden flex-col h-full">

        {/* Pizza — ocupa todo el espacio disponible */}
        <div className="flex-1 relative min-h-0">
          <style>{`
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
          `}</style>
          {/* Brillo estático */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(217,119,6,0.35) 0%, rgba(217,119,6,0.1) 50%, transparent 70%)",
            }}
          />
          {/* Todas las pizzas precargadas — solo la activa es visible */}
          {pizzas.map((pizza, i) => (
            <div
              key={pizza.id}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                animation: "spin-slow 90s linear infinite",
                transformOrigin: "50% 50%",
                borderRadius: "50%",
                overflow: "hidden",
                opacity: i === active ? 1 : 0,
                transition: "opacity 0.4s ease",
                pointerEvents: i === active ? "auto" : "none",
              }}
            >
              <Image
                src={pizza.image}
                alt={pizza.name}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          ))}
        </div>

        {/* Info card */}
        <div className="shrink-0 pb-2">
          <InfoCard pizza={pizzas[active]} onOpen={() => setModalOpen(true)} />
        </div>

        {/* Navegación */}
        <div className="shrink-0 flex items-center justify-center gap-5 pt-2 pb-1">
          <NavBtn onClick={prev} dir="left" />
          <Dots total={total} active={active} onSelect={setActive} />
          <NavBtn onClick={next} dir="right" />
        </div>
      </div>

      {/* ════════════════════════════
          DESKTOP — 3 cartas
      ════════════════════════════ */}
      <div className="hidden md:flex flex-col h-full">
        {/* Cards */}
        <div className="flex-1 relative flex items-end justify-center px-6 min-h-0">

          {/* Izquierda */}
          <button
            onClick={prev}
            aria-label="Pizza anterior"
            className="flex flex-col items-center gap-3 absolute left-4 bottom-0 w-[25%] opacity-50 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            <PizzaImage src={pizzas[leftIdx].image} alt={pizzas[leftIdx].name} size="md" />
            <MiniPill name={pizzas[leftIdx].name} />
          </button>

          {/* Central */}
          <div className="flex flex-col items-center gap-4 w-[42%] z-20">
            <PizzaImage src={pizzas[active].image} alt={pizzas[active].name} size="hero" />
            <InfoCard pizza={pizzas[active]} onOpen={() => setModalOpen(true)} />
          </div>

          {/* Derecha */}
          <button
            onClick={next}
            aria-label="Pizza siguiente"
            className="flex flex-col items-center gap-3 absolute right-4 bottom-0 w-[25%] opacity-50 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            <PizzaImage src={pizzas[rightIdx].image} alt={pizzas[rightIdx].name} size="md" />
            <MiniPill name={pizzas[rightIdx].name} />
          </button>
        </div>

        {/* Navegación */}
        <div className="shrink-0 flex items-center justify-center gap-5 py-5">
          <NavBtn onClick={prev} dir="left" />
          <Dots total={total} active={active} onSelect={setActive} />
          <NavBtn onClick={next} dir="right" />
        </div>
      </div>
    </div>
    </>
  );
}

/* ── Info card ── */
function InfoCard({ pizza, onOpen }: { pizza: (typeof pizzas)[0]; onOpen: () => void }) {
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
      <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-3">{pizza.description}</p>
      <button
        onClick={onOpen}
        className="w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
        style={{ background: "#D97706", color: "#1C1917" }}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Ver detalles
      </button>
    </div>
  );
}

/* ── Mini pill desktop ── */
function MiniPill({ name }: { name: string }) {
  return (
    <div className="w-full rounded-xl px-4 py-2 text-center" style={{ background: "#292524", border: "1px solid #3a3330" }}>
      <p className="text-white/50 font-semibold text-xs truncate">{name}</p>
    </div>
  );
}

/* ── Botones flecha ── */
function NavBtn({ onClick, dir }: { onClick: () => void; dir: "left" | "right" }) {
  return (
    <button
      onClick={onClick}
      className="w-11 h-11 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
      style={{ background: "#292524", border: "1px solid #3a3330" }}
      aria-label={dir === "left" ? "Anterior" : "Siguiente"}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}

/* ── Dots ── */
function Dots({ total, active, onSelect }: { total: number; active: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
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
  );
}
