import { pizzaSize } from "@/lib/pizzas";
import PizzaCarousel from "@/components/PizzaCarousel";

export default function Home() {
  return (
    <main className="min-h-screen font-sans flex flex-col" style={{ background: "#1C1917" }}>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-30 border-b" style={{ background: "#1C1917", borderColor: "#292524" }}>
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🍕</span>
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">Pizzería</h1>
              <p className="text-xs font-medium tracking-wide uppercase" style={{ color: "#D97706" }}>
                Menú Digital
              </p>
            </div>
          </div>
          <span className="text-sm font-medium px-3 py-1 rounded-full text-white/60" style={{ background: "#292524" }}>
            {pizzaSize.label}
          </span>
        </div>
      </header>

      {/* ── SECCIÓN TÍTULO ── */}
      <section className="text-center pt-6 pb-4 px-4">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold leading-tight">
          Pizzas <span style={{ color: "#D97706" }}>Artesanales</span>
        </h2>
        <p className="text-white/30 text-xs mt-1">{pizzaSize.label} · Ingredientes frescos</p>
      </section>

      {/* ── CARRUSEL ── */}
      <section className="flex-1 flex items-start justify-center pb-16 px-4">
        <div className="w-full max-w-5xl">
          <PizzaCarousel />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="text-center text-sm py-6 border-t text-white/30" style={{ borderColor: "#292524" }}>
        🍕 Precios en USD · Gracias por visitarnos
      </footer>

    </main>
  );
}
