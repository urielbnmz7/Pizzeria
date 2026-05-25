"use client";

import { useState } from "react";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  const PHONE = "8016043054";
  const WHATSAPP = "18019133841";
  const MSG = encodeURIComponent("Hola, me gustaría ordenar una pizza");

  // Android: smsto: con +1 y ?body= · iOS: sms: con &body=
  const isAndroid = typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
  const smsHref = isAndroid
    ? `smsto:+1${PHONE}?body=${MSG}`
    : `sms:${PHONE}&body=${MSG}`;

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3 pointer-events-none">

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

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP}?text=${MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 pl-4 pr-3 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-transform active:scale-95"
          style={{ background: "#25D366", color: "#fff" }}
          onClick={() => setOpen(false)}
        >
          WhatsApp
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.054 23.25a.75.75 0 00.916.916l5.397-1.478A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.523-5.2-1.433l-.373-.222-3.863 1.057 1.058-3.862-.222-.374A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </span>
        </a>

        {/* Mensaje de texto */}
        <a
          href={PHONE ? smsHref : "#"}
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
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 active:scale-95 pointer-events-auto"
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
