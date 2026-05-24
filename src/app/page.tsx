import { pizzaSize } from "@/lib/pizzas";
import PizzaCarousel from "@/components/PizzaCarousel";
import ContactButton from "@/components/ContactButton";
import PreloadModalImages from "@/components/PreloadModalImages";

export default function Home() {
  return (
    <main
      className="flex flex-col overflow-hidden"
      style={{ background: "#1C1917", height: "100dvh" }}
    >
      {/* ── HEADER ── */}
      <header
        className="shrink-0 border-b"
        style={{ background: "#1C1917", borderColor: "#292524" }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍕</span>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">Pizzas Joss</h1>
              <p className="text-xs font-medium tracking-wide uppercase" style={{ color: "#D97706" }}>
                Menú Digital
              </p>
            </div>
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full text-white/50" style={{ background: "#292524" }}>
            {pizzaSize.label}
          </span>
        </div>
      </header>

      {/* ── TÍTULO ── */}
      <div className="shrink-0 text-center pt-4 pb-2 px-4">
        <h2 className="text-white text-xl md:text-3xl font-extrabold leading-tight">
          Pizzas <span style={{ color: "#D97706" }}>Artesanales</span>
        </h2>
        <p className="text-white/30 text-xs mt-0.5">{pizzaSize.label} · Ingredientes frescos</p>
      </div>

      {/* ── CARRUSEL — ocupa todo el espacio restante ── */}
      <div className="flex-1 min-h-0 flex items-center justify-center px-4 pb-4">
        <div className="w-full h-full max-w-5xl">
          <PizzaCarousel />
        </div>
      </div>

      {/* ── BOTÓN FLOTANTE CONTACTO ── */}
      <ContactButton />

      {/* Precarga imágenes del modal con baja prioridad, tras cargar el carrusel */}
      <PreloadModalImages />
    </main>
  );
}
