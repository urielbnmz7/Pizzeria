import { Pizza } from "@/lib/pizzas";

type Props = {
  pizza: Pizza;
};

export default function PizzaCard({ pizza }: Props) {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md
        ${pizza.isSpecial ? "border-orange-400 ring-2 ring-orange-300" : "border-orange-100"}`}
    >
      {/* Badge especialidad */}
      {pizza.isSpecial && (
        <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow">
          ⭐ Especialidad
        </div>
      )}

      {/* Emoji / imagen */}
      <div
        className={`flex items-center justify-center text-6xl py-8
          ${pizza.isSpecial ? "bg-orange-50" : "bg-orange-50/60"}`}
      >
        {pizza.emoji}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-800 leading-snug">
          {pizza.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1 mb-4 leading-relaxed flex-1">
          {pizza.description}
        </p>

        {/* Ingredientes */}
        <div className="flex flex-wrap gap-1 mb-4">
          {pizza.ingredients.map((ing) => (
            <span
              key={ing}
              className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full"
            >
              {ing}
            </span>
          ))}
        </div>

        {/* Precio */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-orange-100">
          <span className="text-2xl font-extrabold text-orange-500">
            ${pizza.price}
            <span className="text-sm font-normal text-gray-400 ml-1">MXN</span>
          </span>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">
            8 rebanadas
          </span>
        </div>
      </div>
    </div>
  );
}
