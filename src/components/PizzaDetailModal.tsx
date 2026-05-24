"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Pizza } from "@/lib/pizzas";

type Props = {
  pizza: Pizza;
  onClose: () => void;
};

export default function PizzaDetailModal({ pizza, onClose }: Props) {
  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    /* ── Overlay ── */
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      {/* ── Card ── */}
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden animate-slide-up"
        style={{ background: "#1C1917", border: "1px solid #3a3330" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen de la pizza */}
        <div className="relative h-52 w-full" style={{ background: "#292524" }}>
          <Image
            src={pizza.image}
            alt={pizza.name}
            fill
            className="object-contain p-4"
            style={{
              filter: "drop-shadow(0 10px 30px rgba(217,119,6,0.4))",
            }}
            sizes="400px"
          />

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "#1C1917", border: "1px solid #3a3330" }}
            aria-label="Cerrar"
          >
            <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Badge especialidad */}
          {pizza.isSpecial && (
            <span
              className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
              style={{ background: "#D97706", color: "#1C1917" }}
            >
              ⭐ La Especialidad
            </span>
          )}
        </div>

        {/* Contenido */}
        <div className="px-5 py-5">
          {/* Nombre + precio */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h2 className="text-white font-bold text-2xl leading-tight">{pizza.name}</h2>
            <div className="flex flex-col items-end shrink-0">
              {pizza.startingAt && (
                <span className="text-white/40 text-xs leading-none mb-0.5">desde</span>
              )}
              <span className="text-2xl font-extrabold leading-tight" style={{ color: "#D97706" }}>
                ${pizza.price}
                <span className="text-sm font-normal text-white/40 ml-1">USD</span>
              </span>
            </div>
          </div>

          {/* Descripción completa */}
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            {pizza.description}
          </p>

          {/* Ingredientes */}
          <div className="mb-5">
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-2">
              Ingredientes
            </p>
            <div className="flex flex-wrap gap-2">
              {pizza.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ background: "#292524", border: "1px solid #3a3330", color: "rgba(255,255,255,0.7)" }}
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Tamaño */}
          <div
            className="flex items-center justify-between rounded-xl px-4 py-3"
            style={{ background: "#292524" }}
          >
            <span className="text-white/40 text-xs">Tamaño único</span>
            <span className="text-white/80 text-sm font-semibold">16" — 8 rebanadas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
