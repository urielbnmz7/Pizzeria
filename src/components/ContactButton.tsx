"use client";

import { useState } from "react";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  const PHONE = "8016043054";

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3">

      {/* ── Opciones (aparecen al abrir) ── */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        {/* Llamar */}
        <a
          href={PHONE ? `tel:${PHONE}` : "#"}
          className="flex items-center gap-2.5 pl-4 pr-3 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-transform active:scale-95"
          style={{ background: "#D97706", color: "#1C1917" }}
          onClick={() => setOpen(false)}
        >
          Llamar
          {/* Phone icon */}
          <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(0,0,0,0.15)" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
        </a>

        {/* Mensaje de texto */}
        <a
          href={PHONE ? `sms:${PHONE}` : "#"}
          className="flex items-center gap-2.5 pl-4 pr-3 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-transform active:scale-95"
          style={{ background: "#292524", border: "1px solid #3a3330", color: "#fff" }}
          onClick={() => setOpen(false)}
        >
          Mensaje de texto
          {/* SMS icon */}
          <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "#3a3330" }}>
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </span>
        </a>
      </div>

      {/* ── Botón principal ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contactar"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 active:scale-95"
        style={{
          background: "#D97706",
          boxShadow: "0 8px 30px rgba(217,119,6,0.45)",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        {/* Teléfono → X cuando está abierto */}
        <svg
          className="w-6 h-6 transition-all duration-300"
          style={{ color: "#1C1917" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.2}
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          )}
        </svg>
      </button>
    </div>
  );
}
