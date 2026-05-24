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

  return (
    <div className={`relative ${s.tailwind} shrink-0`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        style={{ filter: "drop-shadow(0 30px 60px rgba(217,119,6,0.45)) drop-shadow(0 0px 30px rgba(217,119,6,0.2))" }}
        sizes={`${s.px}px`}
      />
    </div>
  );
}
