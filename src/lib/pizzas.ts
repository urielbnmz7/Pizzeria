export type Pizza = {
  id: string;
  name: string;
  description: string;
  price: number;
  startingAt?: boolean;
  emoji: string;
  image: string;
  isSpecial?: boolean;
  ingredients: string[];
};

export const pizzas: Pizza[] = [
  {
    id: "hawaiana",
    name: "Pizza Hawaiana",
    description:
      "El clásico dulce-salado que todos aman. Una combinación perfecta de sabores tropicales.",
    price: 20,
    emoji: "🍍",
    image: "/imagenes/pizzas/Hawaina.avif",
    ingredients: ["Salsa de tomate", "Queso mozzarella", "Jamón", "Piña"],
  },
  {
    id: "mexicana",
    name: "Pizza Mexicana",
    description:
      "Nuestra creación estrella. Una explosión de sabores picantes y ahumados que te llevarán directo a México.",
    price: 25,
    emoji: "🌶️",
    image: "/imagenes/pizzas/mexicana.avif",
    isSpecial: true,
    ingredients: [
      "Puré de tomate",
      "Queso mozzarella",
      "Chorizo de puerco",
      "Jamón",
      "Cebolla",
      "Chile jalapeño",
    ],
  },
  {
    id: "pepperoni",
    name: "Pizza Pepperoni",
    description:
      "El favorito de siempre. Generosas rodajas de pepperoni sobre una cama de queso derretido.",
    price: 20,
    emoji: "🍕",
    image: "/imagenes/pizzas/Peperoni.avif",
    ingredients: [
      "Salsa de tomate",
      "Queso mozzarella",
      "Pepperoni premium",
    ],
  },
  {
    id: "alpastor",
    name: "Pizza Al Pastor",
    description:
      "La fusión perfecta entre la taquería y la pizzería. Sabor auténtico en cada rebanada.",
    price: 27,
    emoji: "🥩",
    image: "/imagenes/pizzas/Pastor.avif",
    ingredients: [
      "Puré de tomate",
      "Queso mozzarella",
      "Carne al pastor de puerco",
      "Jamón",
      "Piña",
      "Cebolla",
      "Chile jalapeño",
    ],
  },
  {
    id: "mixta",
    name: "Pizza Mixta",
    description:
      "Para los indecisos — lo mejor de todos los mundos en una sola pizza.",
    price: 25,
    startingAt: true,
    emoji: "🎉",
    image: "/imagenes/pizzas/Mixta.avif",
    ingredients: [
      "¡Tú decides! Elige 2 sabores diferentes y los combinamos en una sola pizza",
    ],
  },
];

export const pizzaSize = {
  inches: 16,
  slices: 8,
  label: '16" — 8 rebanadas',
};
