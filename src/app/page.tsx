import { pizzaSize } from "@/lib/pizzas";
import PizzaCarousel from "@/components/PizzaCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 font-sans flex flex-col">

      {/* ── HEADER ── */}
      <header className="bg-white border-b border-orange-100 shadow-sm sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🍕</span>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">Pizzería</h1>
              <p className="text-xs text-orange-500 font-medium tracking-wide uppercase">Menú Digital</p>
            </div>
          </div>
          <span className="text-sm text-gray-500 bg-orange-100 px-3 py-1 rounded-full font-medium">
            {pizzaSize.label}
          </span>
        </div>
      </header>

      {/* ── SECCIÓN TÍTULO ── */}
      <section className="text-center pt-14 pb-10 px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-300" />
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            Nuestro Menú
          </span>
          <span className="h-px w-10 bg-orange-300" />
        </div>
        <h2 className="text-gray-800 text-4xl md:text-5xl font-extrabold leading-tight mb-3">
          Pizzas <span className="text-orange-500">Artesanales</span>,<br className="hidden sm:block" /> Hechas para Ti
        </h2>
        <p className="text-gray-500 max-w-md mx-auto text-sm md:text-base">
          Todas en tamaño único · <strong className="text-gray-600">{pizzaSize.label}</strong> · Ingredientes frescos
        </p>
      </section>

      {/* ── CARRUSEL ── */}
      <section className="flex-1 flex items-start justify-center pb-16 px-4">
        <div className="w-full max-w-5xl">
          <PizzaCarousel />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="text-center text-sm text-gray-400 py-6 border-t border-orange-100">
        🍕 Precios en MXN · IVA incluido · Gracias por visitarnos
      </footer>

    </main>
  );
}
