import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "hero";
};

const sizes = {
  sm:   { px: 80,  tailwind: "w-20 h-20"   },
  md:   { px: 150, tailwind: "w-36 h-36"   },
  lg:   { px: 200, tailwind: "w-52 h-52"   },
  hero: { px: 500, tailwind: "w-[min(88vw,460px)] h-[min(88vw,460px)]" },
};

export default function PizzaImage({ src, alt, size = "hero" }: Props) {
  const s = sizes[size];
  const isHero = size === "hero";

  return (
    <div className={`relative ${s.tailwind} shrink-0 flex items-center justify-center`}>
      {isHero && (
        <>
          <style>{`
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
          `}</style>
          {/* Brillo estático — no gira */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(217,119,6,0.35) 0%, rgba(217,119,6,0.1) 50%, transparent 70%)",
              transform: "scale(1.1)",
            }}
          />
        </>
      )}

      {/* Círculo que gira — eje siempre en el centro exacto */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={isHero ? {
          animation: "spin-slow 90s linear infinite",
          transformOrigin: "50% 50%",
          borderRadius: "50%",
          overflow: "hidden",
        } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes={`${s.px}px`}
        />
      </div>
    </div>
  );
}
